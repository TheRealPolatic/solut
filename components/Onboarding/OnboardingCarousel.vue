<template>
  <div class="flex flex-col justify-evenly h-screen overflow-hidden mx-6">
    <VueSlickCarousel :dots="true" :arrows="true" ref="carousel" class="flex flex-col justify-evenly">
      <!-- slide 1 -->
      <div class="flex flex-col justify-evenly h-full">
        <h1 class="text-dark text-center font-bold text-3xl">
          Join the <br />
          Race to Resilience
        </h1>
        <img class="w-7/8 mx-auto mb-14 mt-8" src="@/assets/illustrations/race-to-resilience.svg" />
        <p class="text-center mt-24">Putting people and nature first in <br />pursuit of a resilient world.</p>
      </div>
      <!-- slide 2 -->
      <div class="flex flex-col justify-evenly h-full">
        <h1 class="text-dark text-center font-bold text-3xl">Solutions</h1>
        <img class="w-7/8 mx-auto mb-14 mt-14" src="@/assets/illustrations/solution-illustration.svg" />
        <p class="text-center mt-24">Becoming more resilient to <br />climate change as a community <br />by sharing solutions.</p>
      </div>
      <!-- slide 3 -->
      <div class="flex flex-col justify-evenly h-full" ref="lastslide">
        <h1 class="text-dark text-center font-bold text-3xl">Track impact</h1>
        <img class="w-7/8 mx-auto mb-32 mt-16" src="@/assets/illustrations/impact-illustration.svg" />
        <p class="text-center">Track the impact of all solutions. <br />We strive to impact 100.000 people <br />all around the world.</p>
      </div>
    </VueSlickCarousel>

    <button v-if="index != 2" class="mx-auto rounded-full bg-primary h-12 w-12 flex justify-center items-center" @click="showNext">
      <i class="icon icon-chevron-right text-white flex items-center"></i>
    </button>

    <div @click="$router.push('/register')" v-else class="rounded-lg w-full h-14 flex items-center justify-center my-4 cursor-pointer bg-primary text-white">
      Let's start!
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  methods: {
    showNext() {
      this.$refs.carousel.next()
      this.index++
    },
  },
  data() {
    return {
      index: 0,
      settings: {
        arrows: true,
        dots: true,
        // dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
}
</script>

<style>
.slick-dots {
  background-color: transparent; /* bg color of container */
  bottom: 100px;
}
.slick-dots button:before {
  color: #00e3a8 !important; /* color of dots */
  opacity: 0.25; /* opacity of dots */
  background-color: transparent; /* bg color of each "button"
                                  * (blends with the one set in .slick-dots
                                  * if opacity is not 1) */
  content: '•';
  font-size: 10px !important;
}
</style>
