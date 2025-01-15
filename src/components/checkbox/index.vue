<template>
  <Checkbox v-model="value" label="张三" :disabled="true" />
  <Checkbox v-model="value2" :options="options" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Checkbox from '../../../package/components/checkbox/index'
const value = ref(false)
const value2 = ref([])
const options = ref([
  {
    label: 'Option A',
    value: 'Value A',
    border: true,
  },
  {
    label: 'Option B',
    value: 'Value B',
  },
])
</script>
