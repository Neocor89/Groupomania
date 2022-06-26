import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import moment from 'moment';
// //: Import moment
// App.prototype.moment = moment;
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
 
createApp(App).use(store).use(router).mount('#app')
