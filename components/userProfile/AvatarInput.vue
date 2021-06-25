<template>
  <!-- <div>
    <input ref="file" type="file" accept="image/*" class="hidden" @change="change" />

    <div class="flex justify-center mt-8">
      <div class="w-24 h-24 relative">
        <img :src="src" alt="Avatar" class="w-full h-full object-cover object-center rounded-full bg-black" />
        <div class="h-8 w-8 bg-primary z-50 absolute bottom-0 right-0 rounded-full border-2 border-white text-center">
          <button type="button" class="flex justify-center h-7 w-7" @click="browse()">
            <i class="icon icon-upload text-white text-me pt-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <div class="flex justify-center">
    <div class="flex justify-center items-center relative mt-2">
      <div class="relative" v-if="!userinfo.profileImage.length">
        <file-upload
          ref="upload"
          v-model="userinfo.profileImage"
          @input-filter="inputFilter"
          accept="image/*"
          :size="1024 * 1024"
          class="preview rounded-full h-24 w-24 bg-light-grey"
        >
        </file-upload>
        <div class="h-8 w-8 absolute bottom-0 right-0 bg-primary rounded-full flex justify-center items-center border-2 border-white">
          <i class="flex text-xs icon icon-plus text-white"></i>
        </div>
      </div>

      <div class="relative" v-else>
        <file-upload
          ref="upload"
          v-model="userinfo.profileImage"
          @input-filter="inputFilter"
          accept="image/*"
          :size="1024 * 1024"
          class="preview rounded-full h-24 w-24"
          :style="{ 'background-image': `url(${userinfo.profileImage[0].blob})` }"
        >
        </file-upload>
        <div class="h-8 w-8 absolute bottom-0 right-0 bg-primary rounded-full flex justify-center items-center border-2 border-white">
          <i class="flex text-xs icon icon-edit text-white"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userinfo: {},
    // value: {
    //   type: File,
    //   default: '',
    // },
    defaultSrc: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      src: this.defaultSrc,
    }
  },

  // watch: {
  //   value(file) {
  //     if (!file) {
  //       this.src = this.defaultSrc
  //       this.$refs.file.value = ''
  //     } else {
  //       const reader = new FileReader()
  //       reader.readAsDataURL(file)
  //       reader.onload = (e) => {
  //         this.src = e.target.result
  //       }
  //     }
  //   },
  // },

  methods: {
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
  },
}
</script>

<style></style>
