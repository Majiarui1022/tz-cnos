import { App } from 'vue'
import TzSelect from './index.vue'
export * from './type'
TzSelect.install = (app: App) => {
  app.component('TzSelect', TzSelect)
  return app
}
export default TzSelect
