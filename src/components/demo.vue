<template>
  <el-form
    ref="formRef"
    style="max-width: 600px"
    :model="dynamicValidateForm"
    label-width="auto"
    class="demo-dynamic"
  >
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'domains.' + index + '.name'"
      :prop="'domains.' + index + '.name'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }"
    >
      <el-input v-model="domain.name" />
      <el-button class="mt-2" @click.prevent="removeDomain(domain)">
        Delete
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
      <el-button @click="addDomain">New domain</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
}>({
  domains: [
    {
      key: 1,
      name: '',
    },
  ],
})

interface DomainItem {
  key: number
  name: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    name: '',
  })
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
