<script setup>
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <NuxtLoadingIndicator color="#0ea5e9" />
    <AppNavBar />
    <div class="flex flex-1 overflow-hidden">
      <AppNavLeftAside />
      <NuxtLayout class="w-full h-full overflow-y-auto p-4 flex-1 dark:bg-gray-800 box-border">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style>
@import 'primeicons/primeicons.css';

html {
  font-size: 15px;
}

* {
  scrollbar-width: thin;
  scrollbar-gutter: auto;
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

:root {}

:root[class~='nuxt-app-dark'] {
  button[type='button'] {
    border-color: var(--nuxt-app-surface-700);

    &:hover {
      border-color: var(--nuxt-app-surface-50);
    }
  }
}
</style>
