<template>
 <div class="container">
  <h2>Signup</h2>
  <form >
    <div class="form-group">
      <label for="Firstname">Firstname:</label>
      <input type="Firstname" class="form-control" id="Firstname" placeholder="Enter Firstname" name="Firstname">
    </div>
    <div class="form-group">
      <label for="LastName">LastName:</label>
      <input type="LastName" class="form-control" id="LastName" placeholder="Enter LastName" name="LastName">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'NameField',
  props: {
    title: String,
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>