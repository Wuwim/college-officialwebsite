import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
