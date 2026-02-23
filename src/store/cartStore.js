import { computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@/composables/useLocalStorage";
import { useProductStore } from "@/store/productStore";

export const useCartStore = defineStore("cart", () => {
  const items = useLocalStorage("cart", []);
  const productStore = useProductStore();

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0),
  );

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );

  const addToCart = async (product) => {
    if (!product || product.stock <= 0) return;

    const existing = items.value.find(
      (item) => String(item.id) === String(product.id),
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      items.value.push({
        id: product.id,
        title: product.title ?? product.name ?? "Product",
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    await productStore.decreaseStock(product.id);
  };

  const removeFromCart = (id) => {
    items.value = items.value.filter((item) => String(item.id) !== String(id));
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
