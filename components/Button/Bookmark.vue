<template>
  <div
    v-on:click.stop="toggleBookmark(solutionId)"
    class="h-10 w-10 flex items-center justify-center border rounded-12 border-opacity-70 bg-opacity-70 transition"
    :class="setButtonColor(background)"
  >
    <i class="icon" :class="activeState ? 'icon-bookmark-filled' : 'icon-bookmark'"></i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    solutionId: {
      type: String,
      default() {
        return ''
      },
    },
    background: {
      type: String,
      default() {
        return 'dark'
      },
    },
  },
  data() {
    return {
      activeState: false,
    }
  },
  computed: {
    ...mapState('user', ['user']),
  },
  created() {
    if (this.$store.state.user.authenticated) {
      this.setActiveState()
    }
  },
  methods: {
    setButtonColor(bg) {
      let colorStyle = []

      if (bg === 'white') {
        if (this.activeState) {
          colorStyle = ['border-dark', 'bg-dark', 'text-white']
        } else {
          colorStyle = ['border-dark', 'bg-none', 'text-dark']
        }
      } else {
        if (this.activeState) {
          colorStyle = ['border-white', 'bg-white', 'text-dark']
        } else {
          colorStyle = ['border-white', 'bg-none', 'text-white']
        }
      }
      return colorStyle
    },
    setActiveState() {
      if (this.user.bookmarks) {
        if (Array.isArray(this.user.bookmarks)) {
          if (this.user.bookmarks.includes(this.solutionId)) {
            this.activeState = true
          } else {
            this.activeState = false
          }
        }
      }
    },
    toggleBookmark() {
      let newBookmarks = []
      const bookmarks = this.user.bookmarks
      if (bookmarks.includes(this.solutionId)) {
        const index = bookmarks.indexOf(this.solutionId)
        for (let i = 0; i < bookmarks.length; i++) {
          if (i !== index) {
            newBookmarks.push(bookmarks[i])
          }
        }
        this.activeState = false
      } else {
        for (let i = 0; i <= bookmarks.length; i++) {
          if (i === bookmarks.length) {
            newBookmarks[i] = this.solutionId
          } else {
            newBookmarks[i] = bookmarks[i]
          }
        }
        this.activeState = true
      }

      const user = { bookmarks: newBookmarks }
      user.bookmarks = newBookmarks

      const updateValues = { userId: this.user.id, data: user }
      this.$store.dispatch('user/updateUser', updateValues)
      this.$store.dispatch('user/fetchCurrentUser', this.user.id)
    },
  },
}
</script>

<style></style>
