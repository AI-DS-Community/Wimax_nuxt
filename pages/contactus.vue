<template>
    <section id="contact" class="flex justify-center items-center h-screen bg-gray-900 px-6 py-3">
        <form ref="contact" novalidate="" class="container-fluid w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid" @submit="contactus">
            <h2 class="w-full text-3xl font-bold leading-tight text-blue-300">Contact us</h2>
            <div>
                <label for="name" class="block mb-1 ml-1 text-blue-300">Name</label>
                <input name = "name" id="name" type="text" placeholder="Your name" required="" class="block w-full p-2 rounded text-blue-300 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1 text-blue-300">Email</label>
                <input name="email_id" id="email" type="email" placeholder="Your email" required="" class="block w-full p-2 rounded text-blue-300 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800">
            </div>
            <div>
                <label for="message" class="block mb-1 ml-1 text-blue-300">Message</label>
                <textarea name = "user_comment" id="message" type="text" placeholder="Message..." class="block w-full p-2 rounded autoexpand text-blue-300 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
            </div>
            <div>
                <button type="submit" class="w-full px-4 py-2 font-bold rounded shadow text-blue-300 focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Send</button>
            </div>
        </form>
    </section>
</template>

<script setup>
definePageMeta({
    title: 'contactus-form',
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