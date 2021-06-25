<template>
  <div @click="goToSolution(solution.id)" class="relative w-full pb-3/4 bg-red rounded-16 overflow-hidden mb-4">
    <div class="absolute h-full w-full p-4 z-10">
      <div class="relative flex h-full w-full">
        <div v-if="setting" class="absolute top-0 right-0">
          <ButtonBookmark v-if="setting === 'bookmark'" :solutionId="solution.id" />
          <div
            v-else-if="setting === 'edit'"
            v-on:click.stop="goToEdit(solution.id)"
            class="absolute right-0 h-10 w-10 flex items-center justify-center border rounded-12 border-opacity-70 transition"
            :class="setButtonColor(background)"
          >
            <i class="icon" :class="'icon-edit'"></i>
          </div>
        </div>
        <div class="absolute bottom-0 text-white">
          <div class="font-semibold">{{ solution.title }}</div>
          <div v-for="(category, index) in solution.categoryData" :key="category.id" class="font-light text-dark-grey text-xs inline">
            <span v-if="index > 0" class="mx-1">•</span>{{ category.title }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <img :src="solution.coverImage" :alt="'Cover image: ' + solution.title" class="absolute top-0 object-cover h-full w-full text-center" />
      <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
    setting: {
      type: String,
      default() {
        return ''
      },
    },
    activeState: {
      type: Boolean,
      default() {
        return false
      },
    },
    background: {
      type: String,
      default() {
        return 'dark'
      },
    },
  },
  methods: {
    setButtonColor(bg) {
      let colorStyle = []

      if (bg === 'white') {
        if (this.activeState) {
          colorStyle = ['border-dark', 'bg-dark', 'text-white']
        } else {
          colorStyle = ['border-dark', 'bg-none', 'text-dark']
        }
      } else {
        if (this.activeState) {
          colorStyle = ['border-white', 'bg-white', 'text-dark']
        } else {
          colorStyle = ['border-white', 'bg-none', 'text-white']
        }
      }
      return colorStyle
    },
    goToSolution(id) {
      this.$router.push('/solutions/' + id)
    },
    goToEdit(id) {
      this.$router.push('/edit/' + id)
    },
  },
}
</script>
