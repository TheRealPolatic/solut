<template>
  <div class="m-6">
    <!-- Top bar -->
    <div class="flex justify-between">
      <NuxtLink to="/profile"><ButtonBackButton class="w-1/6" :icon="'icon-chevron-left'"></ButtonBackButton></NuxtLink>
      <h1 class="text-center text-xl font-bold mt-2">Edit account</h1>
      <div class="w-1/6"></div>
    </div>

    <!-- Change user info -->
    <form id="profile-form" @submit.prevent="submit">
      <!-- Image component -->
      <UserProfileAvatarInput
        v-model="form.avatar"
        default-src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      ></UserProfileAvatarInput>

      <!-- Username -->
      <FormField :label="'Username'" :type="'text'" :value="userInfo.username" class="mt-8"></FormField>
      <!-- Email -->
      <FormField :label="'Email'" :type="'text'" :value="userInfo.email" class="mt-8"></FormField>
      <!-- Location -->
      <FormField :label="'Location'" :type="'text'" :value="userInfo.location" class="mt-8"></FormField>

      <p class="mt-8">Change password</p>

      <NuxtLink to="/profile">
        <Button :label="'Update Account'" class="mt-8"></Button>
      </NuxtLink>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        avatar: null,
      },
      userInfo: {
        username: 'John Doe',
        email: 'johndoe@gmail.com',
        location: 'Ecodorp Boekel',
      },
    }
  },
}
</script>

<style></style>
