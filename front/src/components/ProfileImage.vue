<template>
  <div class="profile-picture" :class="divCustomClass">
    <img
      :class="customClass"
      :src="src || '../assets/avatar-placeholder.png'"
      alt="photo générique d'un utilisateur"
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

//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-components-pages/_ProfilImage.scss";

</style>