<template>
  <header :class="`flex flex-row w-full z-50 relative bg-gray-900 border-chaos-foreground border-b-2`">
    <div :class="`flex flex-row w-full items-center p-4`">
      <div :class="`flex flex-row items-center justify-center lg:hidden`">
        <button
          :class="`
                    inline-flex
                    items-center
                    justify-center
                    p-2
                    rounded-md
                  text-white focus:outline-none
        `"
          @click="toggleBoth"
        >
          <span :class="`sr-only`">Open menu</span>
          <svg
            :class="`block h-8 w-8 text-white stroke-2`"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            viewBox="0 0 30 24"
          >
            <g>
              <path
                :class="`transition-all duration-500 transform ease-in-out`"
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="navOpen ? `M4 6 L24 24` : `M4 6 L28 06`"
              />
              <path
                :class="`transition-all duration-500 transform ease-in-out`"
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="navOpen ? `M4 6 L24 24` : `M4 14 L 20 14`"
              />
              <path
                :class="`transition-all duration-500 transform ease-in-out`"
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="navOpen ? `M24 06 L 4 24` : `M04 22 L 28 22`"
              />
            </g>
          </svg>
        </button>
      </div>
      <div
        :class="`flex flex-col lg:flex-row lg:justify-between transition duration-500 ease-in-out transform absolute lg:static top-16 left-0 ${
          navOpen ? `-translate-x-0` : `-translate-x-140`
        } space-y-4 lg:space-y-0 lg:space-x-4 lg:items-center text-base lg:translate-x-0 lg:max-w-8xl w-full text-white uppercase font-semibold lg:mx-auto bg-gray-900 py-8 lg:py-0 px-8 lg:px-1 min-h-screen lg:min-h-0 overflow-y-auto`"
      >
        <div class = 'flex items-center'>
          <a
            :class="`hover:text-blue-300 transition duration-500 px-4 lg:px-1`"
            href="/"
            key="logo"
          >
            <img src="/logo_bg.png" :class="`w-16 rounded-full p-0`" alt="WiMaX" />
        </a>
        </div>
        <div class="flex flex-col lg:flex-row item-center space-y-4 lg:space-y-0 lg:space-x-4">
          <a
            v-for="x in navList"
            :class="`hover:text-blue-300 transition duration-500 px-4 lg:px-1 uppercase`"
            :href="x.route"
            :key="x.key"
          >
            {{ x.name }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const navOpen = ref(false);

const navList = [
  { name: "HOME", key: "home", route: "/" },
  { name: "ABOUT US", key: "about us", route: "/#about" },
  { name: "PROJECTS", key: "contact us", route: "/projects" },
  { name: "JOIN US", key: "join us", route: "/joinus" },
  { name: "CONTACT US", key: "contact us", route: "/contactus" },
];

const toggleOff = () => {
  navOpen.value = true;
};
const toggleOn = () => {
  navOpen.value = true;
};

const toggleBoth = () => {
  navOpen.value = !navOpen.value;
};
</script>