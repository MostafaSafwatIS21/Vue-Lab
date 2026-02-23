import AboutView from "@/view/AboutView.vue";
import HomeView from "@/view/HomeView.vue";
import CartView from "@/view/CartView.vue";
import ProductView from "@/view/ProductView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/cart", component: CartView },
  { path: "/product/:id", component: ProductView },
];
export const router = createRouter({ history: createWebHistory(), routes });
