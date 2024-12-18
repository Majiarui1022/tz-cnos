import { App } from 'vue'
import components from './tz-components/components'
// 跑一边 好
const install = (app: App) => {
  for (const item of components) {
    // console.log(item)
    // 刚刚注册组件的第二个参数不对 , 其实就指示这里的问题 是的 哎大意了
    // 你这个打包配置不行, 太不方便了, 这样调试麻烦 我不会 才学..
    app.component(item.name as string, item)
  }
  return app
}
// const obj = {
//   TzButton: components[0],
//   TzForm: components[1],
// }

// 组件库可以视为一个单独的项目, 用monorepo架构管理就好了
// 开发环境可以用 pnpm link 本地项目 好的!谢谢大佬!!
export * from './tz-components/default'
export default { install }
// export default { install, ... components}
