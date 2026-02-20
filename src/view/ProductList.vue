<script setup>
import ProductCard from "@/components/ProductCard.vue";

defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-5 justify-center items-center py-8">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
