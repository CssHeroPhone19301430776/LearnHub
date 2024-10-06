<script setup lang="ts">
import type { SwiperItems } from '@/components/type'
import bg from '@/assets/images/bg.png'
const swiperList: SwiperItems[] = [
  {
    image: bg,
    subTitle: '让技术没有门槛，让沟通没有障碍',
    title: '传播技术的种子'
  },
  {
    image: bg,
    subTitle: '让技术没有门槛，让沟通没有障碍',
    title: '传播技术的种子'
  },
  {
    image: bg,
    subTitle: '让技术没有门槛，让沟通没有障碍',
    title: '传播技术的种子'
  }
]
</script>

<template>
  <Swiper :swiperList="swiperList" />
</template>

<style lang="sass" scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
