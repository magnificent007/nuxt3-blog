<script lang='ts' setup>
definePageMeta({
  layout: 'default' // 这里用content会影响到typeit 打印两次 待研究？
})
</script>

<template>
  <div>
    <ContentDoc tag="article">
      <template v-slot="{ doc }">
        <article class=" bg-slate-50 dark:bg-slate-900 p-4 rounded w-full">
          <div class="relative text-left">
            <div class="flex flex-wrap justify-between">
              <div>
                <span class="text-sm text-zinc-400">{{ doc?.published }}</span>
              </div>
              <span class="flex justify-end items-center text-sm text-zinc-400 dark:active:text-white cursor-pointer" @click="$router.back()">
                <i class="pi pi-angle-double-left text-inherit pr-1" />
                返回 
              </span>
            </div>
            <span class="block text-xl font-extrabold py-8">{{ doc?.title || '无标题' }}</span>
          </div>
          <section class="prose prose-base max-w-full prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:rounded-lg ">
            <ContentRenderer :value="doc" />
          </section>
          
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
        </article>
      </template>
      <template #not-found>
        <h4>Document not found</h4>
      </template>
      <template #empty>
        <h4>Document is empty</h4>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang='scss' scoped>
</style>