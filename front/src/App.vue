<template>
  <div id="app">
    <div
      id="nav"
      class="sticky-top justify-content-start justify-content-sm-center mb-1"
    >
      <router-link to="/">
        <img
        class="resize__logo logo__size"
          id="logo"
          :src="
            require('./assets/background-removebg.png')
          "
          alt="logo Groupomania"
        />
      </router-link>
    </div>
    
    <!-- <img class="size__img" src="./assets/groupomania_background_mixte01.png" alt=""> -->
    <router-view />
     <!-- <SignUp /> -->
    <!-- <router-link to="/">Home</router-link>  -->
    <!-- <router-link to="/AboutPage">About</router-link> | -->
    <!-- <router-link to="/signUp">SignUp</router-link> -->
     <!-- <Login /> -->
     <Footer />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from './components/Footer';
// import SignUp from './components/SignUp';
// import Login from './views/Login';


export default {
  name: 'App',
  components: {
    Footer
    // SignUp
    // Login
  },
}

</script>

<style lang="scss">

// overall style
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

// style component
@import "@/assets/scss/style-components-pages/_App.scss";

</style>