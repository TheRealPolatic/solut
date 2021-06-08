<template>
  <div>
    <ul class="w-full h-12 flex text-darker-grey font-semibold sticky top-0 bg-white">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ 'text-dark': index == selectedIndex }"
        class="h-full w-1/2 flex items-center justify-center transition"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
      <div class="w-1/2 h-1 bg-primary absolute bottom-0 transition transform translate-x-0" :class="{ 'translate-x-1/1': selectedIndex === 1 }"></div>
    </ul>

    <div class="px-6 py-12 bg-grey">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })
    },
  },
}
</script>
