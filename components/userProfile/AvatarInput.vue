<template>
  <div>
    <input ref="file" type="file" accept="image/*" class="hidden" @change="change" />

    <div class="flex justify-center mt-8">
      <div class="w-24 h-24 relative">
        <img :src="src" alt="Avatar" class="w-full h-full object-cover object-right rounded-full" />
        <div class="h-8 w-8 bg-primary z-50 absolute bottom-0 right-0 rounded-full border-2 border-white text-center">
          <button type="button" class="flex justify-center h-7 w-7" @click="browse()">
            <i class="icon icon-upload text-white text-me pt-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: File,
      default: '',
    },
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

  watch: {
    value(file) {
      if (!file) {
        this.src = this.defaultSrc
        this.$refs.file.value = ''
      } else {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          this.src = e.target.result
        }
      }
    },
  },

  methods: {
    browse() {
      this.$refs.file.click()
    },

    change(e) {
      this.$emit('input', e.target.files[0])
    },
  },
}
</script>

<style></style>
