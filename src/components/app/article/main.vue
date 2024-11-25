<script lang='ts' setup>
const page = ref(1)
const total = ref<any>([])
const pageCount = 5


// await getAllArticles()

// async function getAllArticles() {
//   const { data: articles } = await useAsyncData('articles', () => queryContent('/').find(), { server: true })
//   total.value = articles.value
//   console.log(total.value)
// }

function waterfallData (arts: Array<Record<string, any>>) {
  const list = []
  for (let a of arts) {
    list.push({ src: a.poster, article: a })
  }
  return list
}
</script>

<template>
  <ClientOnly fallback-tag="div">
    <ContentQuery path="/" :skip="(page - 1) * pageCount">
      <template #default="{ data }">
        <Waterfall style="background-color: transparent;" :hasAroundGutter="false" :gutter="16" :breakpoints="{ 480: { rowPerView: 1 }, 1024: { rowPerView: 2 }, 1920: { rowPerView: 3 } }" :list="waterfallData(data)">
          <template #default="{ item, url, index }">
            <AppArticleCard :article="item.article" />
          </template>
        </Waterfall>
        <!-- <AppArticlePagination class="hidden sm:flex" :page="page" :pageCount="pageCount" :total="total ?? []" @update:page="(e: number) => page = e" v-if="data.length" /> -->
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