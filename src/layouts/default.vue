<script lang='ts' setup>
</script>

<template>
  <div>
  <!-- <div class="w-screen h-screen overflow-y-auto flex flex-col"> -->
    <!-- <AppNavBar /> -->
    <UContainer :ui="{ base: 'box-border', padding: 'py-4 sm:py-6 lg:py-8', constrained: 'w-full' }">
      <slot />
    </UContainer>
  </div>
</template>

<style lang='scss' scoped>
</style>