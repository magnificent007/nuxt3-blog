import type { NavItem } from '@nuxt/content'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Array<NavItem>>([])

  const setArticlesByCategory = (arts: NavItem[] | []) => {
    articles.value = arts
    console.log('articles', articles.value)
  }

  return {
    articles,
    setArticlesByCategory
  }
})

export default useArticleStore