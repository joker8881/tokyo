import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../views/weather.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/event.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/location.vue')
    },
    {
      path: '/public',
      name: 'public',
      component: () => import('../views/public.vue')
    },
  ]
})

export default router
