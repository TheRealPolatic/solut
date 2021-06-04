<template>
  <div>
    <div class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-light-grey mr-3 w-max">
      <img :src="require(`~/assets/icons/${category.icon}`)" class="h-5 w-5 mx-1" />
      <p class="px-2">{{ category.title }}</p>
    </div>
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
