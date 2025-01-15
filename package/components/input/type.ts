import type { Component, CSSProperties } from 'vue'
export interface InputType {
  type?: string
  modelValue?: string | number
  maxlength?: string | number
  minlength?: string | number
  showWordLimit?: boolean
  placeholder?: string
  clearable?: boolean
  formatter?: (value?: string | number) => string
  parser?: (value?: string) => string
  showPassword?: boolean
  disabled?: boolean
  size?: 'large' | 'default' | 'small'
  prefixIcon?: string | Component
  suffixIcon?: string | Component
  rows?: number
  autosize?: boolean | { minRows: number; maxRows: number }
  autocomplete?: string
  name?: string
  readonly?: ConstrainBoolean
  max?: any
  min?: any
  step?: any
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  autofocus?: boolean
  form?: string
  ariaLabel?: string
  tabindex?: string | number
  validateEvent?: string | boolean
  inputStyle?: string | CSSProperties | CSSProperties[] | string[]
  label?: string
}
