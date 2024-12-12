import type { CascaderProps } from 'element-plus'
export interface CascaderType {
  modelValue: string[] | number[] | any
  options?: Record<string, unknown>[]
  props?: CascaderProps
  size?: 'large' | 'default' | 'small'
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  showAllLevels?: boolean
  collapseTags?: boolean
  collapseTagsTooltip?: boolean
  separator?: string
  filterable?: boolean
  filterMethod?: (node: Node, keyword: string) => boolean
  debounce?: number
  beforeFilter?: (value: string) => boolean
  popperClass?: string
  teleported?: boolean
  tagType?: 'success' | 'info' | 'warning' | 'danger'
  tagEffect?: 'light' | 'dark' | 'plain'
  validateEvent?: boolean
  maxCollapseTags?: number
  emptyValues?: any[]
  valueOnClear?: string | number | boolean | (() => any)
  persistent?: boolean
  fallbackPlacements?: any[]
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
  popperAppendToBody?: boolean
}
