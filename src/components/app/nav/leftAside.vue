<script lang='ts' setup>
const menus = [
  {
    label: '首页',
    icon: 'pi pi-home',
    route: '/',
    command: () => useRouter().push('/')
  },
  // {
  //   label: '文章',
  //   icon: 'pi pi-file',
  //   route: '/articles',
  //   command: () => useRouter().push('/articles')
  // },
  {
    separator: true
  },
  {
    label: '关于',
    icon: 'pi pi-user'
  }
]
</script>

<template>
  <aside class="w-auto px-4 py-2 hidden md:block bg-slate-50 dark:bg-black">
    <TieredMenu class="bg-transparent border-0" :model="menus"></TieredMenu>
  </aside>
</template>

<style lang='scss' scoped>
</style>