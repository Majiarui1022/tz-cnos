# Select

## 基础用法

<preview path="../../src/components/select/select.vue"></preview>

## 使用 api 获取

<preview path="../../src/components/select/apiSelect.vue"></preview>

## Select API

### Select Attributes

[支持 element-plus 所有属性以及以下额外属性](https://element-plus.org/zh-CN/component/select.html#select-api)

| Name        | Description                                                                       | Type                            | Default |
| ----------- | --------------------------------------------------------------------------------- | ------------------------------- | ------- |
| options     | 下拉框值                                                                          | any[]                           | —       |
| api         | 查询方法 (api 与 options 同时存在时 api 优先级高)                                 | (params: any) => Promise\<any\> | —       |
| params      | 查询方法 api 查询参数                                                             | any                             | —       |
| beforeQuery | api 执行前回调方法                                                                | (params: any) => any            | —       |
| affterData  | 查询之后处理 api 返回值                                                           | affterData?: (data: any) => any | —       |
| queryData   | 查询取 api 返回值 (接口返回字段，例如'data'那么实际值为 res.data) 或['data.list'] | string \| string[]              | data    |
| filedLabel  | label 实际值                                                                      | string                          | label   |
| filedValue  | value 实际值                                                                      | string                          | value   |
| filedKey    | key 实际值                                                                        | string                          | value   |
