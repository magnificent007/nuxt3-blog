<script lang='ts' setup>
</script>
<!-- py-4 sm:py-6 lg:py-8 -->
<template>
  <div class="overflow-hidden h-full">
    <UContainer 
      class="h-full flex flex-nowrap gap-4 overflow-hidden" 
      :ui="{ base: 'box-border', padding: 'p-0', constrained: 'w-full' }"
    >
      <AppArticleAside class="w-48 h-full overflow-y-auto hidden md:block" />
      <main class="flex-1 h-full overflow-y-auto">
        <slot />
      </main>
    </UContainer>
  </div>
</template>

<style lang='scss' scoped>
* {
  scrollbar-width: none;
}
</style>