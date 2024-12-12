import { VNode } from 'vue'

type PageSize = 'large' | 'default' | 'small'
export interface PaginationType {
  size?: PageSize
  background?: boolean
  pageSize?: number
  defaultPageSize?: number
  total?: number
  pageCount?: number
  pagerCount?: number
  currentPage?: number
  defaultCurrentPage?: number
  layout?: string
  pageSizes?: number[]
  appendSizeTo?: string
  popperClass?: string
  prevText?: string
  prevIcon?: string | VNode
  nextText?: string
  nextIcon?: string | VNode
  disabled?: boolean
  teleported?: boolean
  hideOnSinglePage?: boolean
  small?: boolean
}
