// 1.考虑用户怎么去用，有哪些属性
// 准备组件相关的属性和ts的类型
import { ExtractPropTypes, PropType } from "vue"

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<string | number>
} as const; // as const是将属性都变成是readonly属性

// 从iconProps抽离出相应的类型
export type IconProps = ExtractPropTypes<typeof iconProps>