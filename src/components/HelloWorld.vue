<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="main">{{ msg }}</div>
</template>

<style lang="scss" scoped>
.main {
  color: red;
}
</style>
