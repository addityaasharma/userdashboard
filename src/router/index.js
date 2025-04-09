import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name:'login',
      component:()=>import('/src/components/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/broker',
          name: 'broker',
          component: () => import('@/views/Broker.vue'),
        },
        {
          path: '/mystrategies',
          name: 'mystrategies',
          component: () => import('../views/MyStrategies.vue'),
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue'),
        },
        {
          path: '/strategies',
          name: 'strategies',
          component: () => import('../views/Strategies.vue'),
        },
        {
          path: '/videos',
          name: 'videos',
          component: () => import('../views/Videos.vue'),
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../views/Order.vue'),
        },
        {
          path: '/position',
          name: 'position',
          component: () => import('../views/Position.vue'),
        },
        {
          path:'/chart',
          name:'chart',
          component:()=>import('../views/Chart.vue')
        }
      ]
    },

  ],
})

export default router
