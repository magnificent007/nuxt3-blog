<script lang='ts' setup>
definePageMeta({
  layout: 'content'
})
console.log(useRoute())
</script>

<template>
  <UContainer :ui="{ padding: '', constrained: 'max-w-full' }">
    <ContentQuery :path="$route.path">
      <template #default="{ data }">
        <ul class="space-y-8 mb-4">
          <li v-for="article in data" :key="article._path">
            <AppArticleCard :article="article" />
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>空空如也~</p>
      </template>
    </ContentQuery>
  </UContainer>
</template>

<style lang='scss' scoped>
</style>