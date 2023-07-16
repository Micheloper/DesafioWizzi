import { createRouter, createWebHistory } from "vue-router";
import FormView from "../views/FormView.vue";
import BoardingView from "../views/BoardingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FormView,
    },
    {
      path: "/boarding",
      name: "boarding",
      component: BoardingView,
      props: (route) => ({ query: route.query }),
    },
  ],
});

export default router;
