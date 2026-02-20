<script setup>
import { computed, onMounted, onUnmounted } from "vue";

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const badgeText = computed(() => {
  if (product.stock === 0) return "Out of Stock";
  if (product.discount > 0) return `${product.discount}% OFF`;
  return "New";
});

onMounted(() => {
  console.log(`ProductCard mounted — ID: ${product.id}`);
});

onUnmounted(() => {
  console.log(`ProductCard unmounted — ID: ${product.id}`);
});
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <router-link :to="`/product/${product.id}`">
      <figure>
        <img :src="product.image" :alt="product.name" />
      </figure>
    </router-link>
    <div class="card-body">
      <div class="flex items-center justify-between">
        <h2 class="card-title">{{ product.name }}</h2>
        <span class="badge badge-secondary">{{ badgeText }}</span>
      </div>
      <p>Price: ${{ product.price }}</p>
      <p>
        Price After discount: ${ product.price - (product.price *
        product.discount) / 100 }
      </p>
      <div class="card-actions justify-end">
        <router-link class="btn btn-primary" :to="`/product/${product.id}`">
          View Product
        </router-link>
      </div>
    </div>
  </div>
</template>
