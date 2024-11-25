<script lang="ts" setup>
</script>

<template>
  <div class="mainContent w-full">
    <div class="flex flex-col">
      <div class="w-full rounded bg-center bg-cover bg-no-repeat overflow-hidden flex-1" style="background-image: url(/images/banner.jpeg);" alt="banner" /> 
    </div>
    <div>
      <div class="mt-4"> 
        <Suspense>
        <AppArticleMain />
      </Suspense>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>// grid gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3

.mainContent {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 35vh 1fr;
}
</style>