<template>
<div>
  <br>
  <router-link to="/login">Login</router-link> |
  <router-link to="Signup">Signup</router-link>
  <router-view/>
  </div>
</template>

<script>
export default {
 name: "HomeVue"
}

</script>

<style scoped>

body h1 {
  background: transparent;
}


</style>