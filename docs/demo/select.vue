<template>
  <TzSelect
    ref="selectTz"
    :value="selectValue"
    :options="options"
    @change="change"
  >
    <template #header>
      <span>123</span>
    </template>
    <template #footer>
      <span>123</span>
    </template>
  </TzSelect>
</template>
<script setup lang="ts">
import { ref, h } from 'vue'
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
function change(val, label) {
  console.log(val, label)
}
</script>
