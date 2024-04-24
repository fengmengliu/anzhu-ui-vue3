// 导出ts的类型声明和组件本身
// 有两种方式编写组件：（1）.vue文件的方式  template  <div></div>  或者是h（）函数
// （2）tsx语法编写

import { withInstall } from '@anzhu-ui/utils/with-install';
import _VirtualScrollList from './src/virtual-scroll-list';

const VirtualScrollList = withInstall(_VirtualScrollList);

export default VirtualScrollList;

declare module 'vue' {
  export interface GlobalComponents {
    AVirtualScrollList: typeof VirtualScrollList;
  }
}

export type { virtualProps } from './src/props';
