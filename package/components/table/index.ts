import { App } from 'vue'
import TzTable from './table.vue'
TzTable.install = (app: App) => {
  app.component(TzTable.name as string, TzTable)
  return app
}
export default TzTable
