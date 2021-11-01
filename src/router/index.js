import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/InstitutionalSetting',
    name: 'InstitutionalSetting',
    component: () => import('../views/InstitutionalSetting.vue')
  },
  {
    path: '/schoolsituation',
    name: 'schoolsituation',
    component: () => import('../views/schoolsituation.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
