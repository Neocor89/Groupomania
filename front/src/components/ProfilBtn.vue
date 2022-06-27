<template>
  <div>
    <button
      @click="toggleActions"
      class="profile-btn d-flex position-fixed justify-content-center justify-content-lg-between align-items-center"
      aria-label="Afficher les actions"
    >
      <span class="name-profile-btn d-none d-lg-block"
        ><strong>{{ userData.firstName }}</strong></span
      >
      <ProfileImage
        :src="userData.imageUrl"
        customClass="profile-btn__img"
        divCustomClass="div-profile-btn-img"
      />
    </button>
    <div
      id="profile-collapsed"
      v-bind:class="`collapsed collapse mt-2 position-fixed ${
        areActionsVisible && 'visible'
      }`"
    >
      <div class="card border-0" @click="toggleActions">
        <p class="card-text">
          <button
            data-toggle="collapse"
            class="collapsed-btn collapse btn-block text-left"
            @click="changeOrReloadPage('Profile')"
            aria-label="Afficher le profil"
          >
            <i icon="person" class="mr-2"></i>Voir mon profil
          </button>
        </p>
        <p class="card-text">
          <button
            data-toggle="collapse"
            class="collapsed-btn collapse btn-block text-left"
            @click="changeOrReloadPage('Posts')"
            aria-label="Afficher la page d'accueil"
          >
            <i icon="house" class="mr-2"></i>Voir la page d'accueil
          </button>
        </p>
        <p class="card-text">
          <button
            data-toggle="collapse"
            class="collapsed-btn collapse btn-block text-left"
            @click="logout"
            aria-label="Deconnection"
          >
            <i icon="box-arrow-right" class="mr-2"></i>
            Se déconnecter
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import ProfileImage from './ProfileImage';
export default {
  name: 'ProfileBtn',
  components: {
    ProfileImage,
  },
  props: {},
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      areActionsVisible: false,
    };
  },
  methods: {
    toggleActions() {
      this.areActionsVisible = !this.areActionsVisible;
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
    changeOrReloadPage(name) {
      if (name === this.$route.name) return window.location.reload();
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss">

//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-components-pages/_ProfilBtn.scss";

</style>