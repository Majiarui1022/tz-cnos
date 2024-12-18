import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin'

// import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tz comopoents',
  titleTemplate: 'Custom Suffix',
  cleanUrls: true,
  description: 'A common component library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Component', link: '/guide/autocomplete' },
      // { text: 'Form', link: '/guide/form' },
    ],

    sidebar: [
      // {
      //   text: 'Examples2',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //   ],
      // },
      {
        text: '表单',
        items: [
          { text: 'Autocomplete', link: '/guide/autocomplete' },
          { text: 'Cascader', link: '/guide/cascader' },
          { text: 'Select', link: '/guide/select' },
          { text: 'Form', link: '/guide/form' },
          { text: 'Pagination', link: '/guide/pagination' },
        ],
      },
      {
        text: '数据展示',
        items: [{ text: 'Table', link: '/guide/table' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    //开启本地搜索
    search: {
      provider: 'local',
    },
    //修改侧边栏导航的标题
    outline: {
      label: '页面导航',
    },
    // 修改文档页脚的文字
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  vite: {
    server: {
      host: '0.0.0.0',
    },
  },
})
