import type { NavItem, ParsedContent } from '@nuxt/content'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Array<ParsedContent>>([])

  async function getAllArticles() {
    const { data: total } = await useAsyncData('articles', () => queryContent('/').find(), { server: true })
    articles.value = total.value ?? []
  }

  async function queryArticlesByCondition(condition: string) {
    return (await searchContent(
      condition.trim()
    )).value
  }

  return {
    articles,
    getAllArticles,
    queryArticlesByCondition
  }
})

export default useArticleStore