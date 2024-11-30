<script lang='ts' setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div 
    class="w-full rounded p-4 bg-zinc-50 dark:bg-slate-900 flex flex-col justify-between" 
  >
    <div class="flex flex-col flex-nowrap gap-4">
      <div class="flex-1 flex flex-col overflow-hidden">
        <h2 class="relative text-lg pl-3.5 font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-sky-500 flex justify-between items-center">
          <span
            class="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
          </span>
          <span class="w-full block truncate">{{ article.title || '无标题' }}</span>
        </h2>
        <div class="flex-1 my-2 text-base text-zinc-500 overflow-y-auto" style="aspect-ratio: 2/0.5 !important;">
          {{ article.description }}
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap justify-between items-center">
      <span class="text-sm font-normal text-zinc-400">{{ article.published}}</span>
      <ButtonGroup>
        <Button text severity="secondary" size="small" @click="$router.push(`${article._path}`)">阅读</Button>
      </ButtonGroup>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>