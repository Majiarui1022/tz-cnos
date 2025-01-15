import { App } from 'vue'
import Tzinput from './input'
Tzinput.install = (app: App) => {
  app.component(Tzinput.name as string, Tzinput)
  return app
}
export * from './type'
export default Tzinput
