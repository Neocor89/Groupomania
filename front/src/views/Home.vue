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

<style scoped>

.router__links {
	display: grid;
	grid-template-columns: 200px;
	grid-template-rows: 100px;
	justify-content: center;
	align-items: center;
	padding: 15px;
} 
.link--effect:hover {
	border-radius: 4rem;
	transition: border-radius 0.3s ease-in;
	border: 2px solid;
	box-shadow: 10px 0.2rem 25px rgba(192, 192, 192, 0.533);
}

@media screen and (min-width: 280px) and (max-width: 768px) {
  

}

</style>