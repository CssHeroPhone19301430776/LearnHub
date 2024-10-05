<script setup lang="ts">
import { useRouterParams } from '@/utils'

const routeParams = useRouterParams<{ id: string }>()

console.log(routeParams.value.id)
</script>

<template>
  <div>About_id</div>
</template>

<style lang="sass" scoped></style>
