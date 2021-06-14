<template>
  <div class="mx-6">
    <h1 class="my-6 text-dark text-center font-bold text-xl">Add solution</h1>

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
        <label class="font-semibold text-sm">Title</label>
        <p :class="form.title.length == titleMax ? 'text-red-500' : 'text-dark opacity-40'" class="text-sm mt-2">{{ `${form.title.length} / ${titleMax}` }}</p>
      </div>
      <input
        class="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose focus:outline-none"
        type="text"
        placeholder="Title"
        v-model="form.title"
        :maxlength="titleMax"
      />
    </div>
    <!-- Introduction textarea -->
    <div class="mt-6">
      <div class="flex justify-between">
        <label class="font-semibold text-sm">Introduction</label>
        <p :class="form.introduction.length == introductionMax ? 'text-red-500' : 'text-dark opacity-40'" class="text-sm">
          {{ `${form.introduction.length} / ${introductionMax}` }}
        </p>
      </div>

      <textarea
        class="mt-2 border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose h-56 focus:outline-none"
        type="text"
        placeholder="Type a quick introduction about the solution"
        v-model="form.introduction"
        :maxlength="introductionMax"
      />
    </div>

    <!-- Category slider -->
    <div class="mt-6">
      <CreateCategorySlider @toggle-category="toggleCategory" />
    </div>

    <!-- Cover image uploadfield -->
    <div class="my-4">
      <label class="font-semibold text-sm">Cover image</label>
      <div class="flex justify-center items-center relative mt-2">
        <div @click="resetImg" class="h-6 w-6 rounded-full absolute right-2 top-2 bg-white flex justify-center items-center">
          <img src="@/assets/icons/x.svg" />
        </div>
        <file-upload
          ref="upload"
          v-model="images"
          v-if="images.length == 0"
          @input-filter="inputFilter"
          accept="image/*"
          :size="1024 * 1024"
          class="rounded-xl bg-light-grey h-16 w-screen"
        >
          <div class="flex my-5 justify-center">
            <img class="opacity-50 mr-4" src="@/assets/icons/upload-dark.svg" />
            <p class="opacity-50">Upload image</p>
          </div>
        </file-upload>
      </div>

      <!--  Preview uploaded image -->
      <div class="w-full" v-for="image in images" :key="image.blob">
        <div v-if="image.blob" class="preview h-40 rounded-xl overflow-hidden" :style="{ 'background-image': `url(${image.blob})` }"></div>
      </div>
    </div>

    <!-- Next step button -->
    <div
      @click="addSolution"
      :class="form.introduction && form.title ? 'bg-primary text-white ' : 'bg-primary text-white opacity-40'"
      class="rounded-lg w-full h-14 flex items-center justify-center mb-8 cursor-pointer"
    >
      <p>Next step</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      form: {
        title: '',
        introduction: '',
        categories: [],
      },
      images: [],
      introductionMax: 250,
      titleMax: 40,
    }
  },
  methods: {
    addSolution() {
      // Check for formvalidation

      const solutionData = {
        title: this.form.title,
        introduction: this.form.introduction,
        categories: [1, 3, 4, 5, 6],
        image: this.images[0],
      }
      //   console.log(solutionData)
      this.$store.dispatch('solution/createSolution', solutionData)

      // Send success
    },
    toggleCategory(e) {
      this.form.categories.push(e)
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
      this.images = []
    },
  },
  created() {
    this.$store.dispatch('category/fetchCategories')
  },
  //   computed: {
  //     message: {
  //       get() {
  //         return this.$store.state.obj.message
  //       },
  //       set(value) {
  //         this.$store.commit('updateMessage', value)
  //       },
  //     },
  //   },
}
</script>

<style scoped>
.preview {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
