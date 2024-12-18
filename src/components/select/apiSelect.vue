<template>
  <TzSelect ref="selectTz" v-model="selectValue" :api="api" @change="change" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selectValue = ref('Option3')
const api = () => {
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
}
function change(val, label) {
  console.log(val, label)
}
</script>
