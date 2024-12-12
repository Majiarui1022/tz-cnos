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
    <template v-if="tag === 'select'">
      <TzSelect v-bind="attrs" v-model="model[prop]" />
    </template>
    <template v-if="tag === 'autocomplete'">
      <TzAutocomplete v-bind="attrs" v-model="model[prop]" />
    </template>
    <template v-if="tag === 'cascader'">
      <TzCascader v-bind="attrs" v-model="model[prop]" />
    </template>
  </el-form-item>
</template>
<script lang="ts" setup>
import type { FormItemType } from './type'
import TzSelect from '../select'
import TzAutocomplete from '../autocomplete'
import TzCascader from '../cascader'
const props = withDefaults(defineProps<FormItemType>(), {
  labelPosition: '',
  labelWidth: '',
  showMessage: true,
  inlineMessage: '',
})
</script>
