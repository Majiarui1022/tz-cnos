import { App } from 'vue'
import TzCheckbox from './checkbox'
TzCheckbox.install = (app: App) => {
  app.component(TzCheckbox.name as string, TzCheckbox)
  return app
}
export * from './type'
export default TzCheckbox
