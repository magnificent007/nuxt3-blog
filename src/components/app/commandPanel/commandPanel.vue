<script lang="ts" setup>
const router = useRouter()
const articleStore = useArticleStore()
const visible = ref<boolean>(false)
const inputValue = ref<string>('')
const results = ref<any[]>([])

watch(() => inputValue.value, async inputValue => {
  results.value = await onSearch(inputValue)
})

function updateDialogVisible (v: boolean) {
  visible.value = v
  inputValue.value = ''
  results.value = []
}

async function onSearch (q: string) {
  if (!q.length) return []
  const results = await articleStore.queryArticlesByCondition(q)
  return results.map((item: Record<string, any>) => ({
    id: item.id,
    label: item.title,
    click: async () => {
      item?.id && await router.push(item.id)
    },
    to: item.id
  }))
}

function onSelect(option: any) {
  if (option.click) {
    option.click()
  } else if (option.to) {
    router.push(option.to)
  } else if (option.href) {
    window.open(option.href, '_blank')
  }
  visible.value = false
  inputValue.value = ''
  results.value = []
}

defineExpose({
  visible
})
</script>

<template>
  <Dialog 
    :visible="visible" 
    @update:visible="updateDialogVisible"
    :closable="false" 
    :showHeader="false" 
    :style="{ width: '40vw' }" 
    :breakpoints="{ '1024px': '65vw', '480px': '90vw' }"
    modal 
    dismissableMask
  >
    <div class="pt-6 flex flex-nowrap flex-col justify-center">
      <FloatLabel variant="on">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText 
            class=" focus:outline-none"
            type="text" 
            size="small" 
            severity="secondary"
            fluid
            closable
            maxlength="10"
            v-model="inputValue"
          />
          <InputIcon class="pi pi-times cursor-pointer" v-show="inputValue.length" @click="inputValue = ''" />
        </IconField>
        <label>查找文档</label>
      </FloatLabel>
      <Divider />
      <div class="w-full">
        <template v-if="results.length">
          <div 
            class="p-2 flex flex-nowrap justify-between items-center gap-8 overflow-hidden truncate cursor-pointer rounded active:hover:bg-slate-200 active:bg-opacity-20 lg:hover:bg-slate-200 lg:hover:bg-opacity-20"
            v-for="{ id, label, click, to } in results" 
            :key="id"
            @click="onSelect({ id, label, click, to })"
          >
            <div>
              <i class="mr-2" />
              <span>
                {{ label }}
              </span>
            </div>
            <div class="text-sm text-zinc-400">{{ to }}</div>
          </div>
        </template>
        <template v-else>
          <div class="px-2 py-4 flex flex-nowrap justify-center items-center rounded">
            <i class="pi pi-file mr-2" />
            <span>无内容</span>
          </div>
        </template>
      </div>
    </div>
  </Dialog>
</template>

<style lang="scss" scoped>
</style>
