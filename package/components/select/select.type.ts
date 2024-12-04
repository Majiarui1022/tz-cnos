import { Component } from '@vue/runtime-core'
type SelectSize = '' | 'large' | 'default' | 'small'
type SelectEffect = 'dark' | 'light'
export interface SelectType {
  value: string | number | boolean | object | any[]
  multiple?: boolean
  disabled?: boolean
  valueKey?: string
  size?: SelectSize
  clearable?: boolean
  collapseTags?: boolean
  collapseTagsTooltip?: boolean
  multipleLimit?: number
  name?: string
  effect?: SelectEffect
  autocomplete?: string
  placeholder?: string
  filterable?: boolean
  allowCreate?: boolean
  filterMethod?: () => void
  remoteMethod?: () => void
  remoteShowSuffix?: boolean
  loading?: boolean
  loadingText?: string
  noMatchText?: string
  noDataText?: string
  popperClass?: string
  reserveKeyword?: boolean
  defaultFirstOption?: boolean
  teleported?: boolean
  appendTo?: string
  persistent?: boolean
  automaticDropdown?: boolean
  clearIcon?: string | Component
  fitInputWidth?: boolean
  suffixIcon?: string | Component
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
  tagEffect?: '' | 'light' | 'dark' | 'plain'
  validateEvent?: boolean
  offset?: number
  showArrow?: boolean
  placement?:
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
  fallbackPlacements?: any[]
  maxCollapseTags?: number
  popperOptions?: object
  ariaLabel?: string
  emptyValues?: any[]
  valueOnClear?: string | number | boolean | (() => any)
  suffixTransition?: boolean

  options?: any[]
  // 查询方法
  api?: (params: any) => Promise<any>
  params?: any

  // 查询之前回调
  beforeQuery?: (params: any) => any
  // 查询之后处理返回值
  affterData?: (data: any) => any
  // 查询取集合值
  queryData?: string
  // label实际值
  filedLabel?: string
  // value实际值
  filedValue?: string
  // key实际值
  filedKey?: string
}
