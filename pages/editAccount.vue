<template>
  <div class="m-6">
    <!-- Top bar -->
    <div class="flex justify-between">
      <NuxtLink to="/account"
        ><ButtonBackButton class="w-1/6"></ButtonBackButton
      ></NuxtLink>
      <h1 class="text-center text-xl font-bold mt-2">Edit account</h1>
      <div class="w-1/6"></div>
    </div>

    <!-- Profile Image -->

    <div class="flex justify-center mt-8">
      <div class="w-24 h-24 relative">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="profileImage"
          class="w-full h-full object-cover object-right rounded-full"
        />
        <div
          class="
            h-8
            w-8
            bg-primary
            z-50
            absolute
            bottom-0
            right-0
            rounded-full
            border-2 border-white
            text-center
          "
        >
          <i class="icon icon-upload text-white text-lg"></i>
        </div>
      </div>
    </div>

    <!-- Form Fields -->
    <div class="mt-8">
      <FormField :label="'Username'" :type="'text'"></FormField>
      <FormField :label="'Email'" :type="'text'" class="mt-8"></FormField>
      <FormField
        :label="'Location'"
        :type="'password'"
        class="mt-8"
      ></FormField>

      <p class="mt-8">Change password</p>

      <Button :label="'Update Account'" class="mt-8"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
