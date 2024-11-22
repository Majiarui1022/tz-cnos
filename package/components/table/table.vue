<template>
  <el-form :model="form" ref="formRef">
    <el-table
      ref="tzTableModelRef"
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
      <template v-for="(item, index) in column">
        <tableColumn v-bind="item" :index="index">
          <template #[val]="scope" v-for="val in getTableColumnSlots">
            <slot
              :name="val"
              :item="item"
              :column="scope.column"
              :row="scope.row"
              :index="scope.index"
            />
          </template>
        </tableColumn>
      </template>
      <template #append>
        <slot name="append"></slot>
      </template>
      <template #empty>
        <slot name="empty"></slot>
      </template>
    </el-table>
  </el-form>
  <el-button @click="validateForm">测试</el-button>
</template>

<script lang="ts" setup>
import { TzTableProps } from './tableType'
import tableColumn from './tableColumn.vue'
import { ref, computed, getCurrentInstance, reactive } from 'vue'
// defineProps<TzTableProps<any>>()
const tzTableModelRef = ref()
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

const form = reactive({
  list: JSON.parse(JSON.stringify(props.data)),
})

// 表格列中的插槽
const getTableColumnSlots = computed(() => {
  const that = getCurrentInstance()
  const slotsList: string[] = []
  Object.keys(that!.slots).forEach((item) => {
    slotsList.push(item)
  })
  return [
    ...props.column.filter((item) => item.slot).map((item) => item.slot),
    'expandSlot', // 兼容列 type 为 'expand' 的列
    ...slotsList,
  ]
})

const formRef = ref()
function validateForm() {
  formRef.value.validate((valid) => {
    console.log(form)
    if (valid) {
      console.log('表单验证成功')
    } else {
      console.log('表单验证失败')
      return false
    }
  })

  // let result = true
  // for (let item of formRef.value.fields) {
  //   formRef.value.validateField('date', (err) => {
  //     if (err) {
  //       result = false
  //     }
  //   })
  //   if (!result) break
  // }
  // if (!result) {
  // } else {
  // }
  // let valid = true
  // props.data.forEach((item, index) => {
  //   formRef.value.validate('date', (error) => {
  //     if (error) {
  //       valid = false
  //     }
  //   })
  // })
  // if (!valid) {
  //   console.log('表单验证失败')
  // } else {
  //   console.log('表单验证成功')
  // }
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
// 用于多选表格，清空用户的选择
function clearSelection(): void {
  tzTableModelRef.value.clearSelection()
}
// 返回当前选中的行
function getSelectionRows() {
  return tzTableModelRef.value.getSelectionRows()
}
// 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否
function toggleRowSelection(
  row: any,
  selected?: boolean,
  ignoreSelectable = true
) {
  tzTableModelRef.value.toggleRowSelection(row, selected, ignoreSelectable)
}
// 	用于多选表格，切换全选和全不选
function toggleAllSelection() {
  tzTableModelRef.value.toggleAllSelection()
}
// 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。
function toggleRowExpansion(row: any, expanded?: boolean) {
  tzTableModelRef.value.toggleRowExpansion(row, expanded)
}
// 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。
function setCurrentRow(row: any) {
  tzTableModelRef.value.toggleRowExpansion(row)
}
// 	用于清空排序条件，数据会恢复成未排序的状态
function clearSort() {
  tzTableModelRef.value.clearSort()
}
// 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器
function clearFilter(columnKeys?: string[]) {
  tzTableModelRef.value.clearFilter(columnKeys)
}
// 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局
function doLayout() {
  tzTableModelRef.value.doLayout()
}
// 手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。
function sort(prop: string, order: string) {
  tzTableModelRef.value.sort(prop, order)
}
// 滚动到一组特定坐标 ScrollToOptions
function scrollTo(options: number | any, yCoord?: number) {
  tzTableModelRef.value.scrollTo(options, yCoord)
}
// 	设置垂直滚动位置
function setScrollTop(top?: number) {
  tzTableModelRef.value.setScrollTop(top)
}
// 	设置水平滚动位置
function setScrollLeft(left?: number) {
  tzTableModelRef.value.setScrollLeft(left)
}
// 获取表列的 context
function columns() {
  return tzTableModelRef.value.columns
}
// 适用于 lazy Table, 需要设置 rowKey, 更新 key children
function updateKeyChildren<T>(key: string, data: T[]) {
  tzTableModelRef.value.updateKeyChildren(key, data)
}
defineExpose({
  clearSelection,
  getSelectionRows,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
  scrollTo,
  setScrollTop,
  setScrollLeft,
  columns,
  updateKeyChildren,
})
</script>
