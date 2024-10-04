<script setup lang="ts">
defineProps<{
  msg: string
}>()

defineEmits<{
  (e: 'change', id: number): void
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
