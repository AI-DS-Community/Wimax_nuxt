<template>
  <div class="min-h-screen text-white flex flex-col tracking-wide">
    <LayoutHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>