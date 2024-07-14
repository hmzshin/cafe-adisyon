import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from "vue-router";

import Login from "../pages/Login.vue";
import NotFound from "../pages/NotFound.vue";
import HomePage from "../pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
