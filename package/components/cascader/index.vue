<template>
  <el-cascader
    v-model="cascaderValue"
    :options="options"
    :props="props"
    :size="size"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :showAllLevels="showAllLevels"
    :collapseTags="collapseTags"
    :collapseTagsTooltip="collapseTagsTooltip"
    :separator="separator"
    :filterable="filterable"
    :filterMethod="filterMethod"
    :debounce="debounce"
    :beforeFilter="beforeFilter"
    :popperClass="popperClass"
    :teleported="teleported"
    :tagType="tagType"
    :tagEffect="tagEffect"
    :validateEvent="validateEvent"
    :maxCollapseTags="maxCollapseTags"
    :emptyValues="emptyValues"
    :valueOnClear="valueOnClear"
    :persistent="persistent"
    :fallbackPlacements="fallbackPlacements"
    :placement="placement"
    :popperAppendToBody="popperAppendToBody"
    @change="change"
    @expand-change="expandChange"
    @blur="blur"
    @focus="focus"
    @clear="clear"
    @visible-change="visibleChange"
    @remove-tag="removeTag"
  >
    <!-- <template v-for="val in getSlot" #[val]="item">
      <slot :name="val" :item="item"></slot>
    </template> -->

    <template v-for="val in getSlot" #[val]="item">
      <slot :name="val" :item="item"></slot>
    </template>
  </el-cascader>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import { defaultSlots } from './default'
import type { CascaderType } from './type'
import type { CascaderValue } from 'element-plus'
const cascaderProps = withDefaults(defineProps<CascaderType>(), {
  showAllLevels: true,
  collapseTagsTooltip: false,
  separator: '/',
  debounce: 300,
  popperClass: '',
  teleported: true,
  tagType: 'info',
  tagEffect: 'light',
  validateEvent: true,
  maxCollapseTags: 1,
  persistent: true,
  placement: 'bottom-start',
  popperAppendToBody: true,
})
const emits = defineEmits([
  'change',
  'expand-change',
  'blur',
  'focus',
  'clear',
  'visibleChange',
  'remove-tag',
  'update:modelValue',
])
let cascaderValue = computed({
  get() {
    return cascaderProps.modelValue
  },
  set(val: any) {
    emits('update:modelValue', val)
  },
})
function change(value: CascaderValue) {
  console.log(value, cascaderValue)
  emits('change', value)
}
function expandChange(value: CascaderValue) {
  emits('expand-change', value)
}
function blur(event: FocusEvent) {
  emits('blur', event)
}
function focus(event: FocusEvent) {
  emits('focus', event)
}
function clear() {
  emits('clear')
}
function visibleChange(value: boolean) {
  emits('visibleChange', value)
}
function removeTag(value: any) {
  emits('remove-tag', value)
}
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
</script>
<script lang="ts">
export default {
  name: 'TzCascader',
}
</script>
