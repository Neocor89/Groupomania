import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


//: ADD import from use bootstrap in project Vue
// import Vue from 'vue'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
 
//: TEST THIS = import 'bootstrap-vue/dist/bootstrap.js'

createApp(App).use(store).use(router).mount('#app')