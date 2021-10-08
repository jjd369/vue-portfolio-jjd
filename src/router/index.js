import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/main',
        name: 'main',
        component: () =>
          import(/* webpackChunkName: "main" */ '@/components/main.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/components/about.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
