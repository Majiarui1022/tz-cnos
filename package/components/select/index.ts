import { App } from 'vue'
import TzSelect from './index.vue'
TzSelect.install = (app: App) => {
  app.component(TzSelect.name as string, TzSelect)
  return app
}
export default TzSelect
