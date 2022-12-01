import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/JS',
    name: 'JS',
    component: () => import('../views/JSView.vue')
  },
  {
    path: '/CLI',
    name: 'CLI',
    component: () => import('../views/CLIView.vue')
  },
  {
    path: '/VITE',
    name: 'VITE',
    component: () => import('../views/ViteView.vue')
  },
  {
    path: '/AXIOS',
    name: 'AXIOS',
    component: () => import('../views/axiosView.vue')
  },
  {
    path: '/ICON',
    name: 'ICON',
    component: () => import('../views/iconView.vue')
  },
  {
    path: '/JQUERY',
    name: 'JQUERY',
    component: () => import('../views/jqueryView.vue')
  },
  {
    path: '/TEXTPIC',
    name: 'TEXTPIC',
    component: () => import('../views/textPicView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/portfolioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
