import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import TzDemo from '../dist/my-lib'
console.log(TzDemo, 'TzDemo')

// @ts-ignore
// import * as test from 'tz-demo-202411'
// console.log(test, 'test')

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(TzDemo)
  .mount('#app')
