<script lang='ts' setup>
defineProps({
  isExpand: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['isExpand'])
</script>

<template>
  <div class="h-12 leading-12 my-auto flex items-center justify-end gap-2 whitespace-nowrap overflow-hidden space-x-2">
    <UButton
      color="gray"
      variant="ghost"
      size="sm"
      icon="i-line-md:cellphone-twotone"
      square
      :padded="false"
      @click="emit('isExpand', true)"
      v-show="!isExpand"
    >
      <span class="text-base text-gray-600 hidden xs:block">添加好友</span>
    </UButton>
    <UButton
      color="gray"
      variant="ghost"
      size="sm"
      icon="i-line-md:phone-twotone"
      square
      :padded="false"
      @click="emit('isExpand', true)"
      v-show="!isExpand"
    >
      <span class="text-base text-gray-600 hidden xs:block">联系我们</span>
    </UButton>
    <UButton
      class="xs:hidden"
      color="gray"
      variant="ghost"
      size="sm"
      icon="i-line-md:close-to-menu-alt-transition"
      square
      :padded="false"
      @click="emit('isExpand', true)"
      v-show="!isExpand"
    />
    <UButton
      class="xs:hidden"
      color="gray"
      variant="ghost"
      size="sm"
      icon="i-line-md:close-small"
      square
      :padded="false"
      @click="emit('isExpand', false)"
      v-show="isExpand"
    />
  </div>
</template>

<style lang='scss' scoped>
</style>