<script setup>
import { onMounted, onUnmounted } from "vue";
import CarouselBanner from "@/components/CarouselBanner.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/store/productStore";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchProducts();
  console.log(
    `HomeView mounted — ${productStore.products.length} products loaded`,
  );
});

onUnmounted(() => {
  console.log("HomeView unmounted");
});
</script>

<template>
  <div>
    <CarouselBanner />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div v-if="productStore.loading" class="col-span-full text-center py-10">
        <span class="loading loading-spinner loading-lg">Loading</span>
        <p class="mt-4">Loading products...</p>
      </div>
      <div
        v-else-if="productStore.error"
        class="col-span-full text-center py-10 text-error"
      >
        {{ productStore.error }}
      </div>
      <ProductCard
        v-else
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
