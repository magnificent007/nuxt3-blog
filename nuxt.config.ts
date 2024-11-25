// https://nuxt.com/docs/api/configuration/nuxt-config
import Material from '@primevue/themes/material'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'

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
    '@nuxt/ui',
    '@nuxt/content',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@vueuse/nuxt'
  ],

  pinia: {
    storesDirs: ['./src/stores/*.{ts,js,mts,mjs}']
  },

  primevue: {
    options: {
      theme: {
        preset: Lara,
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
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 5173
  }
})