<template>
  <div>
    <div class="w-72 mr-4 relative">
      <!-- @click="openSolution(carddata.id) -->
      <img class="w-full relative h-64 rounded-2xl my-4 mr-3" :src="solution.coverImage" />
      <div class="absolute bottom-0">
        <img class="rounded-2xl w-screen" src="@/assets/images/overlay.png" />
      </div>
      <div class="absolute bottom-0 m-4 text-white">
        <div class="font-semibold">{{ solution.title }}</div>
        <div class="font-light text-sm" v-for="category in categories" :key="category.title" :category="category">{{ category.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    ...mapState('solution', ['solutions']),
    ...mapState('category', ['categories']),
  },
  // methods: {
  //   openSolution: function (id) {
  //     this.$router.push('/solutions/' + id)
  //   },
  // },
}
</script>
