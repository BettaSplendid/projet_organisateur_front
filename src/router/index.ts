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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import("../views/HomepageView.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/LoginView.vue")
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import("../views/DashboardView.vue")
    },
    {
      path: '/event/create',
      name: 'new_event',
      component: () => import("../views/event/EventCreateView.vue")
    },
    {
      path: '/event/create/template_select',
      name: 'template_select',
      component: () => import("../views/event/EventCreateTemplateView.vue")
    },
    {
      path: '/event/create/letsgo',
      name: 'template_process',
      component: () => import("../views/event/EventCreateProcessView.vue")
    },
    {
      path: '/event/create/confirm',
      name: 'template_confirm',
      component: () => import("../views/event/EventCreateConfirmView.vue")
    },
  ]
})

export default router
