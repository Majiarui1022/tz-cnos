import { VNode } from 'vue'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
}
// src/shims-vue.d.ts;

declare type VueNode = VNode
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: unknown
    }
  }
}
