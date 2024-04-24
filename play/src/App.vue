<script setup lang="ts">
import { BarcodeOutline } from '@vicons/ionicons5'
import { Random } from 'mockjs'
import { ref } from 'vue'
import Item from './Item.vue'

interface DataType {
  id: number
  name: string
  desc: string
  index: number
}
const data: Array<DataType> = []
const totalCount = 10000

let index = 0;
// 生成测试数据
while (index++ !== totalCount) {
  data.push({
    id: index,
    name: Random.name(),
    desc: Random.csentence(20, 120),
    index: index
  })
}

const items = ref(data)

</script>

<template>
  <a-icon color="red" size="30">
    <BarcodeOutline></BarcodeOutline>
  </a-icon>
  <a-icon color="blue" size="40">
    <BarcodeOutline></BarcodeOutline>
  </a-icon>

  <anzhu-virtual-scroll-list class="virtual-list" :data-sources="items" data-key="id" :keeps="30" :estimateSize="80"
    :dataComponent="Item">
  </anzhu-virtual-scroll-list>
</template>

<style scoped>
.virtual-list {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  border: 1px solid red;
}
</style>
