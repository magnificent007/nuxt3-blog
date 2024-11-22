<script lang='ts' setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="article._path">
    <article class="rounded active:shadow-md p-4">
      <section class="flex flex-col xs:flex-row flex-nowrap gap-4">
        <div>
          <img class="w-full xs:w-48" :src="article.poster" v-if="article?.poster" />
        </div>
        <div class="flex-1 flex flex-col">
          <h2 class="relative text-lg pl-3.5 font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-sky-500 flex justify-between items-center">
            <span
              class="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
            </span>
            <span>{{ article.title }}</span>
            
          </h2>
          <p class="flex-1 relative z-10 my-2 text-base text-zinc-500 dark:text-gray-400">
            {{ article.description }}
          </p>
          <span class="text-sm font-normal text-zinc-400 dark:text-gray-400">{{ article.published }}</span>
        </div>
      </section>
    </article>
  </NuxtLink>
</template>

<style lang='scss' scoped>

</style>