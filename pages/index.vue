<template>
  <div class="home">
    
<!-- animate-spin -->
    <!----------------------------------- Home -------------------------------------------->
    <section id="home" class="container-fluid flex justify-between items-center bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4">
            <img src="data\images\group.jpeg" alt="home">
        </div>
        <div class="w-1/2 px-8 py-4 ">
            <h1 class="text-center text-blue-300 font-semibold text-3xl py-4 hover:text-orange-500 cursor-pointer">WiMaX</h1>
            <p class="text-center text-lg font-cursive text-blue-300">“One whose ideal is mortal dies when his ideal is achieved.But one whose ideal is immortal must become immortal himself to attain it”</p>
        </div>
    </section>

    <!----------------------------------- About -------------------------------------------->

    <section id="about" class="container-fluid flex justify-between items-center bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4">
            <h1 class="text-center text-blue-300 font-semibold text-3xl py-4 hover:text-orange-500 cursor-pointer">About Us</h1>
            <p class="text-center text-sm text-blue-300">This is WiMaX, a club initiated by the STUDENTS of artificial intelligence and data science department of Easwari Engineering college. WiMaX is not just a club but also a COMMUNITY for our students to sharpen their skills in their interested domain and to explore new domains. Our ideology is focused on COLLECTIVE GROWTH. We help among ourselves by GAINING KNOWLEDGE from others and TEACHING their KNOWLEDGE to others. We try to bring our IDEAS to real life to make an IMPACT in our society and the world and an INSPIRATION to our younger generation.</p>
        </div>
        <div class="w-1/2 px-8 py-4">
            <img src="data\images\naveen_funny.jpeg" alt="funny_naveen">
        </div> 
    </section>
    <!----------------------------------- Projects -------------------------------------------->

    <section id="projects" class="container-fluid flex justify-between items-center bg-gray-900 px-6 py-3">
        <section class="bg-white dark:bg-gray-900">
    
    <div class="container px-6 py-8 mx-auto">
        <h2 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Team</h2>

        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                </div>
            </div>

            <div class="w-full max-w-xs text-center">
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
                </div>
            </div>
        </div>
    </div>
</section>
        
    </section>
  </div>
</template>

<style scoped>
    #home {
        height: 90vh;
        animation: homepage 2s ease-in-out;
    }
    @keyframes homepage {
        0% {
            opacity: 0;
            transform: translateX(-80px);
        }
        60% {
            opacity: 0.1;
            transform: translateX(0px);
        }
        100% {
            opacity: 1;
        }

    }
    #about {
        height: 90vh;
        animation: aboutpage .4s ease-in-out;
    }
    @keyframes aboutpage {
        from {
            opacity: .2;
            transform: translateX(-40px);
            }
    }

</style>

<script setup>
    definePageMeta({
        title: 'veedu',
    })

const contact = ref(null)
async function contactus(event){
    event.preventDefault();
    const formData = new FormData(contact.value);
            const allEntries = Array.from(formData.entries()).reduce((acc, val) => {
            acc[val[0]] = val[1];
            return acc;
            }, {}
            );
            console.log(allEntries)
            const result = await fetch("/api/contact",{method: "POST",body: JSON.stringify(allEntries)});
    }


</script>
