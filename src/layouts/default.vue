<script lang='ts' setup>
</script>

<template>
  <div>
  <!-- <div class="w-screen h-screen overflow-y-auto flex flex-col"> -->
    <!-- <AppNavBar /> -->
    <UContainer :ui="{ padding: '', constrained: 'w-full' }">
      <slot />
    </UContainer>
  </div>
</template>

<style lang='scss' scoped>
</style>