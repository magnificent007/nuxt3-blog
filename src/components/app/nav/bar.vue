<script lang="tsx" setup>
import type { AppCommandPanel } from '#build/components'

const isExpand = ref<boolean>(false)
const iconClass = ref<string>('pi-sun')
const commandPanelRef = ref<InstanceType<typeof AppCommandPanel> | null>(null)

function onThemeToggler() {
  const root = document.getElementsByTagName('html')[0];

  root.classList.toggle('nuxt-app-dark');
  iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon';
}

function goGithubLink() {
  window.open('https://github.com/magnificent007/nuxt3-blog')
}

function search () {
  commandPanelRef.value && (commandPanelRef.value.visible = !commandPanelRef.value.visible)
}

function onExpand () {
  isExpand.value = !isExpand.value
}
</script>

<template>
  <Menubar class="h-16 pr-4 lg:pr-20 bg-zinc-50 dark:bg-slate-900">
    <template #start>
      <AppNavLogo />
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <button type="button"
          class="inline-flex w-7 h-7 p-0 items-center justify-center rounded dark:active:bg-slate-50 dark:active:bg-opacity-20"
          @click="search"
        >
          <i class="pi pi-search" />
        </button>
        <button type="button"
          class="inline-flex w-7 h-7 p-0 items-center justify-center rounded dark:active:bg-slate-50 dark:active:bg-opacity-20"
          @click="goGithubLink">
          <i class="pi pi-github" />
        </button>
        <button type="button"
          class="inline-flex w-7 h-7 p-0 items-center justify-center rounded dark:active:bg-slate-50 dark:active:bg-opacity-20"
          @click="onThemeToggler">
          <i :class="`pi ${iconClass}`" />
        </button>
        <button type="button"
          class="inline-flex lg:hidden w-7 h-7 p-0 items-center justify-center rounded dark:active:bg-slate-50 dark:active:bg-opacity-20"
          @click="onExpand">
          <i class="pi pi-bars" />
        </button>
      </div>
    </template>
  </Menubar>

  <AppCommandPanel ref="commandPanelRef" />

  <Drawer v-model:visible="isExpand" position="right" header=" ">
    <div class="flex flex-col gap-4">
      <AppNavSeason />
      <AppNavMenu />
    </div>
  </Drawer>
</template>

<style lang="scss" scoped>
</style>