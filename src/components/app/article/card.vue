<script lang='ts' setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  }
})

// const articleCardHeight: Ref<number> = inject('articleCardHeight')

// watch(() => props.articleCardHeight, () => {
//   console.log(props.articleCardHeight)
// })
</script>

<template>
  <NuxtLink :to="article._path">
    <article class="w-full rounded hover:shadow-md p-4 dark:bg-slate-900">
      <section class="flex flex-col flex-nowrap gap-4">
        <div v-if="article?.poster">
          <!-- <img class="w-full bg-center bg-contain bg-no-repeat bg-slate-200" :src="article.poster" /> -->
          <LazyImg :url="article.poster" />
        </div>
        <div class="flex-1 flex flex-col overflow-hidden">
          <h2 class="relative text-lg pl-3.5 font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-sky-500 flex justify-between items-center">
            <span
              class="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
            </span>
            <span>{{ article.title || '无标题' }}</span>
          </h2>
          <div class="flex-1 z-10 my-2 text-base text-zinc-500 dark:text-gray-400 overflow-hidden break-all">
            {{ article.description }}
          </div>
          <div class="w-full flex flex-wrap justify-between">
            <span class="text-sm font-normal text-zinc-400 dark:text-gray-400">作者：{{ article.author || '佚名' }}</span>
            <span class="text-sm font-normal text-zinc-400 dark:text-gray-400">{{ article.published}}</span>
          </div>
        </div>
      </section>
    </article>
  </NuxtLink>
</template>

<style lang='scss' scoped>

</style>