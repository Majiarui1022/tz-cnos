<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="model"
    :rules="rules"
    :inline="inline"
    :labelPosition="labelPosition"
    :labelWidth="labelWidth"
    :labelSuffix="labelSuffix"
    :hideRequiredAsterisk="hideRequiredAsterisk"
    :requireAsteriskPosition="requireAsteriskPosition"
    :showMessage="showMessage"
    :inlineMessage="inlineMessage"
    :statusIcon="statusIcon"
    :validateOnRuleChange="validateOnRuleChange"
    :size="size"
    :disabled="disabled"
    :scrollToError="scrollToError"
    :scrollIntoViewOptions="scrollIntoViewOptions"
    :class="['tz-form', calss]"
  >
    <formItem v-for="val in formOtions" v-bind="val" :model="model"></formItem>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, unref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import formItem from './formItem.vue'
import type { FormType, Arrayable } from './type'
import type {
  FormItemProps,
  FormValidateCallback,
  FormItemContext,
} from './interface'

withDefaults(defineProps<FormType>(), {
  inline: false,
  labelPosition: 'right',
  labelWidth: '',
  labelSuffix: '',
  hideRequiredAsterisk: false,
  showMessage: true,
  inlineMessage: false,
  statusIcon: false,
  validateOnRuleChange: true,
  disabled: false,
  scrollToError: false,
})

const ruleFormRef = ref<FormInstance>()
defineExpose({
  validate(callback: FormValidateCallback) {
    unref(ruleFormRef)?.validate(callback)
  },
  validateField(
    props?: Arrayable<FormItemProps> | undefined,
    callback?: FormValidateCallback | undefined
  ) {
    unref(ruleFormRef)?.validateField(props, callback)
  },
  resetFields() {
    unref(ruleFormRef)?.resetFields()
  },
  scrollToField(prop: any) {
    unref(ruleFormRef)?.scrollToField(prop)
  },
  clearValidate(prop: any) {
    unref(ruleFormRef)?.clearValidate(prop)
  },
  fields() {
    return unref(ruleFormRef)?.fields as FormItemContext[]
  },
})
</script>
<script lang="ts">
export default {
  name: 'TzForm',
}
</script>
<style lang="css">
.tz-form {
  :deep(.el-select) {
    width: 100% !important;
  }
  :deep(.el-cascader) {
    width: 100% !important;
  }
}
</style>
