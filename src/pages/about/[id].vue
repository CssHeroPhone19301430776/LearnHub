<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const routeParams = route.params as { id: string }

console.log(routeParams.id)
</script>

<template>
  <div>About_id</div>
</template>

<style lang="sass" scoped></style>
