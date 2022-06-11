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

@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

.resize__logo {
  width: 200px;
  height: 120px;
  object-fit: cover;
}


.size__img {
  width: $full-size;
  max-height: $full-size;
  background-position: center center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: $txt-center;
}

#nav {
  background-image: url('./assets/groupomania_background_mixte01.png');
  @include nav-position;
  // z-index: 1; 
}

@media screen and (min-width: 280px) and (max-width: 767px) {
  body,
  .btn,
  .form-control {
    font-size: 13px !important;
  }

  .logo__size {
    width: 170px;
  }

  
}
@media screen and (min-width: 767px) and (max-width: 991px) {
  #nav #logo {
    max-width: 200px;
  }
  
}
</style>