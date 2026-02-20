<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("AboutView mounted");
});

onUnmounted(() => {
  console.log("AboutView unmounted");
});
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6">
    <h1 class="text-3xl font-bold mb-2">Mostafa Safwat</h1>
    <h2 class="text-xl font-semibold mb-4">Vue.js — ITI</h2>
    <p class="max-w-xl text-center">
      Welcome to our store demo. We focus on clean UI, smooth navigation, and a
      simple shopping flow to explore products quickly.
    </p>
  </div>
</template>
