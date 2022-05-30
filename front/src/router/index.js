import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/AboutPage',
    name: 'AboutPage',
    //  route level code-splitting
    //  this generates a separate chunk (about.[hash].js) for this route
    //  which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/NameField.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



// router.beforeEach(VueRouteMiddleware());

export default router