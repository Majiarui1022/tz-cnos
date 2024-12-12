import { App } from 'vue'
import TzPagination from './index.vue'
export * from './type'
TzPagination.install = (app: App) => {
  app.component('TzPagination', TzPagination)
  return app
}
export default TzPagination
