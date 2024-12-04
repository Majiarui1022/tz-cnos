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
    <template #header="{ column, $index }" v-if="headerRender">
      <component :is="headerRender(column, $index)"></component>
    </template>
    <template #filter-icon v-if="filterIcon">
      <component :is="filterIcon()"></component>
    </template>
    <template #default="{ row, column, $index }" v-if="type == 'default'">
      <el-form-item
        :prop="'list.' + $index + '.' + column.property"
        :key="$index"
        :rules="rules"
      >
        <!-- render -->
        <template v-if="render">
          <component
            :is="render(form.list[$index], column, $index)"
          ></component>
        </template>
        <!-- 外部插槽 -->
        <template v-else-if="slot">
          <slot
            :name="slot"
            :column="column"
            :row="form.list[$index]"
            :index="$index"
          ></slot>
        </template>
        <!-- 默认输入框编辑 -->
        <el-input
          v-else-if="edit"
          v-model="form.list[$index][column.property]"
        ></el-input>
        <span v-else>{{ form.list[$index][column.property] }}</span>
      </el-form-item>
    </template>
    <template v-if="type == 'expand'" #default="{ row, column, $index }">
      <slot :name="slot" :column="column" :row="row" :index="$index"></slot>
    </template>
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
