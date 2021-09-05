import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import UserPage from "@/views/UserPage.vue";
import Confirmation from "@/views/Confirmation.vue";
import Registration from "@/views/Registration.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/userpage/:username",
    name: "userpage",
    component: UserPage,
  },
  {
    path: "/confirmation/:username",
    name: "confirmation",
    component: Confirmation,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
