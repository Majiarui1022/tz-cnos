import type { CheckboxSize } from './default'
export interface TzCheckboxProps {
  modelValue?: string | number | boolean
  value?: string | number | boolean | object
  label?: string | number | boolean | object
  trueValue?: string | number
  falseValue?: string | number
  disabled?: boolean
  border?: boolean
  size?: CheckboxSize
  name?: string
  checked?: boolean
  indeterminate?: boolean
  validateEvent?: boolean
  tabindex?: string | number
  id?: string
  ariaControls?: string
  trueLabel?: string | number
  falseLabel?: string | number
  controls?: string
}
export interface TzCheckboxGroup {
  modelValue: string | string[] | number[] | boolean | number
  label?: string
  size?: CheckboxSize
  disabled?: boolean
  min?: number
  max?: number
  ariaLabel?: string
  textColor?: string
  fill?: string
  tag?: string
  validateEvent?: boolean

  options?: TzCheckboxProps[]
  labelFiled?: string
  valueFiled?: string
  api?: (params: any) => Promise<any>
  params?: any
}
