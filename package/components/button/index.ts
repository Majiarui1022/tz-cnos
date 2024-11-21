import { App } from 'vue'
import TzButton from './index.vue'
TzButton.install = (app: App) => {
  app.component(TzButton.name as string, TzButton)
  return app
}
export default TzButton
