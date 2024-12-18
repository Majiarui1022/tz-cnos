<template>
  <TzSelect
    ref="selectTz"
    v-model="selectValue"
    :options="options"
    @beforeQuery="beforeQuery"
    @affterData="affterData"
    @change="change"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selectValue = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
]
// 查询之前回调
function beforeQuery(params) {
  // 处理api执行参数
  return params
}
// 查询之后处理返回值
function affterData(data) {
  // 处理完成后返回
  return [
    ...data,
    {
      value: 'Option3',
      label: 'Option3',
    },
  ]
}
function change(val, label) {
  console.log(val, label)
}
</script>
