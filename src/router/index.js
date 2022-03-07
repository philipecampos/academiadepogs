import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'artigo/create',
        component: () => import(/* webpackChunkName: "artigo" */ '../views/artigo/create')
      },
      {
        path: 'artigo/:hash',
        component: () => import(/* webpackChunkName: "artigo" */ '../views/artigo/show')
      },
      {
        path: '/docker/vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/docker/vue.vue')
      },
      {
        path: '/linux/permissoes',
        component: () => import(/* webpackChunkName: "about" */ '../views/linux/permissoes.vue')
      }
    ]
  },
  // {
  //   path: '/linux/permissoes',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/linux/permissoes.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
