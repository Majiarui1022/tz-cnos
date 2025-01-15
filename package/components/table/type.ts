import { VNode } from 'vue'
import { PaginationType } from '../pagination/type'
export interface TreeNode {
  expanded?: boolean
  loading?: boolean
  noLazyChildren?: boolean
  indent?: number
  level?: number
  display?: boolean
}

export interface Sort {
  prop: string
  order: 'ascending' | 'descending'
  init?: any
  silent?: any
}
export interface TzTableProps<T> extends PaginationType {
  // 表格数据
  data: T[]
  // 表格高度
  height?: string | number
  // 表格高的最大高度
  maxHeight?: string | number
  // 斑马纹 默认为false
  stripe?: boolean
  // 是否带有纵向边框
  border?: boolean
  // Table 的尺寸
  tableSize?: '' | 'large' | 'default' | 'small'
  // 列的宽度是否自撑开
  fit?: boolean
  // 是否显示表头
  showHeader?: boolean
  // 是否要高亮当前行
  highlightCurrentRow?: boolean
  // 当前行的 key，只写属性
  currentRowKey?: string | number
  // 行的 className
  rowClassName?: Function | string
  // 行的 style
  rowStyle?: Function | object
  // 单元格的 className
  cellClassName?: Function | string
  // 单元格的 style
  cellStyle?: Function | object
  // 表头行的 className
  headerRowClassName?: Function | string
  // 表头行的 style
  headerRowStyle?: Function | object
  // 表头单元格的 className
  headerCellClassName?: Function | string
  // 表头单元格的 style
  headerCellStyle?: Function | object
  // 行数据的 Key 在使用reserve-selection功能与显示树形数据时，该属性是必填的
  rowKey?: Function | string
  // 空数据时显示的文本内容
  emptyText?: string
  // 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效
  defaultExpandAll?: boolean
  // 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。
  expandRowKeys?: string[]
  // 默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序
  defaultSort?: Sort
  // 溢出 tooltip 的选项，
  // tooltipEffect?: Pick<ElTooltipProps, 'effect' | 'enterable' | 'hideAfter' | 'offset' | 'placement' | 'popperClass' | 'popperOptions' | 'showAfter' | 'showArrow'>
  tooltipEffect?: any
  // 挂载到哪个 DOM 元素
  appendFilterPanelTo?: string
  // 是否在表尾显示合计行
  showSummary?: boolean
  // 显示摘要行第一列的文本
  sumText?: string
  // 自定义的合计计算方法 (data: { columns: any[], data: any[] }) => (VNode | string)[]
  summaryMethod?: (data: { columns: any[]; data: any[] }) => (VNode | string)[]
  // 合并行或列的计算方法
  spanMethod?: (data: {
    row: any
    column: any
    rowIndex: number
    columnIndex: number
  }) => number[] | { rowspan: number; colspan: number } | void
  // 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行
  selectOnIndeterminate?: boolean
  // 展示树形数据时，树节点的缩进
  indent?: number
  // 	是否懒加载子节点数据
  lazy?: boolean
  // 	加载子节点数据的函数，lazy 为 true 时生效
  load?: (row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void
  // 渲染嵌套数据的配置选项
  treeProps?: {
    hasChildren?: string
    children?: string
    checkStrictly?: boolean
  }
  // 设置表格单元、行和列的布局方式
  tableLayout?: 'fixed' | 'auto'
  // 总是显示滚动条
  scrollbarAlwaysOn?: boolean
  // 是否隐藏额外内容并在单元格悬停时使用 Tooltip 显示它们。这将影响全部列的展示
  showOverflowTooltip?: boolean | object
  // 	确保主轴的最小尺寸，以便不超过内容
  flexible?: boolean
  scrollbarTabindex?: string | number
  style?: object

  column: TzTableColumnsProps[]
  // 展示分页
  showPage?: boolean
  // 查询方法
  api?: (params: any) => Promise<any>

  /**  方法回调 */

  // 查询之前参数处理
  beforeQuery?: (params: any) => any
}
export interface TzTableColumnsProps {
  // 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮
  type?: 'default' | 'selection' | 'index' | 'expand'
  // 如果设置了 type=index，可以通过传递 index 属性来自定义索引
  index?: number | ((index: number) => number)
  // 显示的标题
  label?: string
  // column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件
  columnKey?: string
  // 字段名称 对应列内容的字段名， 也可以使用 property属性
  prop?: string
  // 对应列的宽度
  width?: string | number
  // 对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列
  minWidth?: string | number
  // 列是否固定在左侧或者右侧。 true 表示固定在左侧
  fixed?: 'left' | 'right' | boolean
  // 列标题 Label 区域渲染使用的 Function
  renderHeader?: (data: { column: any; $index: number }) => void
  //	对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
  sortable?: string | boolean
  // 指定数据按照哪个属性进行排序，仅当sortable设置为true的时候有效。 应该如同 Array.sort 那样返回一个 Number
  sortMethod?: <T = any>(a: T, b: T) => number
  // 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推
  sortBy?: (row: any, index: number) => string | string | string[]
  // 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序
  sortOrders?: ('ascending' | 'descending' | null)[]
  // 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
  resizable?: boolean
  // 用来格式化内容
  formatter?: (
    row: any,
    column: any,
    cellValue: any,
    index: number
  ) => VNode | string
  // 当内容过长被隐藏时显示 tooltip
  showOverflowTooltip?: boolean | object
  // 对齐方式
  align?: 'left' | 'center' | 'right'
  // 对齐方式
  headerAlign?: 'left' | 'center' | 'right'
  // 	列的 className
  className?: string
  // 当前列标题的自定义类名
  labelClassName?: string
  //	仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
  selectable?: (row: any, index: number) => boolean
  // 数据刷新后是否保留选项，仅对  type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效
  reserveSelection?: boolean
  // 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。
  filters?: { text: string; value: string }[]
  // 过滤弹出框的定位
  filterPlacement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  //过滤弹出框的 className
  filterClassName?: string
  // 	数据过滤的选项是否多选
  filterMultiple?: boolean
  // 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。
  filterMethod?: (value: any, row: any, column: any) => void
  // 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。
  filteredValue?: string[]

  // 头部自定义
  headerRender?: (column: TzTableColumnsProps, index: number) => VNode
  filterIcon?: () => VNode
  render?: (row: any, column: TzTableColumnsProps, index: number) => VNode
  slot?: string
  edit?: boolean
  rules?: any
  form?: any
}
