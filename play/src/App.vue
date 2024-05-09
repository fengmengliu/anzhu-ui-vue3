<script setup lang="ts">
import { BarcodeOutline } from '@vicons/ionicons5'
import { Random } from 'mockjs';
import Item from './Item.vue'
import { ref } from 'vue';

interface DataType {
  id: number,
  name: string,
  desc: string,
  index: number
}
const totalCount = 10000
const data: Array<DataType> = []

let index = 0;
while (index++ !== totalCount) {
  data.push({
    id: index,
    name: Random.name(),
    desc: Random.csentence(20, 120), // 20个字符 到 120个字符
    index
  })
}

const items = ref(data) // 使数据变成是响应式的

</script>

<template>
  <a-icon color="red" size="30">
    <BarcodeOutline></BarcodeOutline>
  </a-icon>
  <a-icon color="blue" size="40">
    <BarcodeOutline></BarcodeOutline>
  </a-icon>

  <a-virtual-scroll-list class="virtual-list" :data-sources="items" data-key="id" :keeps="30" :estimateSize="80"
    :dataComponent="Item">
  </a-virtual-scroll-list>
</template>

<style scoped lang="scss">
.virtual-list {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  border: 3px solid red;
}
</style>
