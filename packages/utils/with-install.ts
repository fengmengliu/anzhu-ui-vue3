import { Plugin, App } from "vue";

export type SFCWithInstall<T> = T & Plugin;
export function withInstall<T>(comp: T) {
  // 组件实现install方法后，便可以通过app.use()被全局引用了。
  (comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string };
    console.log("name:", name);
    // 将组件注册成全局的组件
    // app.component(name, comp as SFCWithInstall<T>);
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
}
