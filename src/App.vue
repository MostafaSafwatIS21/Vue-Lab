<script setup>
import { ref } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

const products = ref([
  {
    id: 2,
    name: "Running Shoes",
    price: 90,
    discount: 10,
    stock: 5,
    tags: ["sport", "running", "lightweight"],
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Lightweight running shoes for everyday training.",
  },
  {
    id: 3,
    name: "Casual Boots",
    price: 150,
    discount: 0,
    stock: 2,
    tags: ["boots", "casual"],
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Classic boots with durable leather and comfort fit.",
  },
  {
    id: 4,
    name: "Flip Flops",
    price: 30,
    discount: 50,
    stock: 0,
    tags: ["summer", "beach"],
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description: "Comfortable flip flops for beach and leisure.",
  },
]);

const handleBuy = (productId) => {
  const product = products.value.find((item) => item.id === productId);
  if (product && product.stock > 0) {
    product.stock -= 1;
  }
};
</script>

<template>
  <div class="h-screen">
    <Navbar />
    <router-view v-slot="{ Component }">
      <component :is="Component" :products="products" @buy="handleBuy" />
    </router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
