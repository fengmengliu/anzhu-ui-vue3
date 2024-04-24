// 有哪些属性，可以考虑使用组件的时候会有哪些需求
import { defineComponent } from 'vue';
import { virtualProps } from './props';

export default defineComponent({
  name: 'anzhu-virtual-scroll-list',
  props: virtualProps,
  setup(props, {}) {
    console.log(111, props);
    return () => {
      return <div>111</div>;
    };
  }
});
