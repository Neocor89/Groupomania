<template>
  <div id="app">
    <div
      id="nav"
      class="sticky-top justify-content-start justify-content-sm-center mb-1"
    >
      <router-link to="/home">
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
    
    <router-view />
     <Footer />
  </div>
</template>

<script>

//+ :: Import Bootstrap ::
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Footer
  },
}

</script>

<style lang="scss">

//+ overall style
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ style component
@import "@/assets/scss/style-components-pages/_App.scss";

</style>