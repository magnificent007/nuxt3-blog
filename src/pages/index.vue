<script lang="ts" setup>
import TypeIt from "typeit"

const bannerRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  bannerRef.value && new TypeIt(bannerRef.value, {
    strings: ["<span class='text-lg text-slate-50 font-extrabold'>console.log('Cheers🍺');</span>"],
    cursorSpeed: 1500,
    cursorChar: '',
    html: true
  }).go();
})
</script>

<template>
  <div class="mainContent w-full gap-4">
    <div class="flex flex-col">
      <div 
        class="w-full rounded bg-center bg-cover bg-no-repeat overflow-hidden flex-1 flex justify-center items-center" 
        style="background-image: url(/images/banner.jpeg);" 
        ref="bannerRef"
      ></div>
    </div>
    <div>
      <AppArticleMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.mainContent {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 35vh 1fr;
}
</style>