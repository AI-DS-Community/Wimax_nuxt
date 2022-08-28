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
      @submit="contactus"
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
        <label for="email" class="block mb-1 ml-1 text-blue-400">Email</label>
        <input
          name="email_id"
          id="email"
          type="email"
          placeholder="Your email"
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
          >Message</label
        >
        <textarea
          name="user_comment"
          id="message"
          type="text"
          placeholder="Message..."
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
            bg-blue-300
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
definePageMeta({
  title: "contactus-form",
});
const message = ref({ type: "", content: "" });

const contact = ref(null);
async function contactus(event) {
  event.preventDefault();
  const formData = new FormData(contact.value);
  const allEntries = Array.from(formData.entries()).reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
  console.log(allEntries);
  const result = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(allEntries),
  });
  if (result.status === 200) {
    message.value.type = "success";
    message.value.content = "Thanks for contacting us !";
  } else {
    message.value.type = "error";
    message.value.content = "Something went wrong.";
  }
}
</script>