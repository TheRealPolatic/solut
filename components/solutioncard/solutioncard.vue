<template>
  <div class="flex flex-col mb-4">
    <div class="flex items-center text-sm">
      <div class="w-10 h-10 rounded-full overflow-hidden relative mr-4">
        <img :src="carddata.user.profileImage" alt="" class="absolute w-full h-full top-0 left-0 object-cover" />
      </div>
      <div class="font-semibold">{{ carddata.user.username }}</div>
      <div class="text-gray-300 ml-auto justify-self-end">{{ carddata.timeSince }}</div>
    </div>

    <div class="w-full pb-7/10 bg-black rounded-2xl my-4 flex relative overflow-hidden" @click="openSolution(carddata.id)">
      <img :src="carddata.coverImage" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
      <div class="z-5 absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
      <div class="absolute bottom-0 z-10 p-4 flex item-end w-full">
        <div class="flex-column w-3/4 pr-1">
          <h1 class="text-white text-lg leading-5 font-semibold">{{ carddata.title }}</h1>
          <div class="flex text-gray-400 font-light mt-2 text-sm">
            <div v-for="(category, index) in carddata.allCategories" :key="category.id" class="font-light text-dark-grey text-xs inline">
              <span v-if="index > 0" class="mx-1">•</span>{{ category.title }}
            </div>
          </div>
        </div>

        <div class="w-1/4 flex justify-end items-end">
          <ButtonBookmark :solutionId="carddata.id" />
        </div>
      </div>
    </div>

    <SolutionImpactUsers :solutionData="carddata"></SolutionImpactUsers>
  </div>
</template>

<script>
export default {
  props: {
    carddata: {
      type: Object,
      default() {
        return {
          now: '',
          userData: {
            bookmarks: [],
          },
        }
      },
    },
  },
  methods: {
    openSolution: function (id) {
      //   this.$router.push('/solutions/' + id)
    },
    bookmark: function (id) {
      const currentUser = this.$store.state.user.user

      currentUser.bookmarks = 'nee'

      console.log(currentUser)

      //   const currentUserId = currentUser.id

      //   const bookmarks = currentUser.bookmarks

      //   if (bookmarks.includes(id)) {
      //     const index = bookmarks.indexOf(id)
      //     bookmarks.splice(index, 1)
      //     console.log('zat er al in')
      //   } else {
      //     bookmarks.push(id)
      //   }
      //   console.log(currentUser)

      //   this.$store.dispatch('user/updateUser', { currentUserId, currentUser })
    },
  },
  mutations: {
    updateBookmarks(currentUser) {},
  },
}
</script>
