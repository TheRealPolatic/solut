<template>
  <div @click="toggleTile(category)" class="mr-4 flex flex-col items-center cursor-pointer">
    <div :class="isActive ? 'bg-primary text-white' : 'bg-light-grey'" class="w-12 h-12 rounded-lg flex justify-center items-center">
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
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleTile(category) {
      this.$emit('toggle-category', category)
      this.isActive = !this.isActive
    },
  },
}
</script>
