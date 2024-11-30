<script setup>
const articleStore = useArticleStore()
await articleStore.getAllArticles()
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <NuxtLoadingIndicator color="#00c678" />
    <AppNavBar />
    <div class="flex flex-nowrap flex-1 overflow-hidden">
      <AppNavLeftAside />
      <NuxtLayout class="w-full h-full overflow-y-auto p-4 flex-1 dark:bg-slate-800">
        <NuxtPage />
        <ScrollTop target="parent" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
      </NuxtLayout>
      <AppNavRightAside />
    </div>
  </div>
</template>

<style>
@import 'primeicons/primeicons.css';

html {
  font-size: 15px;
}

* {
  scrollbar-width: none;
  scrollbar-gutter: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
