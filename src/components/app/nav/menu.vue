<script lang='ts' setup>
const menus = [
  {
    label: '首页',
    icon: 'pi pi-home',
    route: '/',
    command: () => useRouter().push('/')
  },
  {
    separator: true
  },
  {
    label: '关于',
    icon: 'pi pi-user',
    route: '/about',
    command: () => useRouter().push('/about')
  }
]
</script>

<template>
  <TieredMenu class="bg-transparent border-0" :model="menus"></TieredMenu>
</template>

<style lang='scss' scoped>
</style>