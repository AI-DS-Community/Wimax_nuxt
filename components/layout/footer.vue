<template>
    <section id="footer" class="flex flex-wrap shadow-lg justify-center lg:justify-between items-center w-full bg-gray-900 px-6 py-3 z-10">
        <div>
            <a href="/" class="text-center text-blue-300 font-semibold text-xl hover:text-blue-400">WiMaX</a>
        </div>
<<<<<<< HEAD
        <div class="text-blue-300 text-xs invisible lg:visible">
            <p>© Copyright 2021. All Rights Reserved.</p>
=======
        <div class="text-blue-300 text-m invisible lg:visible">
            <p>Developed by Students of AI & DS</p>
>>>>>>> 5e7cff3e06b33953253175a849f4bf6e54911548
        </div>
        <div class="grid grid-cols-3 gap-4 shadow">
            <a href="https://github.com/AI-DS-Community" target=”_blank”><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg></a>
            <a href="https://github.com/AI-DS-Community" target=”_blank”><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg></a>
            <a href="https://github.com/AI-DS-Community" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-discord" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
                <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
                <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
            </svg></a>
        </div>
    </section>
</template>

<script>
export default {
  name: 'FooterComp',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #footer {
        height: 10vh
    }
    svg {
        color: rgb(147 197 253);
    }
    svg:hover {
        cursor: pointer;
        color: rgb(249 115 22);
    }
</style>
