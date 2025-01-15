<template>
  <div class="default_text">传入options或者api时渲染checkbox-group</div>
  <Checkbox v-model="value2" :options="options" />
  {{ value2 }}
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Checkbox from '../../../package/components/checkbox/index'
const value2 = ref(['Value A'])
const options = ref([
  {
    label: 'Option A',
    value: 'Value A',
    border: true,
  },
  {
    label: 'Option B',
    value: 'Value B',
    disabled: true,
  },
  {
    label: 'Option C',
    value: 'Value C',
  },
])
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
