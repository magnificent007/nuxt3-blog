export default defineEventHandler(async () => {
  const res = await $fetch('http://jsonplaceholder.typicode.com/posts')
  return res
})