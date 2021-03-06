import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/compare-stats',
      name: 'compare-stats',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CompareStats.vue')
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('./views/Accounts.vue')
    },
    {
      path: '/accounts/:id',
      name: 'account',
      component: () => import('./views/Account.vue')
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: () => import('./views/Heroes.vue')
    }
  ],
  linkActiveClass: 'is-active'
})
