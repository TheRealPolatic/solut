<template>
  <div class="flex flex-col">
    <!-- Profile Image -->
    <div class="flex items-center text-sm mt-8">
      <div class="w-24 h-24 bg-black overflow-hidden rounded-full relative">
        <img :src="userinfo.profileImage" alt="profileImage" class="absolute w-full h-full top-0 left-0 object-cover object-center" />
      </div>
    </div>

    <!-- Name & Change profile -->
    <div class="flex justify-between mt-8">
      <div class="text-xl font-bold">{{ userinfo.username }}</div>
      <NuxtLink to="/editProfile">
        <div class="text-sm pt-1">Change profile</div>
      </NuxtLink>
    </div>

    <!-- Info list -->
    <ul class="list-reset text-black text-sm pt-4">
      <!-- <ListItem :content="userInfo.location" :icon="'icon-location'"></ListItem> -->
      <ListItem :content="userinfo.email" :icon="'icon-envelope'"></ListItem>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    userinfo: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
}
</script>
