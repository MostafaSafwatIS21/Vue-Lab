<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import ProductCard from "@/components/ProductCard.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import { useProductStore } from "@/store/productStore";

const route = useRoute();
const productStore = useProductStore();

const productId = computed(() => String(route.params.id));

const product = computed(() => productStore.getProductById(productId.value));

const relatedProducts = computed(() =>
  productStore.products.filter((item) => String(item.id) !== productId.value),
);

onMounted(async () => {
  await productStore.fetchProducts();
  console.log(`ProductView mounted for ID: ${route.params.id}`);
});

onUnmounted(() => {
  console.log("ProductView unmounted");
});
</script>

<template>
  <div class="p-6">
    <div v-if="productStore.loading" class="py-10 text-center">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <div v-else-if="productStore.error" class="alert alert-error">
      {{ productStore.error }}
    </div>
    <ProductDetails v-else-if="product" :product="product" />
    <div v-else class="alert alert-warning">Product not found.</div>
    <div class="mt-10">
      <h3 class="text-2xl font-semibold mb-4">Related Products</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          v-for="item in relatedProducts"
          :key="item.id"
          :product="item"
        />
      </div>
    </div>
  </div>
</template>
