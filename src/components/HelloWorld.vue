<template>
  <TzForm
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    :formOtions="formOtions"
    status-icon
  />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import TzForm from '../../package/components/form/index'
import type { FormItemType } from '../../package/components/form/form.type'
interface RuleForm {
  name: string
  region: string
  // count: string
  // date1: string
  // date2: string
  // delivery: boolean
  // location: string
  ses: string[]
  // resource: string
  // desc: string
}
const locationOptions = ['Home', 'Company', 'School']
const formSize = ref<ComponentSize>('default')
const formOtions = ref<FormItemType[]>([
  {
    label: '名称',
    prop: 'name',
    required: true,
  },
  {
    label: '年龄',
    prop: 'region',
  },
  {
    label: '选泽',
    prop: 'ses',
    tag: 'select',
    attrs: {
      api: () => {
        return new Promise((res, rej) => {
          res({
            data: [
              {
                value: 'Option3',
                label: 'Option4',
              },
              {
                value: 'Option2',
                label: 'Option2',
                disabled: true,
              },
            ],
          })
        })
      },
      // onChange: (val, label) => {
      //   console.log(val, label)
      // },
    },
  },
])
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  ses: [],
  // count: '',
  // date1: '',
  // date2: '',
  // delivery: false,
  // location: '',
  // resource: '',
  // desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  location: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
