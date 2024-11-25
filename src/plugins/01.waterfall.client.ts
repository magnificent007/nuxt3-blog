import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

export default defineNuxtPlugin({
  name: 'waterfall',
  async setup(nuxtApp) {
    nuxtApp.vueApp.component('LazyImg', LazyImg)
    nuxtApp.vueApp.component('Waterfall', Waterfall)
  }
})