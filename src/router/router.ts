import { createRouter, createWebHistory } from 'vue-router'
import Menu from '@/views/Menu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Menu,
    },
    {
      path: '/kasa',
      name: 'kasa',
      component: () => import('../views/Dashboard.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
