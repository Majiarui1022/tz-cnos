<template>
  <Checkbox v-model="value" label="张三" />
  <Checkbox v-model="value2" label="禁用" disabled />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Checkbox from '../../../package/components/checkbox/index'
const value = ref(false)
const value2 = ref(false)
</script>
