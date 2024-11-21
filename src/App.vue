<script setup lang="ts">
import TzButton from '../package/components/button/index.vue'
import TzTable from '../package/components/table/table.vue'
import { ref } from 'vue'

const value1 = ref(true)

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const column = ref([
  // {
  //   type: 'selection',
  //   // selectable: (row: any) => {
  //   //   console.log(row)
  //   // },
  //   width: '55',
  // },
  {
    label: 'Date',
    prop: 'date',
    width: '180',
  },
  {
    label: 'Name',
    prop: 'name',
    width: '180',
  },
  {
    label: 'Address',
    prop: 'address',
    width: '180',
  },
])
</script>

<template>
  <TzButton type="primary" size="large">按钮1</TzButton>
  <TzButton type="warring" size="middle">按钮2</TzButton>
  <el-switch v-model="value1" />
  <TzTable highlight-current-row :data="tableData" :column="column" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
