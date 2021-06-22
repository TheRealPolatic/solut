<template>
  <div>
    <div
      @click="toggleTile(category)"
      :class="active ? 'bg-primary text-white' : 'bg-light-grey'"
      class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium mr-3 w-max"
    >
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
    selectedCategory: {
      type: String,
      default() {
        return ''
      },
    },
  },
  computed: {
    active() {
      return this.selectedCategory === this.category.id
    },
  },
  methods: {
    toggleTile(category) {
      this.$emit('toggle-category', category)
    },
  },
}
</script>

<style></style>
