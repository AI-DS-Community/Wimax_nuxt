<template>
  <div>
    <a
      class="
        flex-flex-col
        h-full
        text-white
        block
        p-8
        transition-all duration-500 ease-in-out
        lg:border border-gray-800
        lg:shadow-xl
        lg:rounded-xl
        lg:hover:shadow-blue-400/10 lg:hover:border-blue-400/10
      "
      :href="content.link || `javascript:void(0)`"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
      <img :src="content.image" :alt="content.title" width="50px" height="50px" />

      <div class="mt-4 text-xl font-bold text-white">{{ content.title }}</div>

      <p class="mt-3 text-sm text-gray-300">
        {{ content.content }}
      </p>
      <ul
        v-if="content.list"
        class="list-disc list-inside flex flex-col space-y-1 text-gray-300"
      >
        <li v-for="item in content.list" :key="item" class = "text-sm">{{ item }}</li>
      </ul>
    </a>
  </div>
</template>

<script setup>
const { content } = defineProps({
  content: Object,
});
</script>