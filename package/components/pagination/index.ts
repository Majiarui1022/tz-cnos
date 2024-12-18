import { App } from 'vue'
import TzPagination from './index.vue'
TzPagination.install = (app: App) => {
  app.component(TzPagination.name as string, TzPagination)
  return app
}
export * from './type'
export default TzPagination
