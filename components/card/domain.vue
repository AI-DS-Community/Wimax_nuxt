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
        border border-gray-800
        shadow-xl
        rounded-xl
        hover:shadow-blue-400/10 hover:border-blue-400/10
      "
      :href="content.link"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
      <img :src="content.image" alt="" width="50px" />

      <h3 class="mt-4 text-xl font-bold text-white">{{ content.title }}</h3>

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