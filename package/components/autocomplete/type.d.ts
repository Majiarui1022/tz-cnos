export interface AutoComplete {
  modelValue: string
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  valueKey?: string
  debounce?: number
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
  fetchSuggestions?:
    | any[]
    | ((queryString: string, callback: () => any) => void)
  triggerOnFocus?: boolean
  selectWhenUnmatched?: boolean
  name?: string
  ariaLabel?: string
  hideLoading?: boolean
  popperClass?: string
  teleported?: boolean
  highlightFirstItem?: boolean
  fitInputWidth?: boolean
  popperAppendToBody?: boolean
}
