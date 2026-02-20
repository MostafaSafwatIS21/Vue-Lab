import AboutView from "@/view/AboutView.vue";
import HomeView from "@/view/HomeView.vue";
import ProductView from "@/view/ProductView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/product", redirect: "/product/2" },
  { path: "/product/:id", component: ProductView },
];
export const router = createRouter({ history: createWebHistory(), routes });
