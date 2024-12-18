import { App } from 'vue'
import TzCascader from './index.vue'
TzCascader.install = (app: App) => {
  app.component(TzCascader.name as string, TzCascader)
  return app
}
export * from './type'
export default TzCascader
