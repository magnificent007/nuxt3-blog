<script lang='ts' setup>
const emit = defineEmits(['update:page'])

defineProps({
  page: {
    type: Number,
    default: 1
  },
  total: {
    type: Array<any>,
    default: () => []
  },
  pageCount: {
    type: Number,
    default: 5
  }
})
</script>

<template>
  <UPagination 
    :ui="{ wrapper: 'justify-center' }"
    :active-button="{ variant: 'outline', color: 'sky' }"
    :prev-button="{ label: '上一页', color: 'gray' }"
    :next-button="{ trailing: true, label: '下一页', color: 'gray' }"
    :first-button="{ label: '首页', color: 'gray' }"
    :last-button="{ trailing: true, label: '尾页', color: 'gray' }"
    show-first
    show-last
    :modelValue="page"
    @update:modelValue="(e: number) => emit('update:page', e)"
    :page-count="pageCount" 
    :total="total.length" 
    size="xs"
  />
</template>

<style lang='scss' scoped>
</style>