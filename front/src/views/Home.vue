<template>
<div class="home__page">
  <br>
	<div class="router__links link--one">
  <router-link to="/login" class="btn btn-outline btn-lg link--effect" data-mdb-ripple-color="#000000" >Login</router-link>
	</div>

	<div class="router__links">
  <router-link to="/Profile" class="btn btn-outline  btn-lg link--effect" data-mdb-ripple-color="#000000" >Profile</router-link>
	</div>

	<div class="router__links">
  <router-link to="Signup" class="btn btn-outline  btn-lg link--effect" data-mdb-ripple-color="#000000" >Signup</router-link>
	</div>

  <router-view/>
  </div>
  
</template>

<script>
export default {
 name: "HomeVue"
}


</script>

<style lang="scss" scoped>

//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-pages-views/_Home.scss";

</style>