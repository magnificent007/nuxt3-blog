<script lang='ts' setup>
const page = ref(1)
const total = ref<any>([])
const pageSize = 9

await getAllArticles()

async function getAllArticles() {
  const { data: articles } = await useAsyncData('articles', () => queryContent('/').find(), { server: true })
  total.value = articles.value
}
</script>

<template>
  <ClientOnly fallback-tag="div">
    <ContentQuery path="/" :limit="pageSize" :skip="(page - 1) * pageSize">
      <template #default="{ data }">
        <div class="mb-4 grid gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
          <AppArticleCard :article="article" v-for="article in data" :key="article._path" />
        </div>
        <AppArticlePagination :pageSize="pageSize" :total="total.length" @update:page="(e: number) => page = e" v-if="total.length" />
      </template>
      <template #not-found>
        <p>空空如也~</p>
      </template>
    </ContentQuery>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </ClientOnly>
</template>

<style lang='scss' scoped>
.animate__animated {
  animation-fill-mode: both;
  animation-duration: 1s;
}
</style>