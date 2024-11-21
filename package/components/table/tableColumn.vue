<template>
  <el-table-column
    :type="type"
    :index="index"
    :label="label"
    :column-key="columnKey"
    :prop="prop"
    :width="width"
    :min-width="minWidth"
    :fixed="fixed"
    :render-header="renderHeader"
    :sortable="sortable"
    :sort-method="sortMethod"
    :sort-by="sortBy"
    :sort-orders="sortOrders"
    :resizable="resizable"
    :formatter="formatter"
    :show-overflow-tooltip="showOverflowTooltip"
    :align="align"
    :headerAlign="headerAlign"
    :class-name="className"
    :label-class-name="labelClassName"
    :selectable="selectable"
    :reserve-selection="reserveSelection"
    :filters="filters"
    :filter-placement="filterPlacement"
    :filter-class-name="filterClassName"
    :filter-multiple="filterMultiple"
    :filter-method="filterMethod"
    :filtered-value="filteredValue"
  >
  </el-table-column>
</template>
<script lang="ts" setup>
import { TzTableColumnsProps } from './tableType'
const props = withDefaults(defineProps<TzTableColumnsProps>(), {
  type: 'default',
  width: '',
  minWidth: '',
  fixed: false,
  sortable: false,
  sortOrders: () => ['ascending', 'descending', null],
  resizable: true,
  align: 'left',
  headerAlign: 'left',
  reserveSelection: false,
  filterMultiple: true,
})
</script>
