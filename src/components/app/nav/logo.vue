<script lang='ts' setup>
import { navigateTo } from 'nuxt/app'

</script>

<template>
  <div
    class="h-12 leading-12 my-auto flex items-center justify-center whitespace-nowrap overflow-hidden"
  >
    <img class="h-8 mr-2 cursor-pointer" src="~/assets/images/logo.jpg" alt="logo丢失..." @click="async () => await navigateTo({ path: '/' })" />
    <h2 class="text-xl font-bold mb-0">Cheems' Blog</h2>
  </div>
</template>

<style lang='scss' scoped>
</style>