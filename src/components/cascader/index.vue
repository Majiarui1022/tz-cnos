<template>
  <TzCascader v-model="value" :props="props" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { CascaderProps } from 'element-plus'
const value = ref(['guide', 'disciplines', 'consistency'])
let id = 0
const props: CascaderProps = {
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
}
</script>
