<template>
  <div>
      
    <div class="bg-white absolute bottom-0 w-full filter drop-shadow-2xl flex">
      <a href="#" class="flex flex-grow items-center justify-center p-4 text-dark-grey focus:none">
        <div class="text-center">
          <span class="block text-2xl">
            <NuxtLink to="/timeline">
                <i class="icon icon-home"></i>
                <p class="text-white leading-0 mb-1">.</p>
            </NuxtLink>
          </span>
      
        </div>
      </a>

      <a href="#" class="flex flex-grow items-center justify-center p-4 text-dark-grey">
        <div class="text-center">
          <span class="block text-2xl">
            <NuxtLink to="/search">
                <i class="icon icon-search"></i>
                <p class="text-white leading-0 mb-1">.</p>
            </NuxtLink>
          </span>
        </div>
      </a>
      <a href="#" class="flex flex-grow items-center justify-center p-4 text-dark-grey">
        <div class="text-center">
          <span class="block text-2xl">
            <NuxtLink to="/create-solution">
                <i class="icon icon-add"></i>
                <p class="text-white leading-0 mb-1">.</p>
            </NuxtLink>
          </span>
        </div>
      </a>
      <a href="#" class="flex flex-grow items-center justify-center p-4 text-dark-grey">
        <div class="text-center">
          <span class="block text-2xl">
            <NuxtLink to="/bookmarks">
                <i class="icon icon-bookmark"></i>
                <p class="text-white leading-0 mb-1">.</p>
            </NuxtLink>
          </span>
        </div>
      </a>
      <a href="#" class="flex flex-grow items-center justify-center p-4 text-dark-grey">
        <div class="text-center">
          <span class="block text-2xl">
            <NuxtLink to="/profile"> 
                <i class="icon icon-user"></i>
                <p class="text-white leading-0 mb-1">.</p>
            </NuxtLink>
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

.leading-0{
    line-height: 0px;
}

.nuxt-link-active .leading-0{

    color: #00e3a8 !important; 
}
</style>