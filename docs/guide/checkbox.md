# TzCheckbox

## 基础用法

<preview path="../../src/components/checkbox/checkBox.vue" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 多选框组

<preview path="../../src/components/checkbox/checkBoxGroup.vue" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## Api 多选框组

<preview path="../../src/components/checkbox/apiCheckBox.vue" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## TzCheckbox API

### TzCheckbox Attributes

[支持 element-plus 所有属性以及以下额外属性](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-api)

| Name       | Description      | Type                           | Default |
| ---------- | ---------------- | ------------------------------ | ------- |
| options    | Checkgroup 内容  | TzCheckboxProps[]              | —       |
| labelFiled | label 实际字段名 | string                         | label   |
| valueFiled | value 实际字段名 | string                         | value   |
| api        | options 请求借口 | (params: any) => Promise\<any> | -       |
| params     | options 请求参数 | any                            | -       |

## TzCheckboxProps 类型

```typeScript
type CheckboxSize = 'large' | 'default' | 'small'

interface TzCheckboxProps {
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
```
