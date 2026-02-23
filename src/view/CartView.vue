<script setup>
import { computed } from "vue";
import { useCartStore } from "@/store/cartStore";

const cartStore = useCartStore();

const isEmpty = computed(() => cartStore.items.length === 0);

const lineTotal = (item) => item.price * item.quantity;
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Your Cart</h1>

    <div v-if="isEmpty" class="alert alert-info">Your cart is empty.</div>

    <div v-else class="space-y-4">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td class="flex items-center gap-3">
                <img
                  :src="item.image"
                  alt=""
                  class="h-12 w-12 object-cover rounded"
                />
                <span>{{ item.title }}</span>
              </td>
              <td>${{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>${{ lineTotal(item) }}</td>
              <td>
                <button
                  class="btn btn-ghost btn-sm text-error"
                  @click="cartStore.removeFromCart(item.id)"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end">
        <div class="card bg-base-100 shadow-sm p-4 w-full max-w-sm">
          <div class="flex justify-between">
            <span class="font-semibold">Total</span>
            <span class="text-xl font-bold">${{ cartStore.totalPrice }}</span>
          </div>
          <button class="btn btn-outline mt-4" @click="cartStore.clearCart">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
