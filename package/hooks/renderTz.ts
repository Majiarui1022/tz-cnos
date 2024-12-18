import { h } from 'vue'
function renderTz(tag: string, modelData: any, attrs: any) {
  // 渲染组件
  return h(tag, {
    // 绑定对象
    modelValue: modelData,
    // 方法名
    ...attrs,
  })
}
export default renderTz