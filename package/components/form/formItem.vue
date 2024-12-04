<template>
  <el-form-item
    :prop="prop"
    :label="label"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :required="required"
    :rules="rules"
    :error="error"
    :show-message="showMessage"
    :inline-message="inlineMessage"
    :size="size"
    :for="fors"
    :validate-status="validateStatus"
  >
    <template v-if="!tag">
      <el-input v-model="model[prop]"></el-input>
    </template>
    <template v-if="tag === 'select'">
      <TzSelect v-bind="attrs" :value="model[prop]" />
    </template>
  </el-form-item>
</template>
<script lang="ts" setup>
import type { FormItemType } from './form.type'
import TzSelect from '../select'
const props = withDefaults(defineProps<FormItemType>(), {})

setTimeout(() => {
  console.log(props)
}, 1000)
</script>
