import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '@/views/Register.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "root" */ '../views/Dashboard.vue')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "root" */ '../views/Transactions.vue')
  },
  {
    path: '/editUser',
    name: 'Edit User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "root" */ '../views/EditUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
