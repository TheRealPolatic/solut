<template>
  <div class="m-4 flex flex-col">
    <div class="flex items-center text-sm">
      <div class="w-10 h-10 rounded-full overflow-hidden relative mr-4">
        <img src="https://dummyimage.com/50x50" alt="" class="absolute w-full h-full top-0 left-0" />
      </div>
      <div class="font-semibold"></div>
      <div class="text-gray-300 ml-auto justify-self-end">14 min ago</div>
    </div>

    <div class="w-full h-60 bg-black rounded-2xl my-4 flex relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div class="z-5 absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
      <div class="self-end mt-auto z-10 p-4 flex item-end w-full">
        <div class="flex-column w-3/4 pr-1">
          <h1 class="text-white text-lg leading-5 font-semibold">{{ carddata.title }}</h1>
          <div class="flex text-gray-400 font-light mt-2 text-sm">
            <div v-for="condition in carddata.conditions" :key="condition" class="mr-2">
              {{ condition }}
            </div>
          </div>
        </div>

        <div class="w-1/4 flex justify-end items-end">
          <div class="w-12 h-12 rounded-2xl border border-white flex items-center justify-center text-white text-lg">
            <i class="icon icon-bookmark"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <div class="flex">
        <div class="w-6 h-6 bg-black rounded-full border-2 border-white"></div>
        <div class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"></div>
        <div class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"></div>
        <div class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"></div>
        <div class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"></div>
      </div>
      <div class="text-gray-400 text-xs">Impacted <span class="font-semibold text-black">jane.doe</span> and 16k more</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carddata: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  created() {
    this.$store.dispatch('user/fetchUser', this.carddata.userId).then((result) => {
      console.log(result)
    })
  },
}
</script>
