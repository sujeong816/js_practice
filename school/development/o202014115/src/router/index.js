import { createRouter, createWebHistory } from 'vue-router'
import ExamOne from '../views/ExamOne.vue'
import ExamTwo from '../views/ExamTwo.vue'
import ExamThree from '../views/ExamThree.vue'
import ExamFour from '../views/ExamFour.vue'

const routes = [
  {
    path: '/',
    name: 'one',
    component: ExamOne
  },
  {
    path: '/two',
    name: 'two',
    component: ExamTwo
  },
  {
    path: '/three',
    name: 'three',
    component: ExamThree
  },
  {
    path: '/four',
    name: 'four',
    component: ExamFour
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
