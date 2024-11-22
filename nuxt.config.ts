// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: { 
      name: 'page', 
      mode: 'out-in' 
    }
  },

  modules: ['@nuxt/ui', '@nuxt/content', '@pinia/nuxt'],

  pinia: {
    storesDirs: ['./src/stores/*.{ts,js,mts,mjs}']
  },

  srcDir: 'src/',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  },

  content: {
    // My custom configuration
    markdown: {
      anchorLinks: false
    },
    navigation: {
      fields: ['_id', 'title', 'description', 'published', 'poster', 'author']
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 5173
  }
})