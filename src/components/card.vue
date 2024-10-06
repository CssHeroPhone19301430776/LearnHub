<template>
  <div class="flex flex-col w-80">
    <div :class="imageClass" :style="{ backgroundImage: `url(${props.image})` }"></div>
    <div v-if="props.title || props.subTitle" class="flex flex-col items-start p-4">
      <p class="text-lg text-dark-300 pb-2">{{ props.title }}</p>
      <p class="text-sm text-dark-300 font-300">{{ props.subTitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image?: string
  icon?: string
  title?: string
  subTitle?: string
}>()

const imageClass = computed(() => {
  let defaultClass = 'bg-image'
  if (!props.title && !props.subTitle) {
    return defaultClass + ' h-60'
  }
  return defaultClass + ' h-40'
})
</script>

<style lang="scss" scoped></style>
