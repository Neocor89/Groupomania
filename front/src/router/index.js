import { createRouter, createWebHistory } from 'vue-router'
// import VueRouter from 'vue-router';
// import auth from '../middleware/auth';
import VueRouteMiddleware from 'vue-route-middleware';

const routes = [
  {
    path: '/AboutPage',
    name: 'AboutPage',
    component: () =>
    import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../components/SignUp.vue'),
  // component: () => import('../components/Signup.vue'),
}
]

//  route level code-splitting
//  this generates a separate chunk (about.[hash].js) for this route
//  which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



router.beforeEach(VueRouteMiddleware());

export default router