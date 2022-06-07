<template>
<div class="home__page">
  <br>
  <router-link to="/login" class="btn btn-outline-warning  btn-lg" data-mdb-ripple-color="#000000" style="color:#000;border-color:#e0600b;" >Login</router-link>
  <router-link to="/Profile" style="--clr#e76f51" class="myButton" >Profile</router-link>
  <router-link to="Signup" style="--clr#e76f51" class="myButton" >Signup</router-link>

  <router-view/>
  </div>
  
</template>

<script>
export default {
 name: "HomeVue"
}

</script>

<style scoped>

/* .myButton {
	box-shadow: 3px 6px 6px 0px #f73b3b;
  margin: 30px;
	background-color:transparent;
	border-radius:12px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-size:18px;
	font-weight:bold;
	padding:5px 35px;
	text-decoration:none;
}

.myButton:hover {
  transition: box-shadow 0.4s ease-in-out;
	box-shadow: 0px 0px 3px 0px #f73b3b;
	background-color:#fcfcfc;
	border-radius:15px;
	border:1px solid #f26a6a;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Georgia;
	font-size:18px;
	font-weight:bold;
	padding:5px 35px;
	text-decoration:none;
	text-shadow:-1px 3px 0px #ffffff;
} */

@media screen and (min-width: 280px) and (max-width: 768px) {
  

}

</style>