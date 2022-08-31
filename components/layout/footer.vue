<template>
    <section id="footer" class="flex flex-wrap shadow-lg justify-center lg:justify-between items-center w-full bg-gray-900 px-6 py-3 z-10">
        <div>
            <a href="/" class="text-center text-blue-300 font-semibold text-xl hover:text-blue-400">WiMaX</a>
        </div>

        <div class="text-blue-300 text-xs invisible lg:visible cursor-pointer">
            <p>© Copyright 2022. All Rights Reserved.</p>
            </div>
        <div class="text-blue-300 text-xs invisible lg:visible cursor-pointer">
            <a onClick="yourlink();" style="cursor: pointer; cursor: hand;"><a Developed by href="https://www.linkedin.com/in/naveen-kumar-s-921990210/">Naveen</a></a>
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
            
        </div>
    </section>
</template>

<script>
export default {
  name: 'FooterComp',
  props: {
  }
}

async function yourlink() {
    e.preventDefault();};
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
