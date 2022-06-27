// import Vue from "vue";
import { createStore } from 'vuex';
import posts from "./posts";
// export default new Vuex.Store({})

export default createStore({
  state: {
    companyName: "Groupamania",
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts
  }
})
