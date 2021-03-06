<template>
  <div class="mx-6">
    <h1 v-if="!solution.userId" class="my-6 text-dark text-center font-bold text-xl">Add solution</h1>
    <h1 v-else class="my-6 text-dark text-center font-bold text-xl">Update solution</h1>

    <!-- Progress indicator -->
    <div class="flex justify-between items-center">
      <div class="flex justify-center items-center">
        <div class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 font-bold text-sm">1</div>
        <div class="font-bold mr-3">General</div>
      </div>
      <CreateDottedLine color="#262626" />
      <div class="flex justify-center items-center">
        <div class="w-6 h-6 rounded-full flex items-center justify-center border-2 text-dark border-dark font-bold text-sm">2</div>
      </div>
      <CreateDottedLine color="#262626" />
      <div class="flex justify-center items-center">
        <div class="w-6 h-6 rounded-full text-dark flex items-center justify-center border-2 border-dark font-bold text-sm">3</div>
      </div>
    </div>

    <!-- Title input -->
    <div class="mt-6">
      <div class="flex justify-between">
        <label class="font-semibold text-sm">Title *</label>
        <p :class="solution.title.length == titleMax ? 'text-red-500' : 'text-dark opacity-40'" class="text-sm mt-2">
          {{ `${solution.title.length} / ${titleMax}` }}
        </p>
      </div>
      <input
        class="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose focus:outline-none"
        type="text"
        placeholder="Title"
        v-model="solution.title"
        :maxlength="titleMax"
      />
    </div>
    <!-- Introduction textarea -->
    <div class="mt-6">
      <div class="flex justify-between">
        <label class="font-semibold text-sm">Introduction *</label>
        <p :class="solution.introduction.length == introductionMax ? 'text-red-500' : 'text-dark opacity-40'" class="text-sm">
          {{ `${solution.introduction.length} / ${introductionMax}` }}
        </p>
      </div>

      <textarea
        class="mt-2 border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose h-56 focus:outline-none"
        type="text"
        placeholder="Type a quick introduction about the solution"
        v-model="solution.introduction"
        :maxlength="introductionMax"
      />
    </div>

    <!-- Category slider -->
    <div class="mt-6">
      <CreateCategorySlider @toggle-category="toggleCategory" :solution="solution" />
    </div>

    <!-- Cover image uploadfield -->
    <div class="my-4">
      <label class="font-semibold text-sm">Cover image *</label>
      <div class="flex justify-center items-center relative mt-2">
        <div @click="resetImg" class="h-6 w-6 rounded-full absolute right-2 top-2 bg-white flex justify-center items-center">
          <i class="icon icon-close"></i>
        </div>

        <file-upload
          ref="upload"
          v-model="solution.images"
          v-if="solution.images.length == 0 && !solution.coverImage"
          @input-filter="inputFilter"
          accept="image/*"
          :size="1024 * 1024"
          class="rounded-xl bg-light-grey h-16 w-screen"
        >
          <div class="flex my-5 justify-center">
            <i class="icon icon-upload mr-4 opacity-50 text-dark flex items-center"></i>
            <p class="opacity-50">Upload image</p>
          </div>
        </file-upload>
      </div>

      <div v-if="!solution.coverImage">
        <!--  Preview uploaded image -->
        <div class="w-full" v-for="image in solution.images" :key="image.blob">
          <div v-if="image.blob" class="preview h-40 rounded-xl overflow-hidden" :style="{ 'background-image': `url(${image.blob})` }"></div>
        </div>
      </div>
      <div v-if="solution.coverImage" class="preview h-40 rounded-xl overflow-hidden" :style="{ 'background-image': `url(${solution.coverImage})` }"></div>
    </div>

    <!-- Next step button -->
    <div
      @click=";(solution.introduction && solution.title && solution.images.length) || solution.coverImage ? addBasicInfo() : {}"
      :class="
        (solution.introduction && solution.title && solution.images.length) || solution.coverImage
          ? 'bg-primary text-white '
          : 'bg-primary text-white opacity-40'
      "
      class="rounded-lg w-full h-14 flex items-center justify-center mb-8 cursor-pointer"
    >
      <p>Next step</p>
    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength, between } from 'vuelidate/lib/validators'

export default {
  props: {
    solution: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      //   solution: {
      //     title: '',
      //     introduction: '',
      //     categories: [],
      //     images: [],
      //   },
      introductionMax: 250,
      titleMax: 40,
    }
  },

  methods: {
    addBasicInfo() {
      const solutionData = {
        title: this.solution.title,
        introduction: this.solution.introduction,
        categories: this.solution.categories,
        image: this.solution.images[0],
      }
      this.$emit('addBasicInfo', solutionData)
    },
    toggleCategory(e) {
      // Toggle category
      var i = this.solution.categories.indexOf(e.id)
      if (i === -1) this.solution.categories.push(e.id)
      else this.solution.categories.splice(i, 1)
    },

    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent()
        }
      }

      // Create a blob field
      newFile.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file)
      }
    },
    resetImg() {
      this.solution.coverImage = ''
      this.solution.images = []
    },
  },
  created() {
    this.$store.dispatch('category/fetchCategories')
  },
}
</script>

<style scoped>
.preview {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
