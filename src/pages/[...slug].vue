<script lang='ts' setup>
definePageMeta({
  layout: 'content'
})
</script>

<template>
  <UContainer 
    :ui="{ padding: 'py-4 sm:py-6 lg:py-8', constrained: 'w-full' }"
    v-if="$route.params.slug.length === 1"
  >
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
  <UContainer 
    class="prose prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 prose-img:rounded-lg"
    :ui="{ padding: 'py-4 sm:py-6 lg:py-8', constrained: 'w-full' }"
    v-else
  >
    <ContentDoc tag="article">
      <template v-slot="{ doc }">
        <UCard
          :ui="{
            divide: 'divide-dashed',
            rounded: '',
            shadow: '',
            body: {
              padding: 'px-4 py-2 sm:p-6'
            },
            header: {
              base: 'box-border',
              padding: 'px-4 pt-8 pb-4 sm:pt-8 sm:pb-4'
            }
          }"
        >
          <template #header>
            <div class="relative text-center">
              <nav>
                <em 
                  class="absolute -top-5 right-0 w-full flex justify-end items-center text-sm text-zinc-400 active:text-sky-500 cursor-pointer"
                  @click="$router.back()"
                >
                  <UIcon name="i-line-md:chevron-small-double-left" class="w-4 h-4 text-inherit" />
                  返回
                </em>
              </nav>
              <span class="block text-xl font-extrabold py-2">{{ doc?.title || '无标题' }}</span>
              <span class="text-sm text-zinc-400">发布日期：{{ doc?.published || '无' }}</span>
            </div>
          </template>
          <ContentRenderer :value="doc" />
          <!-- 有问题 关闭该功能 -->
          <!-- <template #footer>
            <nav class="flex justify-between items-center mx-4">
              <NuxtLink class="flex items-center" v-if="prev" :to="prev._path">
                <UIcon name="i-line-md:chevron-left" class="w-4 h-4 text-inherit" />
                {{ prev.title }}
              </NuxtLink>
              <NuxtLink class="flex items-center" v-if="next" :to="next._path">
                {{ next.title }}
                <UIcon name="i-line-md:chevron-right" class="w-4 h-4 text-inherit" />
              </NuxtLink>
            </nav>
          </template> -->
        </UCard>
      </template>
      <template #not-found>
        <h4>Document not found</h4>
      </template>
      <template #empty>
        <h4>Document is empty</h4>
      </template>
    </ContentDoc>
  </UContainer>
</template>

<style lang='scss' scoped>
</style>