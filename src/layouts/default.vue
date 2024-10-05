<template>
  <div class="fixed top-0 w-full z-10" :class="{ 'bg-[#000]': y <= 0 }">
    <Container class="flex">
      <img class="w-22 h-full" src="@/assets/images/logo.png" />
      <Menu />
    </Container>
  </div>

  <RouterView />

  <div>footer</div>
</template>

<script setup>
const { y } = useWindowScroll()
</script>

<style lang="scss" scoped></style>
