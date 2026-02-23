<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="h-screen">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
