<script lang='ts' setup>
</script>

<template>
  <div>
    <UContainer 
      class="flex flex-nowrap gap-4" 
      :ui="{ base: 'box-border', padding: 'py-4 sm:py-6 lg:py-8', constrained: 'w-full' }"
    >
      <AppArticleAside class="hidden md:block" />
      <slot />
    </UContainer>
  </div>
</template>

<style lang='scss' scoped>
</style>