# Welcome Come This Is My world

This page is my world
This is Test

## 基础用法

<preview path="../../src/components/form/index.vue" title="基础用法" description="form 组件的基础用法"></preview>

## Form API

### Form Attributes

[支持 element-plus 所有属性以及以下额外属性](https://element-plus.org/zh-CN/component/form.html#form-api)

| Name       | Description       | Type           | Default |
| ---------- | ----------------- | -------------- | ------- |
| formOtions | form 行内所有元素 | FormItemType[] | —       |
| calss      | 表单 class 名称   | string         | —       |

## FormItemType API

### FormItemType Attributes

| Name          | Description                              | Type                                      | Default |
| ------------- | ---------------------------------------- | ----------------------------------------- | ------- |
| prop          | model 的键名                             | string                                    | —       |
| label         | 标签文本                                 | string                                    | —       |
| tag           | input / select / autocomplete / cascader | string                                    | input   |
| attrs         | tag 表示组件的所有属性                   | any                                       | -       |
| defaultRender | 表单元素                                 | (form: any, props: FormItemType) => VNode | -       |
