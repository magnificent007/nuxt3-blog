<script lang='ts' setup>
import { navigateTo } from 'nuxt/app'

</script>

<template>
  <div
    class="w-auto h-12 leading-12 my-auto flex items-center justify-center whitespace-nowrap overflow-hidden"
  >
    <Avatar class="mr-2 cursor-pointer overflow-hidden" image="/images/avatar.jpg" alt="avatar lost..." @click="async () => await navigateTo({ path: '/' })" />
    <h2 class="text-xl font-bold mb-0 hidden xs:block">Cheems' Blog</h2>
  </div>
</template>

<style lang='scss' scoped>
</style>