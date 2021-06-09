<template>
  <div class="mx-6">
    <h1 class="my-6 text-dark text-center font-bold text-xl">Add solution</h1>

    <div class="progress-steps flex">
      <div class="step-one flex">
        <div class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3">1</div>
        <div class="font-bold mr-3">General</div>
      </div>
      <div class="step-two flex">
        <div class="w-6 h-6 rounded-full bg-transparant text-dark flex items-center justify-center mr-3 border-2 border-dark font-bold">2</div>
      </div>
      <div class="step-three flex">
        <div class="w-6 h-6 rounded-full bg-transparant text-dark flex items-center justify-center mr-3 border-2 border-dark font-bold">3</div>
      </div>
    </div>
    <div class="mt-6">
      <div class="flex justify-between">
        <label class="font-semibold text-sm">Title</label>
        <p class="text-sm text-dark opacity-40">{{ `${form.title.length} / ${titleMax}` }}</p>
      </div>
      <input
        class="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose focus:outline-none"
        type="text"
        placeholder="Title"
        v-model="form.title"
        :maxlength="titleMax"
      />
    </div>
    <div class="mt-6">
      <div class="flex justify-between">
        <label class="font-semibold text-sm">Introduction</label>
        <p class="text-sm text-dark opacity-40">{{ `${form.introduction.length} / ${introductionMax}` }}</p>
      </div>

      <textarea
        class="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-loose h-56 focus:outline-none"
        type="text"
        placeholder="Type a quick introduction about the solution"
        v-model="form.introduction"
        :maxlength="introductionMax"
      />
    </div>

    <div class="category-slider mt-6">
      <CreateCategorySlider />
    </div>

    <div class="my-4">
      <label class="font-semibold text-sm">Cover image</label>
      <div class="flex justify-center items-center relative">
        <div @click="resetImg" class="delete h-6 w-6 rounded-full absolute right-2 top-2 bg-white flex justify-center items-center">
          <img src="@/assets/icons/x.svg" />
        </div>
        <file-upload
          ref="upload"
          v-model="images"
          v-if="images.length == 0"
          post-action="/post.method"
          @input-file="inputFile"
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

      <div class="w-full" v-for="image in images" :key="image.blob">
        <div v-if="image.blob" class="preview h-40 rounded-xl overflow-hidden" :style="{ 'background-image': `url(${image.blob})` }"></div>
      </div>
    </div>

    <!-- <button v-show="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true" type="button">Start upload</button> -->

    <div class="rounded-lg bg-primary text-white w-full h-14 flex items-center justify-center mb-8">
      <p>Next step</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      title: '',
      introduction: '',
      categories: [],
      coverImg: '',
    })
    return {
      form: Object.assign({}, defaultForm),
      images: [],
      item: {
        image: null,
        imageUrl: null,
      },
      introductionMax: 250,
      titleMax: 40,
    }
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0]
      //   this.image = file
      this.image = URL.createObjectURL(file)
    },
    selectFile() {
      let fileInputElement = this.$refs.file
      fileInputElement.click()
    },
    inputFile(newFile, oldFile) {
      if (newFile && oldFile && !newFile.active && oldFile.active) {
        // Get response data
        console.log('response', newFile.response)
        if (newFile.xhr) {
          //  Get the response status code
          console.log('status', newFile.xhr.status)
        }
      }
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
}
</script>

<style scoped>
.preview {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
