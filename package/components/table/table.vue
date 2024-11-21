<template>
  <el-table
    :data="data"
    :height="height"
    :maxHeight="maxHeight"
    :stripe="stripe"
    :border="border"
    :size="size"
    :fit="fit"
    :showHeader="showHeader"
    :highlightCurrentRow="highlightCurrentRow"
    :currentRowKey="currentRowKey"
    :rowClassName="rowClassName"
    :rowStyle="rowStyle"
    :cellClassName="cellClassName"
    :cellStyle="cellStyle"
    :headerRowClassName="headerRowClassName"
    :headerRowStyle="headerRowStyle"
    :headerCellClassName="headerCellClassName"
    :headerCellStyle="headerCellStyle"
    :rowKey="rowKey"
    :emptyText="emptyText"
    :defaultExpandAll="defaultExpandAll"
    :expandRowKeys="expandRowKeys"
    :defaultSort="defaultSort"
    :tooltipEffect="tooltipEffect"
    :appendFilterPanelTo="appendFilterPanelTo"
    :showSummary="showSummary"
    :sumText="sumText"
    :summaryMethod="summaryMethod"
    :spanMethod="spanMethod"
    :selectOnIndeterminate="selectOnIndeterminate"
    :indent="indent"
    :lazy="lazy"
    :load="load"
    :treeProps="treeProps"
    :tableLayout="tableLayout"
    :scrollbarAlwaysOn="scrollbarAlwaysOn"
    :showOverflowTooltip="showOverflowTooltip"
    :flexible="flexible"
    :scrollbarTabindex="scrollbarTabindex"
    :style="style"
    @select="select"
    @select-all="selectAll"
    @selection-change="selectionChange"
    @cell-mouse-enter="cellMouseEnter"
    @cell-mouse-leave="cellMouseLeave"
    @cell-click="cellClick"
    @cell-contextmenu="cellContextmenu"
    @cell-dblclick="cellDblclick"
    @header-click="headerClick"
    @header-contextmenu="headerContextmenu"
    @sort-change="sortChange"
    @filter-change="filterChange"
    @current-change="currentChange"
    @header-dragend="headerDragend"
    @expand-change="expandChange"
  >
    <!-- <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" /> -->
    <template v-for="item in column">
      <tableColumn v-bind="item"></tableColumn>
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import { TzTableProps } from './tableType'
import tableColumn from './tableColumn.vue'
const props = withDefaults(defineProps<TzTableProps<any>>(), {
  data: () => [],
  stripe: false,
  border: false,
  fit: true,
  showHeader: true,
  highlightCurrentRow: true,
  emptyText: 'No Data',
  defaultExpandAll: false,
  tooltipEffect: {
    enterable: true,
    placement: 'top',
    showArrow: true,
    hideAfter: 200,
    popperOptions: { strategy: 'fixed' },
  },
  showSummary: false,
  sumText: 'Sum',
  selectOnIndeterminate: true,
  indent: 16,
  lazy: false,
  treeProps: () => {
    return {
      hasChildren: 'hasChildren',
      children: 'children',
      checkStrictly: false,
    }
  },
  tableLayout: 'fixed',
  scrollbarAlwaysOn: true,
  flexible: false,

  // 表格column
  column: () => [],
})
// 当用户手动勾选数据行的 Checkbox 时触发的事件
function select<T = any>(selection: T[], row: T): void {
  emits('select', selection, row)
}
// 当用户手动勾选全选 Checkbox 时触发的事件
function selectAll(selection: any[]): void {
  emits('selectAll', selection)
}
// 当选择项发生变化时会触发该事件
function selectionChange(newSelection: any[]): void {
  emits('selectionChange', newSelection)
}
// 当单元格 hover 进入时会触发该事件
function cellMouseEnter(
  row: any,
  column: any,
  cell: HTMLTableCellElement,
  event: Event
): void {
  emits('cellMouseEnter', row, column, cell, event)
}
// 当单元格 hover 退出时会触发该事件
function cellMouseLeave(
  row: any,
  column: any,
  cell: HTMLTableCellElement,
  event: Event
): void {
  emits('cellMouseLeave', row, column, cell, event)
}
// 当某个单元格被点击时会触发该事件
function cellClick(
  row: any,
  column: any,
  cell: HTMLTableCellElement,
  event: Event
): void {
  emits('cellClick', row, column, cell, event)
}
// 	当某一行被鼠标右键点击时会触发该事件
function cellContextmenu(
  row: any,
  column: any,
  cell: HTMLTableCellElement,
  event: Event
): void {
  emits('cellContextmenu', row, column, cell, event)
}
// 当某一行被双击时会触发该事件
function cellDblclick(
  row: any,
  column: any,
  cell: HTMLTableCellElement,
  event: Event
): void {
  emits('cellDblclick', row, column, cell, event)
}
// 当某一列的表头被点击时会触发该事件
function headerClick(column: any, event: Event): void {
  emits('headerClick', column, event)
}
// 当某一列的表头被鼠标右键点击时触发该事件
function headerContextmenu(column: any, event: Event): void {
  emits('headerContextmenu', column, event)
}
// 当表格的排序条件发生变化的时候会触发该事件
function sortChange(data: any): void {
  emits('sortChange', data)
}
// column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件
function filterChange(newFilters: any): void {
  emits('filterChange', newFilters)
}
// 表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性
function currentChange(currentRow: any, oldCurrentRow: any): void {
  emits('currentChange', currentRow, oldCurrentRow)
}
// 当拖动表头改变了列的宽度的时候会触发该事件
function headerDragend(
  newWidth: number,
  oldWidth: number,
  column: any,
  event: MouseEvent
): void {
  emits('headerDragend', newWidth, oldWidth, column, event)
}
// 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）
function expandChange(
  row: any,
  expandedRows: any[]
): void | ((row: any, expanded: boolean) => void) {
  emits('expandChange', row, expandedRows)
}

const emits = defineEmits([
  'select',
  'selectAll',
  'selectionChange',
  'cellMouseEnter',
  'cellMouseLeave',
  'cellClick',
  'cellDblclick',
  'cellContextmenu',
  'headerClick',
  'headerContextmenu',
  'sortChange',
  'filterChange',
  'currentChange',
  'headerDragend',
  'expandChange',
])
// defineProps<TzTableProps<any>>()
</script>
