import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from "vue-router";

import Login from "../pages/Login.vue";
import NotFound from "../pages/NotFound.vue";
import Dashboard from "../pages/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/hizli-satis",
    name: "FastSale",
    component: Login,
  },
  {
    path: "/masa-satis",
    name: "TableSale",
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
