import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Basket from "../views/Basket.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: Basket,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
