import type { NavItem, ParsedContent } from '@nuxt/content'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Array<ParsedContent>>([])

  async function getAllArticles() {
    const { data: total } = await useAsyncData('articles', () => queryContent('/').find(), { server: true })
    articles.value = total.value ?? []
  }

  function queryArticlesByCondition(condition: string) {
    return articles.value.filter((file: ParsedContent) => file.title?.includes(condition.trim()) || file.category?.includes(condition.trim()))
  }

  return {
    articles,
    getAllArticles,
    queryArticlesByCondition
  }
})

export default useArticleStore