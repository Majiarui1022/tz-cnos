<template>
  <el-pagination
    :size="size"
    :background="background"
    :pageSize="pageSize"
    :defaultPageSize="defaultPageSize"
    :total="total"
    :pageCount="pageCount"
    :pagerCount="pagerCount"
    :currentPage="currentPage"
    :defaultCurrentPage="defaultCurrentPage"
    :layout="layout"
    :pageSizes="pageSizes"
    :appendSizeTo="appendSizeTo"
    :popperClass="popperClass"
    :prevText="prevText"
    :prevIcon="prevIcon"
    :nextText="nextText"
    :nextIcon="nextIcon"
    :disabled="disabled"
    :teleported="teleported"
    :hideOnSinglePage="hideOnSinglePage"
    :small="small"
    @size-change="sizeChange"
    @current-change="currentChange"
    @change="change"
    @prev-click="prevClick"
    @next-click="nextClick"
  />
</template>
<script lang="ts" setup name="tz-pagination">
import { PaginationType } from './type'
withDefaults(defineProps<PaginationType>(), {
  size: 'default',
  background: false,
  pagerCount: 7,
  layout: 'prev, pager, next, jumper, ->, total',
  pageSizes: () => [10, 20, 30, 40, 50, 100],
  prevIcon: 'ArrowLeft',
  disabled: false,
  teleported: true,
  hideOnSinglePage: false,
  small: false,
})
const emits = defineEmits([
  'sizeChange',
  'currentPageChange',
  'change',
  'prevClick',
  'nextClick',
])
function sizeChange(value: number) {
  emits('sizeChange', value)
}
function currentChange(value: number) {
  emits('currentPageChange', value)
}
function change(currentPage: number, pageSize: number) {
  emits('change', currentPage, pageSize)
}
function prevClick(value: number) {
  emits('prevClick', value)
}
function nextClick(value: number) {
  emits('nextClick', value)
}
</script>

<script lang="ts">
export default {
  name: 'TzPagination',
}
</script>
