<script setup>
import { computed, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["buy"]);

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const discountedPrice = computed(() => {
  return product.price - (product.price * product.discount) / 100;
});

const isOutOfStock = computed(() => product.stock === 0);

const handleBuy = () => {
  emit("buy", product.id);
};

onMounted(() => {
  console.log("ProductDetails mounted");
});

onUnmounted(() => {
  console.log("ProductDetails unmounted");
});
</script>

<template>
  <div class="card lg:card-side bg-base-100 shadow-sm">
    <figure class="lg:w-1/2">
      <img :src="product.image" :alt="product.name" class="object-cover" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-3xl">{{ product.name }}</h2>
      <p class="text-sm opacity-70">{{ product.description }}</p>
      <div class="flex items-center gap-3">
        <span class="text-2xl font-semibold">${{ discountedPrice }}</span>
        <span class="line-through text-gray-500">${{ product.price }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="badge badge-outline">Stock: {{ product.stock }}</span>
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge badge-secondary"
        >
          {{ tag }}
        </span>
      </div>
      <button
        class="btn btn-primary w-fit"
        :disabled="isOutOfStock"
        @click="handleBuy"
      >
        {{ isOutOfStock ? "Out of Stock" : "Buy Now" }}
      </button>
    </div>
  </div>
</template>
