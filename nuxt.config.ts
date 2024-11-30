// https://nuxt.com/docs/api/configuration/nuxt-config
import { Noir } from './src/presets/Noir'

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

  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'dayjs-nuxt'
  ],

  pinia: {
    storesDirs: ['./src/stores/*.{ts,js,mts,mjs}']
  },

  primevue: {
    options: {
      theme: {
        preset: Noir,
        options: {
          prefix: 'nuxt-app',
          darkModeSelector: '.nuxt-app-dark',
          cssLayer: false
        }
      }
    }
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
    },
    experimental: {
      search: {
        indexed: true,
        options: {
          fields: ['title', 'description', 'content'],
          storeFields: ['title', 'description', 'content'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              description: 2,
              content: 1
            }
          }
        }
      }
    }
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 5173
  }
})