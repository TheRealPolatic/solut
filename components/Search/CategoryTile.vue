<template>
  <div>
    <!-- <div>
    <div class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-light-grey mr-3 w-max">
      <img :src="require(`~/assets/icons/${category.icon}`)" class="h-5 w-5 mx-1" />
      <p class="px-2">{{ category.title }}</p>
    </div>
  </div> -->
    <div
      @click="toggleTile(category)"
      :class="isActive ? 'bg-primary text-white' : 'bg-light-grey'"
      class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium mr-3 w-max"
    >
      <!-- <img :src="require(`~/assets/icons/${category.icon}`)" class="h-5 w-5 mx-1" /> -->
      <div class="rounded-lg flex justify-center items-center">
        <i :class="'text-xl icon icon-' + category.icon"></i>
      </div>
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

<style></style>
