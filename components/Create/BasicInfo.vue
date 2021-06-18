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
    <div class="mt-6 form-group" :class="{ 'form-group--error': $v.form.title.$error }">
      <div class="flex justify-between">
        <label class="font-semibold text-sm">Title *</label>
        <p :class="form.title.length == titleMax ? 'text-red-500' : 'text-dark opacity-40'" class="text-sm mt-2">{{ `${form.title.length} / ${titleMax}` }}</p>
      </div>
      <input
        class="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose focus:outline-none"
        type="text"
        placeholder="Title"
        v-model="$v.form.title.$model"
        :maxlength="titleMax"
      />
    </div>
    <!-- Introduction textarea -->
    <div class="mt-6">
      <div class="flex justify-between">
        <label class="font-semibold text-sm">Introduction *</label>
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
      <label class="font-semibold text-sm">Cover image *</label>
      <div class="flex justify-center items-center relative mt-2">
        <div @click="resetImg" class="h-6 w-6 rounded-full absolute right-2 top-2 bg-white flex justify-center items-center">
          <i class="icon icon-close"></i>
        </div>
        <file-upload
          ref="upload"
          v-model="form.images"
          v-if="form.images.length == 0"
          @input-filter="inputFilter"
          accept="image/*"
          :size="1024 * 1024"
          class="rounded-xl bg-light-grey h-16 w-screen"
        >
          <div class="flex my-5 justify-center">
            <i class="icon icon-upload mr-4 opacity-50 text-dark"></i>
            <p class="opacity-50">Upload image</p>
          </div>
        </file-upload>
      </div>

      <!--  Preview uploaded image -->
      <div class="w-full" v-for="image in form.images" :key="image.blob">
        <div v-if="image.blob" class="preview h-40 rounded-xl overflow-hidden" :style="{ 'background-image': `url(${image.blob})` }"></div>
      </div>
    </div>

    <!-- Next step button -->
    <div
      @click="form.introduction && form.title && form.images.length ? addBasicInfo() : {}"
      :class="form.introduction && form.title && form.images.length ? 'bg-primary text-white ' : 'bg-primary text-white opacity-40'"
      class="rounded-lg w-full h-14 flex items-center justify-center mb-8 cursor-pointer"
    >
      <p>Next step</p>
    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        title: '',
        introduction: '',
        categories: [],
        images: [],
      },
      introductionMax: 250,
      titleMax: 40,
    }
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(4),
      },
      introduction: {
        between: between(20, 30),
      },
    },
  },
  methods: {
    addBasicInfo() {
      const solutionData = {
        title: this.form.title,
        introduction: this.form.introduction,
        categories: this.form.categories,
        image: this.form.images[0],
      }
      this.$emit('addBasicInfo', solutionData)
    },
    toggleCategory(e) {
      // Toggle category
      var i = this.form.categories.indexOf(e.id)
      if (i === -1) this.form.categories.push(e.id)
      else this.form.categories.splice(i, 1)
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
      this.form.images = []
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
