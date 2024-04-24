// 用来整合组件的，最终实现导出组件

import _Icon from "./src/icon.vue";
import { withInstall } from '@anzhu-ui/utils/with-install'

const Icon = withInstall(_Icon);

export default Icon; // 此组件即可以通过app.use()使用，也可以import使用

export * from "./src/icon";

// 此条语句未生效，请注意@todo
declare module 'vue' {
  export interface GlobalComponent{
    AIcon: typeof Icon
  }
}
