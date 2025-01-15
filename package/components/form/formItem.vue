<template>
  <el-form-item
    :prop="prop"
    :label="label"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :required="required"
    :error="error"
    :show-message="showMessage"
    :inline-message="inlineMessage"
    :size="size"
    :for="fors"
    :validate-status="validateStatus"
  >
    <template v-if="defaultRender">
      <component v-if="model && prop" :is="defaultRender(model, prop)" />
    </template>
    <template v-if="!tag && !defaultRender">
      <el-input v-model="model[prop]"></el-input>
    </template>
    <!-- <template v-if="tag === 'select'">
      <TzSelect v-bind="attrs" v-model="model[prop]" />
    </template>
    <template v-if="tag === 'autocomplete'">
      <TzAutocomplete v-bind="attrs" v-model="model[prop]" />
    </template>
    <template v-if="tag === 'cascader'">
      <TzCascader v-bind="attrs" v-model="model[prop]" />
    </template> -->
    <template v-if="tag">
      <component :is="renderTz(tag, model[prop], attrs)" />
    </template>
  </el-form-item>
</template>
<script lang="ts" setup>
import type { FormItemType } from './type'
import { renderTz } from '../../hooks/renderTz'
withDefaults(defineProps<FormItemType>(), {
  labelPosition: '',
  labelWidth: '',
  showMessage: true,
  inlineMessage: '',
})
// function renderHtml() {
//   const obj = {
//     select: 'TzSelect',
//     autocomplete: 'TzAutocomplete',
//     cascader: 'TzCascader',
//   }
//   return h(resolveComponent(obj[props.tag]), {
//     modelValue: props.model[props.prop],
//     ...props.attrs,
//   })
// }
</script>
