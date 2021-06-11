<template>
  <div class="flex flex-col">
    <!-- Profile Image -->
    <div class="flex items-center text-sm mt-8">
      <div class="w-24 h-24 bg-black overflow-hidden rounded-full relative">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="profileImage"
          class="absolute w-full h-full top-0 left-0 object-cover object-right"
        />
      </div>
    </div>

    <!-- Name & Change profile -->
    <div class="flex justify-between mt-8">
      <div class="text-xl font-bold">{{ userInfo.username }}</div>
      <NuxtLink to="/editAccount">
        <div class="text-sm pt-1">Change profile</div>
      </NuxtLink>
    </div>

    <!-- Info list -->
    <ul class="list-reset text-black text-sm pt-4">
      <ListItem :content="userInfo.location" :icon="'icon-location'"></ListItem>
      <ListItem :content="userInfo.email" :icon="'icon-envelope'"></ListItem>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: 'John Doe',
        email: 'johndoe@gmail.com',
        location: 'Ecodorp Boekel',
      },
    }
  },
}
</script>
