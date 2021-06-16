<template>
  <div>
    <div class="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
      <a href="#" class="flex flex-grow items-center justify-center p-2 text-dark-grey">
        <div class="text-center">
          <span class="block h-8 text-3xl leading-8">
            <NuxtLink to="/timeline"><i class="icon icon-home"></i></NuxtLink>
          </span>
        </div>
      </a>

      <a href="#" class="flex flex-grow items-center justify-center p-2 text-dark-grey">
        <div class="text-center">
          <span class="block h-8 text-3xl leading-8">
            <NuxtLink to="/search"><i class="icon icon-search"></i></NuxtLink>
          </span>
        </div>
      </a>
      <a href="#" class="flex flex-grow items-center justify-center p-2 text-dark-grey">
        <div class="text-center">
          <span class="block h-8 text-3xl leading-8">
            <NuxtLink to="/create-solution"><i class="icon icon-add"></i></NuxtLink>
          </span>
        </div>
      </a>
      <a href="#" class="flex flex-grow items-center justify-center p-2 text-dark-grey">
        <div class="text-center">
          <span class="block h-8 text-3xl leading-8">
            <NuxtLink to="/bookmarks"><i class="icon icon-bookmark"></i></NuxtLink>
          </span>
        </div>
      </a>
      <a href="#" class="flex flex-grow items-center justify-center p-2 text-dark-grey">
        <div class="text-center">
          <span class="block h-8 text-3xl leading-8">
            <NuxtLink to="/profile"> <i class="icon icon-user"></i></NuxtLink>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nuxt-link-active {
  color: #00e3a8;
}
</style>
