<script lang='ts' setup>
const emits = defineEmits(['update:page'])

defineProps({
  page: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  }
})
</script>

<template>
  <div class="w-full">
    <Paginator class="mx-auto" :rows="pageSize" :totalRecords="total" @page="({page}) => emits('update:page', page + 1)">
      <template #container="{ first, last, page, pageCount, firstPageCallback, lastPageCallback, prevPageCallback, nextPageCallback, totalRecords }">
        <div class="flex items-center gap-4 bg-transparent rounded-full py-1 px-2 justify-center">
          <Button icon="pi pi-angle-double-left" rounded text size="small" severity="secondary" @click="firstPageCallback" :disabled="page === 0" />
          <Button icon="pi pi-angle-left" rounded text size="small" severity="secondary" @click="prevPageCallback" :disabled="page === 0" />
          <div class="text-color font-medium">
            <span class="text-sm text-slate-900 dark:text-slate-50">{{ page + 1 }} / {{ pageCount }}</span>
          </div>
          <Button icon="pi pi-angle-right" rounded text size="small" severity="secondary" @click="nextPageCallback" :disabled="page === pageCount! - 1" />
          <Button icon="pi pi-angle-double-right" rounded text size="small" severity="secondary" @click="lastPageCallback" :disabled="page === pageCount! - 1" />
        </div>
      </template>
    </Paginator>
  </div>
</template>

<style lang='scss' scoped>
</style>