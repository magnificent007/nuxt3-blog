<script lang='ts' setup>
import type { NavItem } from '@nuxt/content'

const links = ref<any>([])

const articleStore = useArticleStore()

async function getArticleCategory() {
  const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { server: false })
  navigation.value && getNavLinks(navigation.value[0].children!)
}

// await getArticleCategory()

function getNavLinks (navigation: NavItem[]) {
  const allArticles = []
  for (const item of navigation) {
    const { title, _path, children } = item
    links.value.push({  
      label: title,
      to: _path,
      click: () => {
        articleStore.setArticlesByCategory(children?.length ? children : [])
      }
    })
    children?.length ? allArticles.push(...children) : null
  }
  articleStore.setArticlesByCategory(allArticles)
}
</script>

<template>
  <!-- <UVerticalNavigation 
    class="w-48"
    :ui="{
      wrapper: 'box-border space-y-2',
      base: 'group block border-s -ms-px leading-6 before:hidden',
      padding: 'p-1 ps-4',
      rounded: '',
      font: '',
      ring: '',
      active: 'text-sky-500 dark:text-sky-400 border-current font-semibold',
      inactive: 'border-s border-gray-200 hover:border-sky-300 dark:border-gray-800 dark:hover:border-gray-500   text-gray-700 hover:text-sky-300 dark:text-gray-400 dark:hover:text-gray-300'
    }"
    :links="links"
  >
    <template #default="{ link }">
      <span class="group-hover:text-sky-500 relative">{{ link.label }}</span>
    </template>
  </UVerticalNavigation> -->
  <ContentNavigation v-slot="{ navigation }">
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>

<style lang='scss' scoped>
</style>