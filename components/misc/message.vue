<template>
    <div
      :class="`${
        type === 'success'
          ? 'bg-green-200 text-green-800 border-l-2 border-green-800'
          : type === 'info'
          ? 'bg-blue-200 text-blue-800 border-l-2 border-blue-800'
          : type === 'warning'
          ? 'bg-yellow-200 text-yellow-800 border-l-2 border-yellow-800'
          : type === 'error'
          ? 'bg-red-200 text-red-800 border-l-2 border-red-800'
          : type === 'gray'
          ? 'bg-gray-200 text-gray-800 border-l-2 border-gray-800'
          : 'bg-purple-300 text-purple-800 border-l-2 border-purple-800'
      }`"
    >
      <div class="p-2">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  const { type } = defineProps(["type"]);
  </script>