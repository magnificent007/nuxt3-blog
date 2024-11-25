<script lang="tsx" setup>
const links = [
  {
    label: '首页',
    to: '/'
  },
  {
    label: '文章',
    to: '/articles'
  }
]

const isExpand = ref<boolean>(false)
const iconClass = ref<string>('pi-sun')

function onThemeToggler() {
  const root = document.getElementsByTagName('html')[0];

  root.classList.toggle('nuxt-app-dark');
  iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon';
}

function goGithubLink() {
  window.open('https://github.com/magnificent007/nuxt3-blog')
}
</script>

<template>
  <Menubar class="h-16 pr-4 lg:pr-20 dark:bg-slate-900">
    <template #start>
      <AppNavLogo />
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <button type="button"
          class="inline-flex w-7 h-7 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
        >
          <i class="dark:text-white pi pi-search" />
        </button>
        <button type="button"
          class="inline-flex w-7 h-7 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
          @click="goGithubLink">
          <i class="dark:text-white pi pi-github" />
        </button>
        <button type="button"
          class="inline-flex w-7 h-7 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
          @click="onThemeToggler">
          <i :class="`dark:text-white pi ${iconClass}`" />
        </button>
      </div>
    </template>
  </Menubar>


  <!-- <div :class="['w-full h-20 xs:h-32 border-b border-gray-200 dark:border-gray-800']">
    <div :class="['fixed top-0 left-0 z-99 h-20 xs:h-32 bg-white box-border w-full mx-auto']">
      <div class="w-full">
        <div class="mx-auto xl:max-w-7xl h-20 flex justify-between px-4">
          <AppNavLogo class="mr-2"/>
          <AppNavOperation class="ml-2":isExpand="isExpand" @isExpand="(e) => isExpand = e" />
        </div>
      </div>
      <div class="w-full bg-blue-900">
        <UHorizontalNavigation 
          class="mx-auto xl:max-w-7xl h-12 px-4 justify-center xs:flex"
          :ui="{ wrapper: 'hidden overflow-x-auto', inner: 'h-full', container: 'h-full', base: 'h-full rounded-none', before: 'before:rounded-none hover:before:bg-transparent', active: 'text-xl text-sky-600 font-extrabold after:bg-sky-500', inactive: 'text-white' }" 
          :links="links"
        >
          <template #default="{ link }">
            <span class="group-hover:text-sky-500 relative">{{ link.label }}</span>
          </template>
        </UHorizontalNavigation>
      </div>
    </div>
  </div> -->

  <USlideover v-model="isExpand">
    <UCard
      class="flex flex-col flex-1"
      :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <template #header>
        <div class="h-8">
          菜单
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            :padded="false"
            @click="isExpand = false"
          />
        </div>
      </template>

      <div class="h-full">
        <UVerticalNavigation 
          :ui="{ active: 'text-sky-500 after:bg-sky-500' }"
          :links="links"
        >
          <template #default="{ link }">
            <span class="group-hover:text-sky-500 relative">{{ link.label }}</span>
          </template>
        </UVerticalNavigation>
      </div>

      <template #footer>
        <div class="h-8"></div>
      </template>
    </UCard>
  </USlideover>
</template>

<style lang="scss" scoped>
</style>