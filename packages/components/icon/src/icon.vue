<script setup lang='ts'>
import { createNamespace } from '@anzhu-ui/utils/create';
import { iconProps } from './icon';
import { computed, defineOptions } from 'vue';

// 组件的名字
defineOptions({
  name: 'AIcon'
})

// bem定义命名空间（也就是class类，可以有效防止样式污染）
const bem = createNamespace('icon')

// 组件接受到的属性
const props = defineProps(iconProps)

// 计算属性 来计算一个样式处理
const style = computed(() => {
  if(!props.color && !props.size) return {}
  return {
    ...(props.size ? {'font-size': props.size + 'px'} : {}),
    ...(props.color ? {'color': props.color} : {})
  } 
})

</script>

<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<style lang='scss' scoped>

</style>