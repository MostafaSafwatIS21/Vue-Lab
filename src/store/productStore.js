import { ref } from "vue";
import { defineStore } from "pinia";
import { useApi } from "@/composables/useApi";

const PRODUCTS_API = "http://localhost:3000/products";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const { error, loading, getAll, update } = useApi(PRODUCTS_API);

  const fetchProducts = async () => {
    if (products.value.length > 0) return;
    const result = await getAll();
    if (result) {
      products.value = result;
    }
  };

  const decreaseStock = async (productId) => {
    const product = products.value.find(
      (item) => String(item.id) === String(productId),
    );
    if (!product || product.stock <= 0) return;

    const previousStock = product.stock;
    const updatedProduct = { ...product, stock: product.stock - 1 };
    product.stock = updatedProduct.stock;

    const result = await update(product.id, updatedProduct);
    if (!result) {
      product.stock = previousStock;
    }
  };

  const getProductById = (id) =>
    products.value.find((item) => String(item.id) === String(id));

  return {
    products,
    loading,
    error,
    fetchProducts,
    decreaseStock,
    getProductById,
  };
});
