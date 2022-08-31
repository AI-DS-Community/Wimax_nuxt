<template>
  <section
    id="contact"
    class="flex justify-center items-center h-full bg-grey-700 px-6 py-3"
  >
    <form
      ref="join"
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
      @submit="joinus"
    >
      <h2 class="w-full text-3xl text-center font-bold leading-tight text-blue-300  decoration-blue-300">
        JOIN US
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
        <label for="number" class="block mb-1 ml-1 text-blue-400"
          >Number</label
        >
        <input
          name="phone"
          id="number"
          type="tel"
          placeholder="Your number"
          pattern="[0-9]{5}-[0-9]{5}"
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
        <label for="skillsKnown" class="block mb-1 ml-1 text-blue-400"
          >Skills Known</label
        >
        <textarea
          name="skills_known"
          id="skillsKnown"
          type="text"
          placeholder="Skills Known..."
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
        <label for="skillsAcquire" class="block mb-1 ml-1 text-blue-400"
          >Skills to Acquire</label
        >
        <textarea
          name="wanted_skills"
          id="skillsAcquire"
          type="text"
          placeholder="Skills to Acquire..."
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
        <label for="interest" class="block mb-1 ml-1 text-blue-400"
          >Field of Interest</label
        >
        <textarea
          name="intrested"
          id="interest"
          type="text"
          placeholder="Field of interest..."
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
            dark:bg-white
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

<style scoped>
</style>

<script setup>
useHead({
  title: "Membership Form",
});

const message = ref({ type: "", content: "" });

const join = ref(null);
async function joinus(event) {
  event.preventDefault();
  const formData = new FormData(join.value);
  const allEntries = Array.from(formData.entries()).reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
  console.log(allEntries);
  const result = await fetch("/api/join", {
    method: "POST",
    body: JSON.stringify(allEntries),
  });
  if (result.status === 200) {
    message.value.type = "success";
    message.value.content = "Your application was successfully submitted!";
  } else {
    message.value.type = "error";
    message.value.content = "Something went wrong.";
  }
}
</script>
<!--text-sky-300    color: rgb(125 211 252); 
    text-sky-400	color: rgb(56 189 248);
    text-sky-500	color: rgb(14 165 233);
    text-sky-600	color: rgb(2 132 199);
    text-sky-700	color: rgb(3 105 161); -->