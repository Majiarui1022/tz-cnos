<template>
  <el-select
    ref="selectComp"
    v-bind="props"
    style="width: 240px"
    v-model="selectValue"
    @change="change"
    @visibleChange="visibleChange"
    @removeTag="removeTag"
    @clear="clear"
    @blur="blurCall"
    @focus="focusCall"
  >
    <template #[val]="scope" v-for="val in getSlots">
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
import { SelectType } from './select.type'
const props = withDefaults(defineProps<SelectType>(), {
  value: '',
  queryData: 'data',
  filedLabel: 'label',
  filedValue: 'value',
  filedKey: 'value',
})
const optionsArray = ref(props.options)
onMounted(() => {
  if (props.api) {
    let queryParams = null
    queryParams = props.beforeQuery
      ? props.beforeQuery(props.params)
      : props.params
    props.api(props.params).then((res) => {
      optionsArray.value = props.affterData
        ? props.affterData(res[props.queryData])
        : res[props.queryData]
    })
  }
})
const getSlots = computed(() => {
  const that = getCurrentInstance()
  const slotsList: string[] = []
  Object.keys(that!.slots).forEach((item) => {
    slotsList.push(item)
  })
  return slotsList
})
const selectValue = ref(props.value)
// 选中值发生变化时触发
function change(val: any) {
  let getLabel = ''
  try {
    const selectItem = optionsArray.value?.filter(
      (item) => item[props.filedValue] == val
    )
    getLabel =
      selectItem && selectItem?.length > 0
        ? selectItem[0][props.filedLabel]
        : ''
  } catch (e) {
    getLabel = ''
  }
  emits('update:value', val)
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
  'update:value',
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
defineExpose({ focus, blur, selectedLabel })
</script>
