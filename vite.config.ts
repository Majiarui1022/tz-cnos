import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({ include: './package', tsconfigPath: './tsconfig.json' }),
  ],
  server: {
    port: 8010,
    host: '0.0.0.0',
  },
  build: {
    lib: {
      // entry: resolve(__dirname, 'package/index.ts'),
      entry: './package/index.ts',
      name: 'MyLib',
      fileName: 'my-lib',
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
