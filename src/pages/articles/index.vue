<script lang="ts" setup>
definePageMeta({
  layout: 'content'
})

import type { NavItem } from '@nuxt/content'
</script>

<template>
  <UContainer 
    :ui="{ base: 'box-border', padding: 'py-4 sm:py-6 lg:py-8', constrained: 'w-full' }"
  >
    <AppArticleMain />
  </UContainer>
</template>