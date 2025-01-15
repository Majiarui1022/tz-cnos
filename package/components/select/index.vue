<template>
  <el-select
    ref="selectComp"
    v-bind="reject(props, defaultKeys)"
    style="width: 240px"
    v-model="resultValue"
    @change="change"
    @visibleChange="visibleChange"
    @removeTag="removeTag"
    @clear="clear"
    @blur="blurCall"
    @focus="focusCall"
  >
    <template #[val] v-for="val in getSlots">
      <slot :name="val" :options="optionsArray" />
    </template>
    <el-option
      v-for="item in optionsArray"
      :key="item[filedKey]"
      :label="item[filedLabel]"
      :value="item[filedValue]"
      :disabled="item.disabled"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, getCurrentInstance } from 'vue'
import { SelectType, defaultKeys } from './type'
import { reject } from '../../hooks/tz'
const props = withDefaults(defineProps<SelectType>(), {
  queryData: 'data',
  filedLabel: 'label',
  filedValue: 'value',
  filedKey: 'value',
})
const optionsArray = ref(props.options)

let inputValue = ref<any>(props.modelValue)
let resultValue = computed({
  get() {
    if (props.modelValue != inputValue.value) {
      inputValue.value = props.modelValue
    }
    return inputValue.value
  },
  set(val) {
    inputValue.value = val
    let result: any
    if (props.multiple || props.allowCreate) {
      result = val
    } else {
      let selectList = optionsArray.value?.filter((item) => val === item.code)
      console.log(selectList, '選擇之')
      result =
        selectList && selectList.length > 0
          ? selectList[0][props.filedLabel]
          : ''
    }
    console.log(result, '選擇之2')
    emits('update:modelValue', result)
  },
})

const getSlots = computed(() => {
  const that = getCurrentInstance()
  const slotsList: string[] = []
  Object.keys(that!.slots).forEach((item) => {
    slotsList.push(item)
  })
  return slotsList
})
// 选中值发生变化时触发
function change(val: any) {
  let getLabel = ''
  try {
    if (!props.multiple && !props.allowCreate) {
      const selectItem = optionsArray.value?.filter(
        (item) => item[props.filedValue] == val
      )
      getLabel =
        selectItem && selectItem?.length > 0
          ? selectItem[0][props.filedLabel]
          : ''
    }
  } catch (e) {
    getLabel = ''
  }
  emits('update:modelValue', val)
  emits('change', val, getLabel)
}
// 下拉框出现/隐藏时触发
function visibleChange(visible: boolean) {
  emits('visibleChange', visible)
}
// 多选模式下移除tag时触发
function removeTag(visible: boolean) {
  emits('visibleChange', visible)
}
// 可清空的单选模式下用户点击清空按钮时触发
function clear() {
  emits('clear')
}
// 当 input 失去焦点时触发
function blurCall(event) {
  emits('blur', event)
}
// 当 input 获得焦点时触发
function focusCall(event) {
  emits('focus', event)
}
const emits = defineEmits([
  'update:modelValue',
  'change',
  'visibleChange',
  'removeTag',
  'clear',
  'blur',
  'focus',
])
const selectComp = ref()
function focus() {
  selectComp.value.focus()
}
function blur() {
  selectComp.value.blur()
}
function selectedLabel() {
  return selectComp.value.selectedLabel
}
onMounted(() => {
  if (props.api) {
    let queryParams = props.beforeQuery
      ? props.beforeQuery(props.params)
      : props.params
    props.api(queryParams).then((res) => {
      optionsArray.value = props.affterData
        ? props.affterData(res[props.queryData])
        : res[props.queryData]
    })
  }
})

defineExpose({ focus, blur, selectedLabel })
</script>

<script lang="ts">
export default {
  name: 'TzSelect',
}
</script>
