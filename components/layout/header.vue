<template>
    <header
        :class="`flex flex-row sticky top-0 w-full z-50 bg-gray-900 lg:bg-black/20 backdrop-blur-lg border-blue-400 border-b-2`"
    >
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
                                :class="`transition-all duration-400 transform ease-in-out`"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                :d="navOpen ? `M4 6 L24 24` : `M4 6 L28 06`"
                            />
                            <path
                                :class="`transition-all duration-400 transform ease-in-out`"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                :d="navOpen ? `M4 6 L24 24` : `M4 14 L 20 14`"
                            />
                            <path
                                :class="`transition-all duration-400 transform ease-in-out`"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                :d="
                                    navOpen ? `M24 06 L 4 24` : `M04 22 L 12 22`
                                "
                            />
                        </g>
                    </svg>
                </button>
            </div>
            <div
                :class="`flex flex-col lg:flex-row lg:justify-between transition duration-500 ease-in-out transform absolute lg:static top-16 left-0 ${
                    navOpen ? `-translate-x-0` : `-translate-x-140`
                } space-y-4 lg:space-y-0 lg:space-x-4 lg:items-center text-base lg:translate-x-0 lg:max-w-8xl w-full text-white lg:mx-auto bg-gray-900 lg:bg-transparent py-8 lg:py-0 px-8 lg:px-1 min-h-screen lg:min-h-0 overflow-y-auto`"
            >
                <div class="flex items-center">
                    <a
                        :class="`hover:text-blue-300 transition duration-500 px-4 lg:px-1`"
                        href="/"
                        key="logo"
                    >
                        <img
                            src="/wimax.webp"
                            :class="`w-16 rounded-full p-0`"
                            alt="WiMaX"
                        />
                    </a>
                </div>
                <div
                    class="navs flex flex-col lg:flex-row item-center space-y-4 lg:space-y-0 lg:space-x-4"
                >
                    <a
                        class="nunderline"
                        v-for="x in navList"
                        :class="`hover:text-blue-300 transition duration-500 px-4 lg:px-1 text-lg`"
                        :href="x.route"
                        :key="x.key"
                        @click="toggleOff"
                    >
                        {{ x.name }}
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .navs a {
        background: linear-gradient(0deg, rgb(147 197 253), rgb(147 197 253))
            no-repeat right bottom / 0 var(--bg-h);
        transition: background-size 350ms;
        --bg-h: 100%;
    }
    .navs a:where(:hover, :focus-visible) {
        background-size: 100% var(--bg-h);
        background-position-x: left;
    }

    .navs .nunderline {
        padding-bottom: 4px;
        --bg-h: 2px;
    }

    .navs {
        text-decoration: none;
        color: inherit;
        line-height: 1;
    }
</style>

<script setup lang="ts">
    const navOpen = ref(false);

    const navList = [
        { name: "Home", key: "home", route: "/" },
        { name: "About Us", key: "about us", route: "/#about" },
        { name: "Projects", key: "projects", route: "/projects" },
        { name: "Events", key: "events", route: "/events" },
        { name: "Join Us", key: "join us", route: "https://chat.whatsapp.com/IlydtEkT8lBEzzWkbF7DCq" },
        { name: "Contact Us", key: "contact us", route: "/contactus" },
    ];

    const toggleOff = () => {
        navOpen.value = false;
    };
    const toggleOn = () => {
        navOpen.value = true;
    };

    const toggleBoth = () => {
        navOpen.value = !navOpen.value;
    };
</script>
