<template>
  <div class="flex">
    <router-link class="item" to="/">首页</router-link>
    <a class="item" href="hhttps://github.com/CssHeroPhone19301430776/LearnHub">社区</a>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.item {
  @apply relative text-white text-xl px-8 py-2 font-300 box-border;
}

.item:hover::after {
  content: '';
  @apply absolute block h-[1px] w-8 bg-gray-100  bottom-0 left-[calc(50%-1rem)];
}
</style>
