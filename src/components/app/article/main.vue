<script lang='ts' setup>
const page = ref(1)
const pageSize = 9

const articleStore = useArticleStore()
</script>

<template>
  <ClientOnly fallback-tag="div">
    <ContentQuery path="/" :limit="pageSize" :skip="(page - 1) * pageSize">
      <template #default="{ data }">
        <div class="mb-4 grid gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
          <AppArticleCard :article="article" v-for="article in data" :key="article._path" />
        </div>
        <AppArticlePagination :pageSize="pageSize" :total="articleStore.articles.length" @update:page="(e: number) => page = e" v-if="articleStore.articles.length" />
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
</style>