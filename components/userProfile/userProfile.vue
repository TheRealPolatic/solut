<template>
  <div class="flex flex-col">
    <!-- Profile Image -->
    <div class="flex items-center text-sm mt-8">
      <div class="w-32 h-32 bg-black overflow-hidden rounded-full relative">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="profileImage"
          class="absolute w-full h-full top-0 left-0 object-cover object-right"
        />
      </div>
    </div>

    <!-- Name & Change profile -->
    <div class="flex justify-between mt-8">
      <div class="text-xl font-bold">John Doe</div>
      <div class="text-sm pt-1">Change Profile</div>
    </div>

    <!-- Info list -->

    <ul class="list-reset text-black text-sm pt-4">
      <li class="flex items-center mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-none w-4 mr-4 fill-current text-primary"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
        Ecodorp Boekel
      </li>
      <li class="flex items-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-none w-4 mr-4 fill-current text-primary"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
        johndoe@gmail.com
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
