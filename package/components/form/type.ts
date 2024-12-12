import type { ComponentSize, FormRules } from 'element-plus'
import type { RuleItem } from './interface'
import { VNode, render } from 'vue'
// import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
type labelPositionType = 'left' | 'right' | 'top'
type requireAsteriskPositionType = 'left' | 'right'
export type Arrayable<T> = T | T[]

interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}
export interface FormType {
  model?: Record<string, any>
  rules?: FormRules
  inline?: boolean
  labelPosition?: labelPositionType
  labelWidth?: string | number
  labelSuffix?: string
  hideRequiredAsterisk?: boolean
  requireAsteriskPosition?: requireAsteriskPositionType
  showMessage?: boolean
  inlineMessage?: boolean
  statusIcon?: boolean
  validateOnRuleChange?: boolean
  size?: ComponentSize
  disabled?: boolean
  scrollToError?: boolean
  scrollIntoViewOptions?: boolean | Record<string, any>

  formOtions?: FormItemType[]
  calss?: string
}

export interface FormItemType {
  prop: string
  label?: string
  labelPosition?: labelPositionType | ''
  labelWidth?: string | number
  required?: boolean
  rules?: Arrayable<FormItemRule>
  error?: string
  showMessage?: boolean
  inlineMessage?: string | boolean
  size?: ComponentSize
  fors?: string
  validateStatus?: '' | 'error' | 'validating' | 'success'
  render?: (form: any, props: FormItemType) => VNode

  // form对象
  model?: any
  // 组件名称
  tag?: 'input' | 'select' | 'autocomplete' | 'cascader'
  // 组件其他参数
  attrs?: any
  // 内容
  defaultRender?: (model: any, prop: string) => VNode
}
