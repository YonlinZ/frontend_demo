import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import UserList from '../components/UserList.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/user/list',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 