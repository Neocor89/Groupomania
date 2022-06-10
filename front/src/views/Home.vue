<template>
<div class="home__page">
  <br>
	<div class="router__links link--one">
  <router-link to="/login" class="btn btn-outline btn-lg link--effect" data-mdb-ripple-color="#000000" style="font-weight:bold; color:#333; border-color:#e0600b;" >Login</router-link>
	</div>

	<div class="router__links">
  <router-link to="/Profile" class="btn btn-outline  btn-lg link--effect" data-mdb-ripple-color="#000000" style="font-weight:bold; color:#333; border-color:#e0600b;" >Profile</router-link>
	</div>

	<div class="router__links">
  <router-link to="Signup" class="btn btn-outline  btn-lg link--effect" data-mdb-ripple-color="#000000" style="font-weight:bold; color:#333; border-color:#e0600b;" >Signup</router-link>
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
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.router__links {
	@include linksPosition;
} 
.link--effect:hover {
	@include btnEffects;
}

@media screen and (min-width: 280px) and (max-width: 768px) {
  

}

</style>