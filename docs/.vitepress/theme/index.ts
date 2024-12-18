import DefaultTheme from 'vitepress/theme'
// import HelloWorld from '../../../src/components/HelloWorld.vue'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer,
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import TzDemo from '../../../dist/my-lib'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(ElementPlus, {
      locale: zhCn,
    })
    app.use(TzDemo)
  },
}
