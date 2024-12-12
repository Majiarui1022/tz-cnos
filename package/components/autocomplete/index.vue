<template>
  <el-autocomplete
    ref="autocomplete"
    v-model="inputValue"
    :placeholder="placeholder"
    :clearable="clearable"
    :valueKey="valueKey"
    :debounce="debounce"
    :placement="placement"
    :fetchSuggestions="fetchSuggestions"
    :triggerOnFocus="triggerOnFocus"
    :selectWhenUnmatched="selectWhenUnmatched"
    :name="name"
    :ariaLabel="ariaLabel"
    :hideLoading="hideLoading"
    :popperClass="popperClass"
    :teleported="teleported"
    :highlightFirstItem="highlightFirstItem"
    :fitInputWidth="fitInputWidth"
    :popperAppendToBody="popperAppendToBody"
    @blur="blur"
    @focus="focus"
    @input="input"
    @clear="clear"
    @select="select"
    @change="change"
  >
    <template v-for="val in getSlot" #[val]="item">
      <slot :name="val" :item="item"></slot>
    </template>
  </el-autocomplete>
</template>
<script lang="ts" setup>
import { ref, computed, getCurrentInstance, unref } from 'vue'
import type { AutoComplete } from './type'
import { defaultSlots } from './default'
const autocomplete = ref()
const props = withDefaults(defineProps<AutoComplete>(), {
  clearable: false,
  disabled: false,
  valueKey: 'value',
  debounce: 300,
  placement: 'bottom-start',
  triggerOnFocus: true,
  selectWhenUnmatched: false,
  hideLoading: false,
  teleported: true,
  highlightFirstItem: false,
  fitInputWidth: false,
  popperAppendToBody: false,
})

const emits = defineEmits([
  'blur',
  'focus',
  'input',
  'clear',
  'select',
  'change',
  'update:modelValue',
])
// 获取支持插槽
const getSlot = computed(() => {
  const that = getCurrentInstance()
  const slotsList: string[] = []
  Object.keys(that!.slots).forEach((item) => {
    if (defaultSlots.includes(item)) {
      slotsList.push(item)
    }
  })
  return slotsList
})
let inputValue = computed({
  get() {
    return props.modelValue
  },
  set(val: any) {
    emits('update:modelValue', val)
  },
})

function blur(event: FocusEvent) {
  emits('blur', event)
}
function focus(event: FocusEvent) {
  emits('focus', event)
}
function input(value: string | number) {
  emits('input', value)
}
function clear() {
  emits('clear')
}
function select(value: string | number) {
  emits('select', value)
}
function change(value: string | number) {
  emits('change', value)
}
defineExpose({
  activated() {
    return unref(autocomplete).activated
  },
  blur() {
    unref(autocomplete).blur()
  },
  close() {
    unref(autocomplete).close()
  },
  focus() {
    unref(autocomplete).focus()
  },
  handleSelect() {
    unref(autocomplete).handleSelect()
  },
  handleKeyEnter() {
    unref(autocomplete).handleKeyEnter()
  },
  highlightedIndex() {
    return unref(autocomplete).highlightedIndex
  },
  highlight() {
    unref(autocomplete).highlight()
  },
  inputRef() {
    return unref(autocomplete).inputRef
  },
  loading() {
    return unref(autocomplete).loading
  },
  popperRef() {
    return unref(autocomplete).popperRef
  },
  suggestions() {
    return unref(autocomplete).suggestions
  },
  getData(queryString: string) {
    unref(autocomplete).getData(queryString)
  },
})
</script>
<script lang="ts">
export default {
  name: 'TzAutocomplete',
}
</script>
