<script setup>
</script>

<template>
  <div class="w-screen h-screen overflow-hidden flex flex-col">
    <NuxtLoadingIndicator color="#0ea5e9" />
    <AppNavBar />
    <NuxtLayout class="scrollbar overflow-hidden flex-1">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.scrollbar {
  scrollbar-width: thin;
  scrollbar-gutter: stable both-edges;
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
