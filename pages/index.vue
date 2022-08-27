<template>
  <div class="home">
    

    <!----------------------------------- Home -------------------------------------------->
    <section id="home" class="container-fluid flex justify-between items-center h-screen bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4">
            <img src="images\home.jpg" alt="home">
        </div>
        <div class="w-1/2 px-8 py-4">
            <p class="text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia expedita soluta assumenda sequi ad ut eligendi nobis. Eligendi temporibus quasi quibusdam mollitia est laudantium doloremque.</p>
        </div>
    </section>

    <!----------------------------------- About -------------------------------------------->

    <section id="about" class="container-fluid flex justify-between items-center h-screen bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4">
            <p class="text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia expedita soluta assumenda sequi ad ut eligendi nobis. Eligendi temporibus quasi quibusdam mollitia est laudantium doloremque.</p>
        </div>
        <div class="w-1/2 px-8 py-4">
            <img src="images\home.jpg" alt="home">
        </div> 
    </section>
    <!----------------------------------- Projects -------------------------------------------->

    <section id="projects" class="container-fluid flex justify-between items-center h-screen bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4">
            <img src="images\home.jpg" alt="home">
        </div>
        <div class="w-1/2 px-8 py-4">
            <p class="text-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia expedita soluta assumenda sequi ad ut eligendi nobis. Eligendi temporibus quasi quibusdam mollitia est laudantium doloremque.</p>
            <button type="button" class="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button>
        </div>
        
    </section>
    <!----------------------------------- Contact -------------------------------------------->

    <section id="contact" class="flex justify-center items-center h-screen bg-gray-900 px-6 py-3">
        <form novalidate="" class="container-fluid w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
            <h2 class="w-full text-3xl font-bold leading-tight text-blue-300">Contact us</h2>
            <div>
                <label for="name" class="block mb-1 ml-1 text-blue-300">Name</label>
                <input id="name" type="text" placeholder="Your name" required="" class="block w-full p-2 rounded text-blue-300 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1 text-blue-300">Email</label>
                <input id="email" type="email" placeholder="Your email" required="" class="block w-full p-2 rounded text-blue-300 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800">
            </div>
            <div>
                <label for="message" class="block mb-1 ml-1 text-blue-300">Message</label>
                <textarea id="message" type="text" placeholder="Message..." class="block w-full p-2 rounded autoexpand text-blue-300 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
            </div>
            <div>
                <button type="submit" class="w-full px-4 py-2 font-bold rounded shadow text-blue-300 focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Send</button>
            </div>
        </form>
    </section>
    <!----------------------------------- Footer -------------------------------------------->
  </div>
</template>

<script setup>
definePageMeta({
    title: 'veedu',
})

</script>
