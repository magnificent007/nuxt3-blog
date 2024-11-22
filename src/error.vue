<script lang='ts' setup>
import type { PropType } from 'vue'

type Error = {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data: any
}

const props = defineProps({
  error: {
    type: Object as PropType<Error>,
    required: true
  }
})
console.log(props.error)

function handleError() {
  clearError({ redirect: '/' })
}

function goBack() {
  clearError()
  useRouter().back()
}
</script>

<template>
  <main class="h-screen flex flex-col justify-center items-center">
    <UContainer class="text-center">
      <h1 class="text-lg font-bold">
        {{ error.statusCode  }}
      </h1>
      <p class="text-2xl">
        {{ error.message }}
      </p>
      <div class="flex justify-center gap-2">
        <UButton color="violet" variant="link" @click="handleError">go home</UButton>
        <UButton color="violet" variant="link" @click="goBack">go back</UButton>
      </div>
    </UContainer>
  </main>
</template>