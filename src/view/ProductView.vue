<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import ProductCard from "@/components/ProductCard.vue";
import ProductDetails from "@/components/ProductDetails.vue";

const emit = defineEmits(["buy"]);

const { products } = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

const route = useRoute();

const productId = computed(() => Number(route.params.id));

const product = computed(() =>
  products.find((item) => item.id === productId.value),
);

const relatedProducts = computed(() =>
  products.filter((item) => item.id !== productId.value),
);

const handleBuy = (id) => {
  emit("buy", id);
};

onMounted(() => {
  console.log(`ProductView mounted for ID: ${route.params.id}`);
});

onUnmounted(() => {
  console.log("ProductView unmounted");
});
</script>

<template>
  <div class="p-6">
    <ProductDetails v-if="product" :product="product" @buy="handleBuy" />
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
