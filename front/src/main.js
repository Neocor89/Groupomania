// //: Import moment
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  next();
});

createApp(App).use(store).use(router).mount('#app');

