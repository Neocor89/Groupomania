<template>
<div class="home__page">
  <br>
  <router-link to="/login" style="--clr#e76f51" class="btn__style" ><span>Login</span><i></i></router-link>
  <router-link to="/Profile" style="--clr#e76f51" class="btn__style" ><span>Profile</span><i></i></router-link>
  <router-link to="Signup" style="--clr#e76f51" class="btn__style" ><span>Signup</span><i></i></router-link>
  <router-view/>
  </div>
  
</template>

<script>
export default {
 name: "HomeVue"
}

</script>

<style scoped>



a {
  margin: 60px 30px;
  position: relative;
  background: #e76f51;
  text-decoration: none;
  color: #222;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  padding: 10px 30px;
  transition: 0.5s;
  border-radius: 4px;
}

a:hover {
  letter-spacing: 0.15rem;
  background: var(--clr);
  background: rgb(36, 35, 35);
  box-shadow: 0 0 95px var(--clr);
  font-weight: bold;
}

a::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #ffffff;
}

a span {
  position: relative;
  z-index: 1;
}

a i {
  position: absolute;
  inset: 0;
  display: block;
}

a i::before {
  content: "";
  position: absolute;
  top: -3.5px;
  left: 80%;
  width: 10px;
  height: 5px;
  border: 2px solid #e76f51;
  background: #27282c;
  transform: translateX(-50%);
  transition: 0.5s;
}

a:hover i::before {
  width: 20px;
  left: 20%;
}

a i::after {
  content: "";
  position: absolute;
  bottom: -3.5px;
  left: 20%;
  width: 10px;
  height: 5px;
  border: 2px solid #e76f51;
  background: #27282c;
  transform: translateX(-50%);
  transition: 0.5s;
}

a:hover i::after {
  width: 20px;
  left: 80%;
}


</style>