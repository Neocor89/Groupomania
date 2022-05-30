<template>
   <nav>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/AboutPage">About</router-link>
  </div>
  <div>
    <router-view />
  </div>
  </nav>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";


export default {
  name: 'App',
  components: {
  },
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #17a2b859;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #c25516;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 767px) {
  body,
  .btn,
  .form-control {
    font-size: 13px !important;
  }
  #nav #logo {
    padding-left: 10px;
  }
}
@media screen and (min-width: 767px) and (max-width: 991px) {
  #nav #logo {
    max-width: 200px;
  }
}
</style>