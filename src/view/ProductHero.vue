<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { products as allProducts } from "@/data/products";

const route = useRoute();

const { products } = defineProps({
  products: {
    type: Array,
    default: undefined,
  },
});

const source = computed(() => products ?? allProducts);

const main = computed(() => {
  const id = Number(route.params.id);
  if (Number.isFinite(id)) {
    const found = source.value.find((item) => item.id === id);
    if (found) return found;
  }
  return (
    source.value[0] ?? {
      name: "Product",
      description: "",
      price: 0,
      discount: 0,
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    }
  );
});
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row justify-around">
      <img
        :src="main.image"
        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl object-cover"
      />
      <div class="w-lg">
        <h1 class="text-5xl font-bold">{{ main.name }}</h1>
        <p class="py-6">
          {{ main.description }}
        </p>
        <h2 class="text-3xl font-semibold">
          ${{ main.price - (main.price * main.discount) / 100 }}
          <span class="line-through text-gray-500">${{ main.price }}</span>
        </h2>
        <button class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</template>
