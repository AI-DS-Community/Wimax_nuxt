<template>
  <div>
    <div
      class="
        text-white
        p-8
        flex flex-col
        lg:flex-row
        gap-8
        items-center lg:items-start
        lg:border border-gray-800
        lg:shadow-xl
        lg:rounded-xl
        lg:transition-all
        duration-500
        ease-in-out
        lg:hover:shadow-blue-400/10 lg:hover:border-blue-400/10
      "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
    <div class = "lg:shrink-0 p-2">
      <img :src="content.image" class = "object-cover w-full h-full lg:w-48 lg:h-48 lg:rounded-full" />
    </div>
      <div class="flex flex-col items-center lg:items-start space-y-1 p-2">
        <div class="flex flex-row items-center space-x-4">
          <a :href="content.github" class="stroke-blue-400 stroke-2 block transition duration-500 ease-in-out transform hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
          <a :href="content.link" class="stroke-blue-400 stroke-2 block transition duration-500 ease-in-out transform hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              ></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-white uppercase">
          {{ content.title }}
        </h3>

        <p class="mt-3 text-sm text-gray-300">
          {{ content.content }}
        </p>
        <ul
          v-if="content.list"
          class="list-disc list-inside flex flex-col space-y-1 text-gray-300"
        >
          <li v-for="item in content.list" :key="item" class="text-sm">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const { content } = defineProps({
  content: Object,
});
</script>