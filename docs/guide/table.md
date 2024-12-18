# Table

## 基础用法

<preview path="../../src/components/table/index.vue"></preview>

## Table

### Table Props

[支持 element-plus 所有属性以及以下额外属性](https://element-plus.org/zh-CN/component/select.html#select-api)

| Name        | Description          | Type                           | Default |
| ----------- | -------------------- | ------------------------------ | ------- |
| column      | 表格表头信息         | TzTableColumnsProps[]          | []      |
| showPage    | 是否展示分页         | boolean                        | true    |
| api         | 表格查询方法         | (params: any) => Promise\<any> | —       |
| beforeQuery | api 执行前回参数处理 | (params: any) => any           | —       |

## TzTableColumnsProps

### Table TzTableColumnsProps

| Name         | Description                            | Type                                                            | Default |
| ------------ | -------------------------------------- | --------------------------------------------------------------- | ------- |
| headerRender | 头部自定义                             | (column: TzTableColumnsProps, index: number) => VNode           |         |
| render       | 单元格展示方法                         | (row: any, column: TzTableColumnsProps, index: number) => VNode | true    |
| slot         | 外部单元格插槽(render 优先级高于 slot) | string                                                          | —       |
| edit         | 单元格是否可编辑                       | boolean                                                         | false   |
| rules        | 单元格校验规则                         | any                                                             | -       |
