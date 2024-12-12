<script setup lang="ts">
import TzTable from '../package/components/table/table.vue'
import { TzTableColumnsProps } from '../package/components/table/type'
import TzSelect from '../package/components/select/index.vue'
import { ElInput } from 'element-plus'
import { ref, h } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TestAutoComplete from './components/testAutoComplete.vue'
import CascaderDemo from './components/cascaderDemo.vue'
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
const column = ref<TzTableColumnsProps[]>([
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
    width: '55',
  },
  // {
  //   type: 'expand',
  //   slot: 'aaaa',
  //   label: '序号',
  //   width: '55',
  // },
  {
    label: 'Date',
    prop: 'date',
    width: '180',
    headerRender: (column, index) => {
      console.log(column)
      return h('span', index)
    },
    edit: true,
    rules: { required: true, message: '请输入姓名', trigger: 'blur' },
  },
  {
    label: 'Name',
    prop: 'name',
    width: '180',
    slot: 'name',
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
const api = (val) => {
  console.log(val)
  return new Promise((res, rej) => {
    res({
      totalField: 20,
      currentPage: 1,
      data: [
        {
          date: val.currentPage == 1 ? '2016-05-03' : '2017',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: val.currentPage == 1 ? '2016-05-02' : '2018',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: val.currentPage == 1 ? '2016-05-04' : '2019',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: val.currentPage == 1 ? '2016-05-01' : '2020',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    })
  })
}
const table = ref()
function jy() {
  table.value
    .validateTable()
    .then((res) => {
      console.log(res)
    })
    .catch((er) => {
      console.log(er)
    })
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
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5l',
  },
]

function change(val, label) {
  console.log(val, label)
}
const selectTz = ref()
function selectedLabel() {
  selectTz.value.selectedLabel()
}
</script>

<template>
  <!-- <TzTable
    ref="table"
    highlight-current-row
    :data="tableData"
    :column="column"
    :showPage="false"
    @select="select"
    @select-all="selectAll"
    border
  >
    <template #name="{ row, column }">
      <el-input v-model="row[column.property]"></el-input>
    </template>
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
  <el-button @click="selectezdLabel">校验</el-button>
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
  </TzSelect> -->
  <HelloWorld />
  <!-- <TestAutoComplete /> -->
  <CascaderDemo />
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
