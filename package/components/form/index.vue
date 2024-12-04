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
    :class="calss"
  >
    <formItem v-for="val in formOtions" v-bind="val" :model="model"></formItem>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import formItem from './formItem.vue'
import type { FormType } from './form.type'
const props = withDefaults(defineProps<FormType>(), {})

const ruleFormRef = ref<FormInstance>()
setTimeout(() => {
  console.log(props.formOtions)
}, 1000)
</script>
