import { App } from 'vue'
import TzAutocomplete from './index.vue'
TzAutocomplete.install = (app: App) => {
  app.component(TzAutocomplete.name as string, TzAutocomplete)
  return app
}
export * from './type.d'
export default TzAutocomplete
