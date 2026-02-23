<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useCartStore } from "@/store/cartStore";

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const title = computed(() => product.title ?? product.name ?? "Product");
const imageAlt = computed(() => product.imageAlt ?? title.value);
const hasDiscount = computed(() => Number(product.discount) > 0);
const discountedPrice = computed(() => {
  if (!hasDiscount.value) return product.price;
  return product.price - (product.price * product.discount) / 100;
});
const badgeText = computed(() => {
  if (product.stock === 0) return "Out of Stock";
  if (hasDiscount.value) return `${product.discount}% OFF`;
  return "New";
});

const cartStore = useCartStore();

const handleAddToCart = () => {
  cartStore.addToCart(product);
};

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
      <figure class="h-48 overflow-hidden">
        <img :src="product.image" :alt="imageAlt" />
      </figure>
    </router-link>
    <div class="card-body">
      <div class="flex items-center justify-between">
        <h2 class="card-title">{{ title }}</h2>
        <span class="badge badge-secondary">{{ badgeText }}</span>
      </div>
      <p>Price: ${{ discountedPrice }}</p>
      <div v-if="product.tags?.length" class="flex flex-wrap gap-2">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge badge-outline"
        >
          #{{ tag }}
        </span>
      </div>
      <p v-if="hasDiscount" class="line-through text-gray-500">
        ${{ product.price }}
      </p>
      <div class="card-actions justify-between">
        <router-link class="btn btn-outline" :to="`/product/${product.id}`">
          View Product
        </router-link>
        <button
          class="btn btn-primary"
          :disabled="product.stock === 0"
          @click="handleAddToCart"
        >
          {{ product.stock === 0 ? "Out of Stock" : "Add to Cart" }}
        </button>
      </div>
    </div>
  </div>
</template>
