import { App } from 'vue'
import TzForm from './index.vue'
TzForm.install = (app: App) => {
  app.component(TzForm.name as string, TzForm)
  return app
}
export default TzForm
