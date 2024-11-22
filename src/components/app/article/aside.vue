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
  const links: Array<{ label: string, to: string }> = []
  for (const item of navigation) {
    const { title, _path, children } = item
    links.push({  
      label: title,
      to: _path
    })
  }
  return links
}
</script>

<template>
  <aside>
    <ContentNavigation v-slot="{ navigation }">
      <UVerticalNavigation 
        :ui="{
          wrapper: 'py-4 sm:py-6 lg:py-8',
        }"
        :links="getNavLinks(navigation)"
      >
        <template #default="{ link }">
          <span class="group-hover:text-sky-500 relative">{{ link.label }}</span>
        </template>
      </UVerticalNavigation>
    </ContentNavigation>
  </aside>
</template>

<style lang='scss' scoped>
</style>