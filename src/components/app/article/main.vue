<script lang='ts' setup>
import type { NavItem } from '@nuxt/content'

const page = ref(1)
const total = ref<any>([])

// const { data: articles } = await useAsyncData('articles', () => queryContent('/').find(), { lazy: false, server: false })
onMounted(async () => {
})

</script>

<template>
  <UContainer :ui="{ padding: '', constrained: 'max-w-full' }">
    <ContentQuery path="/" :limit="10" :skip="(page - 1) * 10">
      <template #default="{ data }">
        <ul class="space-y-8 mb-4">
          <li v-for="article in data" :key="article._path">
            <AppArticleCard :article="article" />
          </li>
        </ul>
        <AppArticlePagination class="hidden sm:flex" :page="page" :pageCount="10" :total="[]" @update:page="(e: number) => page = e" v-if="data.length" />
      </template>
      <template #not-found>
        <p>空空如也~</p>
      </template>
    </ContentQuery>
  </UContainer>
</template>

<style lang='scss' scoped>
</style>