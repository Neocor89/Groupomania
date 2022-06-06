<template>
  <div class="profile-picture" :class="divCustomClass">
    <img
      class="profile-picture__img"
      :class="customClass"
      :src="src || './assets/avatar-placeholder.png'"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'ProfileImage',
  props: ['customClass', 'divCustomClass', 'src'],
};
</script>

<style lang="scss" scoped>
.profile-picture {
  overflow: hidden;
  border-radius: 100%;
  background: black;
  &__img {
    object-fit: cover;
  }
}
</style>