<script lang="tsx" setup>
const links = [
  {
    label: '首页',
    to: '/',
    click: () => {
      isExpand.value = false
    }
  },
  {
    label: '新闻中心',
    to: '/articles',
    click: () => {
      isExpand.value = false
    }
  }
]

const isExpand = ref(false)
</script>

<template>
  <div :class="['w-full h-20 xs:h-32 border-b border-gray-200 dark:border-gray-800']">
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
  </div>

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

<style lang="scss" scoped module>
* {
  scrollbar-width: none;
}
</style>