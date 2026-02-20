<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("CarouselBanner mounted");
});

onUnmounted(() => {
  console.log("CarouselBanner unmounted");
});
</script>

<template>
  <div class="carousel w-full h-64 md:h-80">
    <div id="slide1" class="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1500530855697-b586d89ba3ee.webp"
        class="w-full object-cover"
        alt="Banner 1"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a class="btn btn-circle" href="#slide3">❮</a>
        <a class="btn btn-circle" href="#slide2">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1500530855697-b586d89ba3ee.webp"
        class="w-full object-cover"
        alt="Banner 2"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a class="btn btn-circle" href="#slide1">❮</a>
        <a class="btn btn-circle" href="#slide3">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1500530855697-b586d89ba3ee.webp"
        class="w-full object-cover"
        alt="Banner 3"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a class="btn btn-circle" href="#slide2">❮</a>
        <a class="btn btn-circle" href="#slide1">❯</a>
      </div>
    </div>
  </div>
</template>
