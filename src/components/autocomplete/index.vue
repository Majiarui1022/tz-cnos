<template>
  <TzAutocomplete
    v-model="value"
    :fetch-suggestions="querySearchAsync"
    @select="handleSelect"
  />
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const value = ref('')
const props = defineProps({
  prop: String,
  model: Object,
})
console.log(props)
interface LinkItem {
  value: string
  link: string
}
let timeout: ReturnType<typeof setTimeout>
const links = ref<LinkItem[]>([])
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 5000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const handleSelect = (item: Record<string, any>) => {
  console.log(item)
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}
onMounted(() => {
  links.value = loadAll()
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
