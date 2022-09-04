<template>
    <section
      id="contact"
      class="flex justify-center items-center h-screen bg-gray-900 px-6 py-3"
    >
      <form
        ref="contact"
        novalidate=""
        class="
          container-fluid
          w-full
          max-w-xl
          p-8
          mx-auto
          space-y-6
          rounded-md
          shadow
          dark:bg-gray-900
          ng-untouched ng-pristine ng-valid
        "
        @submit= "shareidea"
      >
        <h2 class="w-full text-5xl text-center font-bold leading-tight text-blue-300">
          CONTACT US
        </h2>
        <div class="px-4">
          <label for="name" class="block mb-1 ml-1 text-blue-400">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your name"
            required=""
            class="
              block
              w-full
              p-2
              rounded
              text-black
              focus:outline-none
              focus:ring
              focus:ring-opacity-25
              focus:ring-blue-400
              dark:bg-gray-800
            "
          />
        </div>
       
        <div class="px-4">
          <label for="message" class="block mb-1 ml-1 text-blue-400"
            >Your idea</label
          >
          <textarea
            name="user_idea"
            id="user_idea"
            type="text"
            placeholder="Enter your idea for app development"
            class="
              block
              w-full
              p-2
              rounded
              autoexpand
              text-black
              focus:outline-none
              focus:ring
              focus:ring-opacity-25
              focus:ring-blue-400
              dark:bg-gray-800
            "
          ></textarea>
        </div>
        <div class="px-4">
          <MiscMessage
            :class="`${
              message.content ? 'max-h-[20rem]' : 'max-h-0'
            } transition-all duration-500 ease-in-out`"
            :type="message.type"
            >{{ message.content }}</MiscMessage
          >
        </div>
        <div class="px-4">
          <button
            type="submit"
            class="
              w-full
              px-4
              py-2
              font-bold
              rounded
              shadow
              bg-orange-500
              text-white
              focus:outline-none focus:ring
              hover:ring
              focus:ring-opacity-50
              focus:ring-white
              hover:ring-white
              dark:text-gray-900
            "
          >
            Send
          </button>
        </div>
      </form>
    </section>
  </template>
  
  <script setup>
  useHead({
    title: "ideas",
  });
  const message = ref({ type: "", content: "" });
  
  const ideaz = ref(null);
  async function shareidea(event) {
    event.preventDefault();
    const formData = new FormData(ideaz.value);
    const allEntries = Array.from(formData.entries()).reduce((acc, val) => {
      acc[val[0]] = val[1];
      return acc;
    }, {});
    console.log(allEntries);
    const result = await fetch("/api/ideas", {
      method: "POST",
      body: JSON.stringify(allEntries),
    });
    if (result.status === 200) {
      message.value.type = "success";
      message.value.content = "Thanks for sharing your idea !";
    } else {
      message.value.type = "error";
      message.value.content = "Something went wrong.";
    }
  }
  </script>