<template>
  <div class="pt-14">
    <div class="w-full h-16 px-6 fixed top-0 z-50 transition" :class="[textColor(background), 'bg-' + background]">
      <div class="w-full h-full relative flex items-center transition" :class="{ 'justify-center': backbutton }">
        <div
          v-if="backbutton"
          class="absolute left-0 h-10 w-10 flex items-center justify-center border rounded-12 border-opacity-50 transition"
          :class="buttonColor(background)"
          @click="goBack"
        >
          <i class="icon icon-chevron-left"></i>
        </div>
        <h1 class="font-bold" :class="{ 'text-xl': backbutton, 'text-3xl': !backbutton }">{{ title }}</h1>
        <div
          v-if="buttonright"
          class="absolute right-0 h-10 w-10 flex items-center justify-center border rounded-12 border-opacity-70 transition"
          :class="buttonColor(background)"
        >
          <i class="icon" :class="'icon-' + buttonright"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default() {
        return 'white'
      },
    },
    title: {
      type: String,
      default() {
        return ''
      },
    },
    backbutton: {
      type: Boolean,
      default() {
        return false
      },
    },
    buttonright: {
      type: String,
      default() {
        return ''
      },
    },
  },
  methods: {
    textColor(bg) {
      return {
        'text-white': bg !== 'white',
        'text-dark': bg === 'white',
      }
    },
    buttonColor(bg) {
      return {
        'border-white': bg !== 'white',
        'border-dark': bg === 'white',
      }
    },
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
