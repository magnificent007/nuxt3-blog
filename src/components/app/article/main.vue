<script lang='ts' setup>
import type { NavItem } from '@nuxt/content'

const page = ref(1)
const total = ref<any>([])
const pageCount = 5


await getAllArticles()

async function getAllArticles() {
  const { data: articles } = await useAsyncData('articles', () => queryContent('/').find(), { server: true })
  total.value = articles.value
}

</script>

<template>
  <ContentQuery path="/" :limit="pageCount" :skip="(page - 1) * pageCount">
    <template #default="{ data }">
      <ul class="space-y-8 mb-4">
        <li v-for="article in data" :key="article._path">
          <AppArticleCard :article="article" />
        </li>
      </ul>
      <AppArticlePagination class="hidden sm:flex" :page="page" :pageCount="pageCount" :total="total ?? []" @update:page="(e: number) => page = e" v-if="data.length" />
    </template>
    <template #not-found>
      <p>空空如也~</p>
    </template>
  </ContentQuery>
</template>

<style lang='scss' scoped>
</style>