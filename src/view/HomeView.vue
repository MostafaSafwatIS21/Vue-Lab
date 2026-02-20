<script setup>
import { onMounted, onUnmounted } from "vue";
import CarouselBanner from "@/components/CarouselBanner.vue";
import ProductCard from "@/components/ProductCard.vue";

const { products } = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  console.log(`HomeView mounted — ${products.length} products loaded`);
});

onUnmounted(() => {
  console.log("HomeView unmounted");
});
</script>

<template>
  <div>
    <CarouselBanner />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
