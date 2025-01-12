import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import TollBooth from '@/views/TollBooth.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/login',
            name: 'login',
            component: Login
          },
          {
            path: '/userDashboard',
            name: 'dashboard',
            component: UserDashboard
          },
          {
            path: '/tollbooth',
            name: 'tollbooth',
            component: TollBooth
          },
          {
            path: '/:catchAll(.*)',
            name: '404Name',
            // component: 404View
          }
    ]
  })

export default router