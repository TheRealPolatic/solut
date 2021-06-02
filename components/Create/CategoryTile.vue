<template>
  <div class="mr-4 flex flex-col items-center">
    <div class="w-12 h-12 bg-light-grey rounded-lg flex justify-center items-center">
      <img :src="require(`~/assets/icons/${category.icon}`)" class="h-5 w-5" />
    </div>
    <p class="font-medum text-xs text-center mt-2">{{ category.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style></style>
