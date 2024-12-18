<template>
  <TzTable
    ref="table"
    highlight-current-row
    :data="tableData"
    :column="column"
    :showPage="false"
    @select="select"
    @select-all="selectAll"
    border
  >
    <template #aaaa="props">
      <div m="4">
        <p m="t-0 b-2">State: {{ props.row.address }}</p>
        <p m="t-0 b-2">City: {{ props.row.address }}</p>
        <p m="t-0 b-2">Address: {{ props.row.address }}</p>
        <p m="t-0 b-2">Zip: {{ props.row.address }}</p>
        <h3>Family</h3>
        <el-table :data="[]">
          <el-table-column label="Name" prop="name" />
          <el-table-column label="State" prop="state" />
          <el-table-column label="City" prop="city" />
          <el-table-column label="Address" prop="address" />
          <el-table-column label="Zip" prop="zip" />
        </el-table>
      </div>
    </template>
    <template #action="scoped">
      <el-button link type="primary" @click="add(scoped)">增行</el-button>
      <el-button link type="danger" @click="remove(scoped)">删除</el-button>
    </template>
  </TzTable>
  <el-button @click="submitForm">校验</el-button>
</template>

<script setup lang="ts">
import TzTable from '../../../package/components/table/table.vue'
// import type { TzTableColumnsProps } from '../../../package/components/table/type'
import { ref, h } from 'vue'
const table = ref()
const tableData = ref([
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
])
const column = ref([
  {
    type: 'selection',
    // selectable: (row: any) => {
    //   console.log(row)
    // },
    width: '55',
  },
  {
    type: 'index',
    label: '序号',
    // selectable: (row: any) => {
    //   console.log(row)
    // },
    width: '80',
  },
  {
    type: 'expand',
    slot: 'aaaa',
    label: '展开列',
    width: '80',
  },
  {
    label: 'Date',
    prop: 'date',
    width: '180',
    headerRender: (column, index) => {
      return h('span', '自定义表头')
    },
    edit: true,
    rules: { required: true, message: '请输入姓名', trigger: 'blur' },
  },
  {
    label: 'Name',
    prop: 'name',
    width: '180',
    edit: true,
    rules: { required: true, message: '请输入姓名', trigger: 'blur' },
  },
  {
    label: 'Address',
    prop: 'address',
    width: '180',
    // rules: { required: true, message: '请输入位置', trigger: 'blur' },
    // render: (row) => {
    //   return h(ElInput, {
    //     placeholder: '位置',
    //     modelValue: row.address,
    //     clearable: true,
    //     maxlength: 10,
    //     onInput: (value) => {
    //       return (row.address = value)
    //     },
    //   })
    // },
  },
  {
    slot: 'action',
    label: '操作',
    width: '140',
  },
])
function select<T = any>(selection: T[], row: T) {
  console.log(selection, row)
}
function selectAll(selection: any[]) {
  console.log(selection)
}
function add(scoped) {
  tableData.value.push({
    date: '2019-05-03',
    name: '张三',
    address: '中国',
  })
}
function remove(scoped) {
  console.log(scoped)
  tableData.value.splice(scoped.index, 1)
}
function submitForm() {
  table.value
    .validateTable()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
