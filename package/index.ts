import { App } from 'vue'
import components from './tz-components/components'
export * from './tz-components/default'
const install = (app: App) => {
  for (const item of components) {
    console.log(item)
    app.component(item.name as string, item.component)
  }
  return app
}
export default { install }
