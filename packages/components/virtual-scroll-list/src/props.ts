import { DefineComponent, ExtractPropTypes, PropType } from 'vue';

export const virtualProps = {
  // 传入要渲染的总数据
  dataSources: {
    type: Array,
    required: true,
    default: () => []
  },
  // 每项数据的标识
  dataKey: {
    type: String,
    required: true
  },
  // 默认显示的个数
  keeps: {
    type: Number,
    default: 30
  },
  // 大约的高度
  estimateSize: {
    type: Number,
    default: 80
  },
  // 用户传入的渲染组件
  dataComponent: {
    type: [Object, Function] as PropType<DefineComponent<{}, {}, any>>,
    required: true
  }
} as const;

export type virtualProps = ExtractPropTypes<typeof virtualProps>;
