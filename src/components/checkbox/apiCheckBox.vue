<template>
  <div class="default_text">传入options或者api时渲染checkbox-group</div>
  <Checkbox v-model="value2" :api="api" />
  {{ value2 }}
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Checkbox from '../../../package/components/checkbox/index'
const value2 = ref([])
const api = () => {
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      message: '请求成功',
      data: [
        {
          label: 'Option D',
          value: 'Value D',
          border: true,
        },
        {
          label: 'Option E',
          value: 'Value E',
        },
        {
          label: 'Option F',
          value: 'Value F',
          disabled: true,
        },
      ],
    })
  })
}
</script>
<style lang="scss" scoped>
.default_text {
  background-color: rgb(243.9, 244.2, 244.8);
  color: #909399;
  border: 1px solid rgb(232.8, 233.4, 234.6);
  padding: 0 9px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
