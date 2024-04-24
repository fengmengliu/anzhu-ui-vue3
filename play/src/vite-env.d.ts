/// <reference types="vite/client" />

// 添加此配置，则引入*.vue文件则不会报错
declare module '*.vue' {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>
  export default component
}
