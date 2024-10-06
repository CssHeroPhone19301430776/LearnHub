<template>
  <swiper
    class="relative h-[36rem]"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :pagination="{ el: '.pagination', type: 'fraction' }"
    :navigation="{ nextEl: '.next', prevEl: '.prev' }"
  >
    <swiper-slide v-for="item in props.swiperList" :key="item.image">
      <slot :item="item">
        <div class="bg-image" :style="{ backgroundImage: `url(${item.image})` }">
          <Container class="h-full flex flex-col justify-center items-start color-white">
            <p class="text-3xl py-4">{{ item.title }}</p>
            <p>{{ item.subTitle }}</p>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div
      class="flex justify-center items-center absolute bottom-0 right-0 z-4 w-40 h-12 bg-white opacity-60 text-dark"
    >
      <div class="pagination"></div>
      <div class="prev i-mingcute:left-line w-8"></div>
      <div class="next i-mingcute:right-line w-8"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { SwiperItems } from './type'

const props = defineProps<{
  swiperList: SwiperItems[]
}>()

const modules = ref([Navigation, Pagination])
</script>

<style lang="scss" scope>
.swiper-pagination-fraction {
  width: auto;
}
.swiper-button-disabled {
  color: gray;
}
</style>
