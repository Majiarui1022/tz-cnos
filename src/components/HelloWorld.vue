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
  <el-button @click="resetForm(ruleFormRef)">重置</el-button>
  <el-button @click="submitForm(ruleFormRef)">确定</el-button>
</template>
<script setup lang="ts">
// 这里使用了组件 不展示  不知道是不是没注册好
import { reactive, ref, h } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
// import TzForm from '../../package/components/form/index'
// import TzForm from 'tz-demo-202411' // 这个吗 这应该是在main.ts中全局注册的组件
import type { FormItemType } from 'tz-demo-202411'
// import TzAutocomplete from '../../package/index'
import TestAutoComplete from './testAutoComplete.vue'

// import type { FormItemType } from '../../package/index'
interface RuleForm {
  name: string
  region: string
  learn: string
  ses: string[]
}
const ruleFormRef = ref()
const formSize = ref<ComponentSize>('default')
let id = 0
const formOtions = ref<FormItemType[]>([
  {
    label: '名称',
    prop: 'name',
    required: true,
  },
  {
    label: '年龄',
    prop: 'region',
    required: true,
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
  {
    label: '学习',
    prop: 'learn',
    required: true,
    defaultRender: (model, prop) => {
      return h(TestAutoComplete, {
        model,
        prop,
      })
    },
  },
  {
    label: '选择',
    prop: 'selpro',
    tag: 'cascader',
    attrs: {
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map((item) => ({
              value: ++id,
              label: `Option - ${id}`,
              leaf: level >= 2,
            }))
            // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
            console.log(nodes)
            resolve(nodes)
          }, 1000)
        },
      },
    },
  },
])
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  ses: [],
  learn: '',
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
      trigger: 'blur',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  console.log(ruleForm, 'form表单')
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }))
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
