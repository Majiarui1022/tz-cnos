import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import adrf from 'tz-demo-202411'

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(adrf)
  .mount('#app')
