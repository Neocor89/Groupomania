<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <input type="text" placeholder="fullname">
      </div>
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