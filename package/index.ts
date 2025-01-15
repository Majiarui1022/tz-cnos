import { App } from 'vue'
import components, {
  TzButton,
  TzForm,
  TzPagination,
  TzSelect,
  TzTable,
  TzAutocomplete,
  TzCascader,
} from './tz-components/components'

const install = (app: App) => {
  for (const item of components) {
    app.component(item.name as string, item)
  }
  return app
}

// 组件库可以视为一个单独的项目, 用monorepo架构管理就好了
// 开发环境可以用 pnpm link 本地项目
export type { FormType } from './components/form/type'
export default { install }

// 按需引入
export {
  TzButton,
  TzForm,
  TzPagination,
  TzSelect,
  TzTable,
  TzAutocomplete,
  TzCascader,
}
