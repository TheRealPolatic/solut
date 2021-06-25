<template>
  <div class="pb-16">
    <div class="bg-white fixed z-50 bottom-0 w-full filter drop-shadow-2xl flex justify-between items-center px-6 py-2">
      <a v-for="item in navItems" :key="item.link" href="#" class="text-dark-grey p-4">
        <div class="text-center">
          <span class="block text-2xl">
            <NuxtLink :to="'/' + item.link">
              <i class="icon" :class="'icon-' + item.icon"></i>
              <p class="text-white leading-0 mb-1">.</p>
            </NuxtLink>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { link: 'timeline', icon: 'home' },
        { link: 'search', icon: 'search' },
        { link: 'create-solution', icon: 'add ' },
        { link: 'bookmarks', icon: 'bookmark' },
        { link: 'profile', icon: 'user' },
      ],
    }
  },
}
</script>

<style scoped>
.nuxt-link-active {
  color: #00e3a8;
}

.leading-0 {
  line-height: 0px;
}

.nuxt-link-active .leading-0 {
  color: #00e3a8 !important;
}
</style>
