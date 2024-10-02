<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="main">{{ msg }}</div>
</template>

<style scoped></style>
