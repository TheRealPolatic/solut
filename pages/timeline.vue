<template>
  <div class="p-6">
    <GeneralHeader title="Solutions" :class="'px-0'"></GeneralHeader>
    <impactgoal v-on:click.native="open" :impactData="impact"></impactgoal>
    <div class="flex mb-4 mt-4">
      <pill v-for="pill in pills" :key="pill.text" :pill="pill" :class="{ 'bg-primary text-white': pill.active }" />
    </div>
    <solutioncard v-for="card in allSolutions" :key="card.id" :carddata="card" />

    <!-- Add new step modal -->
    <vue-bottom-sheet ref="impactgoal" max-height="100%">
      <div class="sheet-wrapper mx-4">
        <div class="flex flex-col">
          <div class="font-bold text-lg text-center relative overflow-visible pt-2 pb-2">
            Making Impact
            <div class="absolute right-0 top-0">
              <ButtonBackButton icon="icon-close" v-on:click.native="close"></ButtonBackButton>
            </div>
          </div>

          <div class="mt-7">
            <b>Solut</b>
            <p>Solut, also called climate in Latin, is an app aimed at sharing solutions to better resist today's extreme weather conditions.</p>

            <br />

            <p>
              People can share their own developed solutions on the platform, which others can work out in their own environment. Every time you have applied a
              solution in your own environment, you can indicate on how many people the solution has had an impact. This could be for yourself, a family or even
              a whole village.
            </p>

            <br />

            <b>Race to resilience</b>
            <p>
              The app is linked to the race to resilience. This is a global campaign set up by the UN, in which Solut participates. It seeks to take the step to
              make humans more resilient to climate extremes.
            </p>

            <div class="mt-7 flex space-between items-center">
              <img src="@/assets/illustrations/logo.svg" alt="" class="w-16 h-16" />
              <div class="ml-7 font-bold">Our ultimate goal is to make an impact on <span class="text-primary">100.000 people.</span></div>
            </div>
          </div>
        </div>
      </div>
    </vue-bottom-sheet>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  middleware: 'private',
  async asyncData({ params, store }) {
    // Get total impact counter and set goals
    let impact = 0

    // Fetch all solutions
    await store.dispatch('solution/fetchSolutions')

    // Set categories in state
    await store.dispatch('category/fetchCategories')
    const allCategories = store.state.category.categories

    // Catch all solutions in a variable
    const allSolutions = store.state.solution.solutions

    // Collect current user data
    const currentUser = store.state.user.user

    // Loop through all the solutions and add the user to 'carddata'
    for (let i = 0; i < allSolutions.length; i += 1) {
      const user = await store.dispatch('user/fetchUser', allSolutions[i].userId)
      allSolutions[i].user = user

      //   Check if the solution has been bookmarked
      if (currentUser.bookmarks.includes(allSolutions[i].id)) {
        allSolutions[i].bookmarked = true
      }

      // Find the 5 latest users who got impacted
      const impactedUsersStart = allSolutions[i].impactUsers.length - 5

      if (impactedUsersStart < 0) {
        impactedUsersStart = 0
      }

      const impactedUsersLength = allSolutions[i].impactUsers.length
      impact = impact + impactedUsersLength

      // Collect the last 5 users that have been impacted
      const impactedUsers = await allSolutions[i].impactUsers.slice(impactedUsersStart, impactedUsersLength)
      const lastFiveUsers = []

      for (let x = 0; x < impactedUsers.length; x += 1) {
        const user = await store.dispatch('user/fetchUser', impactedUsers[x].userId)
        lastFiveUsers.push(user)
      }

      // Push the 5 users to carddata
      allSolutions[i].impactUserArr = lastFiveUsers

      // Calculate timestamp
      const timestamp = allSolutions[i].createdAt
      const date = moment(timestamp).format()
      const now = moment(date, 'YYYYMMDD HHmmss').fromNow()

      allSolutions[i].timeSince = now

      // Collect categories
      const categoriesData = []
      if (allSolutions[i].categories) {
        for (let x = 0; x < allSolutions[i].categories.length; x++) {
          for (let j = 0; j < allCategories.length; j++) {
            if (allSolutions[i].categories[x] === allCategories[j].id) {
              categoriesData.push(allCategories[j])
            }
          }
        }
      }

      // Push category data to carddata
      allSolutions[i].allCategories = categoriesData
    }

    return { allSolutions, impact }
  },
  data() {
    return {
      allSolutions: [],
      impact: 0,
      pills: [
        {
          label: 'Trending',
          active: true,
          icon: 'trending',
        },
        {
          label: 'New',
          icon: 'new',
          onclick: 'new',
        },
        {
          label: 'Top',
          icon: 'top',
        },
      ],
    }
  },
  methods: {
    open() {
      this.$refs.impactgoal.open()
    },
    close() {
      this.$refs.impactgoal.close()
    },
  },
}
</script>

<style></style>
