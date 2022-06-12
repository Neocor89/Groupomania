import { createRouter, createWebHistory } from 'vue-router'
// import VueRouter from 'vue-router';
import auth from '../middleware/auth';
import VueRouteMiddleware from 'vue-route-middleware';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
    import(/* webpackChunkName: "about" */ '../views/Home.vue'),

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      middleware: auth,
    },
  },
  // {
  //   path: '/profile/:userId',
  //   name: 'UserProfile',
  //   component: () => import('../views/UserProfile.vue'),
  //   meta: {
  //     middleware: auth,
  //   },
  // },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
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