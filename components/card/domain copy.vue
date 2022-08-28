<template>
  <div>
    <a
      class="
        text-white
        flex
        flex-col lg:flex-row items-center gap-8
        block
        p-8
        transition
        border border-gray-800
        shadow-xl
        rounded-xl
        hover:shadow-pink-500/10 hover:border-pink-500/10
      "
      :href="content.link"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
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