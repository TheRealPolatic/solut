<template>
  <div class="flex flex-col justify-evenly h-screen overflow-hidden">
    <VueSlickCarousel :arrows="true" :dots="true" ref="carousel" class="flex flex-col justify-evenly">
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
        <img class="w-7/8 mx-auto mb-14 mt-8" src="@/assets/illustrations/solution-illustration.svg" />
        <p class="text-center mt-24">Becoming more resilient to <br />climate change as a community <br />by sharing solutions.</p>
      </div>
      <!-- slide 3 -->
      <div class="flex flex-col justify-evenly h-full">
        <h1 class="text-dark text-center font-bold text-3xl">Track impact</h1>
        <img class="w-7/8 mx-auto mb-14 mt-8" src="@/assets/illustrations/impact-illustration.svg" />
        <p class="text-center mt-24">Track the impact of all solutions. <br />We strive to impact 100.000 people <br />all around the world.</p>
      </div>
    </VueSlickCarousel>

    <button class="mx-auto rounded-3xl bg-primary h-12 w-12 flex justify-center items-center" @click="showNext">
      <img class="" src="@/assets/icons/next-arrow.svg" alt="" />
    </button>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
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
