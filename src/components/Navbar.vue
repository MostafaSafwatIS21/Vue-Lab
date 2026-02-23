<script setup>
import { onMounted, onUnmounted } from "vue";
import { useCartStore } from "@/store/cartStore";

const cartStore = useCartStore();

onMounted(() => {
  console.log("Navbar mounted");
});

onUnmounted(() => {
  console.log("Navbar unmounted");
});
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <router-link to="/" class="btn btn-ghost text-xl">Store</router-link>
    </div>
    <div class="navbar-end">
      <router-link to="/cart" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6H19M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          <span class="badge badge-sm badge-primary indicator-item">{{
            cartStore.totalItems
          }}</span>
        </div>
      </router-link>
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
