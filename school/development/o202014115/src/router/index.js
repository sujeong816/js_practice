import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExamOne from '../views/ExamOne.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/one',
    name: 'one',
    component: ExamOne
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
