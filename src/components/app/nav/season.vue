<script lang='ts' setup>
const dayjs = useDayjs()
const weather = {
  spring: '/images/spring.jpg',
  summer: '/images/summer.jpg',
  autumn: '/images/autumn.jpg',
  winter: '/images/winter.jpg',
}

const season = computed(() => {
  const now = dayjs()
  const month = now.month()
  if (month >= 3 && month <= 5) {
    return weather.spring
  } else if (month >= 6 && month <= 8) {
    return weather.summer
  } else if (month >= 9 && month <= 11) {
    return weather.autumn
  } else {
    return weather.winter
  }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <Image class="rounded overflow-hidden" :src="season" alt="weather" width="300" />
    <ClientOnly fallback-tag="div">
      <time class="text-sm text-right text-zinc-500 font-medium px-4" :datetime="$dayjs().utc().toString()">
        <em>{{ dayjs().format('YYYY-MM-DD ddd') }}</em>
      </time>
      <template #fallback>
        <em class="text-sm text-right text-zinc-500 font-medium px-4">Loading...</em>
      </template>
    </ClientOnly>
  </div>
</template>

<style lang='scss' scoped>
</style>