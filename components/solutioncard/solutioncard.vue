<template>
  <div class="m-4 flex flex-col">
    <div class="flex items-center text-sm">
      <div class="w-10 h-10 rounded-full overflow-hidden relative mr-4">
        <img
          src="https://dummyimage.com/50x50"
          alt=""
          class="absolute w-full h-full top-0 left-0"
        />
      </div>
      <div class="font-semibold">john.doe</div>
      <div class="text-gray-300 ml-auto justify-self-end">14 min ago</div>
    </div>

    <div
      class="
        w-full
        h-60
        bg-black
        rounded-2xl
        my-4
        flex
        relative
        overflow-hidden
      "
    >
      <img
        src="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        class="absolute top-0 left-0 w-full h-full"
      />
      <div
        class="
          z-5
          absolute
          top-0
          left-0
          h-full
          w-full
          bg-gradient-to-t
          from-black
          to-transparent
          opacity-50
        "
      ></div>
      <div class="self-end mt-auto z-10 p-4 flex item-end">
        <div class="flex-column w-3/4 pr-1">
          <h1 class="text-white text-lg leading-5 font-semibold">
            How to construct your own green roof
          </h1>
          <div class="flex text-gray-400 font-light mt-2">
            <div>Extreme Heat</div>
          </div>
        </div>

        <div class="w-1/4 flex justify-end items-end">
          <div
            class="
              w-12
              h-12
              rounded-2xl
              border border-white
              flex
              items-center
              justify-center
              text-white
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 17.5L9.99996 13.3333L4.16663 17.5V4.16667C4.16663 3.72464 4.34222 3.30072 4.65478 2.98816C4.96734 2.67559 5.39127 2.5 5.83329 2.5H14.1666C14.6087 2.5 15.0326 2.67559 15.3451 2.98816C15.6577 3.30072 15.8333 3.72464 15.8333 4.16667V17.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <div class="flex">
        <div class="w-6 h-6 bg-black rounded-full border-2 border-white"></div>
        <div
          class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"
        ></div>
        <div
          class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"
        ></div>
        <div
          class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"
        ></div>
        <div
          class="w-6 h-6 bg-black rounded-full border-2 border-white -ml-2"
        ></div>
      </div>
      <div class="text-gray-400 text-xs">
        Impacted <span class="font-semibold text-black">jane.doe</span> and 16k
        more
      </div>
    </div>
  </div>
</template>
