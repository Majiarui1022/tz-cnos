import { App } from 'vue'
import TzButton from './components/button'
const components = [TzButton]
const install = (app: App) => {
  for (const item of components) {
    app.component(item.name as string, item)
  }
  return app
}
export default { install }
