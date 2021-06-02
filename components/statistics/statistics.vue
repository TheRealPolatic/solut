<template>
  <div class="bg-grey text-dark p-4 rounded-lg">
    <!-- Titel en info -->
    <div class="flex justify-between">
      <h4>Statistics</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="flex-none w-5 fill-current text-dark-grey"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
        />
      </svg>
    </div>

    <!-- User your solutions -->
    <div class="mt-8">
      <p class="text-sm">
        <span class="font-bold">56 people</span> have used your solution
      </p>

      <div class="w-full h-2 bg-primary bg-opacity-20 rounded-full mt-2"></div>
      <div class="w-1/3 h-2 bg-primary rounded-full -mt-2"></div>

      <div class="flex justify-between mt-2 h-6 align-middle">
        <p class="text-xs text-darker-grey font-medium align-middle mt-1">
          119 people till the next milestone
        </p>
        <div class="bg-primary text-white text-xs font-bold p-1 rounded-md">
          175
        </div>
      </div>
    </div>

    <!-- Had impact on -->
    <div class="mt-8">
      <p class="text-sm">
        You made impact on
        <span class="font-bold">210 people</span>
        so far
      </p>

      <div class="w-full h-2 bg-primary bg-opacity-20 rounded-full mt-2"></div>
      <div class="w-2/5 h-2 bg-primary rounded-full -mt-2"></div>

      <div class="flex justify-between mt-2 h-6 align-middle">
        <p class="text-xs text-darker-grey font-medium align-middle mt-1">
          290 people till the next milestone
        </p>
        <div class="bg-primary text-white text-xs font-bold p-1 rounded-md">
          500
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
