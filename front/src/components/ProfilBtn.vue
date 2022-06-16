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
//TODO = Vérif fonctionnement btn collapse sur div
import ProfileImage from './ProfileImage';
export default {
  name: 'ProfileButton',
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

// overall style
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

// component style
@import "@/assets/scss/style-components-pages/_ProfilBtn.scss";

// .profile-btn {
//   font-weight: $w500;
//   border: 2px solid $col-extra;
//   color: $dark;
//   top: 175px;
//   right: 45px;
//   height: 45px;
//   padding: 5px 5px 5px 16px;
//   background-color: $light !important;
//   border-radius: 15px;
//   z-index: 2;
//   &:focus {
//     outline: $nothing;
//   }
//   &:hover,
//   &:visited {
//     background-color: rgb(255, 255, 255) !important;
//     border: 1px solid $col-secd;
//   }
//   &__img {
//     height: 30px;
//   }
// }

// .collapsed-btn {
//   font-weight: $w500;
//   color: $dark;
//   background-color: $light;
//   border: $nothing;
//   padding: 0.375rem 0.75rem;
//   border-radius: $border-size;
//   &:hover,
//   &:focus,
//   &active {
//     background-color: $col-secd;
//     outline: $nothing;
//   }
// }
// .div-profile-btn-img {
//   width: 30px;
//   height: 30px;
//   margin-left: 8px;
// }
// #profile-collapsed {
//   top: 212px;
//   right: 44px;
//   z-index: 1;
// }


// .profile-btn {
//   @include mobile-tablet-large {
//   top: 150px;
//   right: 30px;
//   height: 35px;
//   border: 1px solid $col-thrd;
//   padding: 0;
//     &__img {
//       @include mobile-tablet-large {
//         height: 35px;
//       }
//     }
//   }
// }
// .div-profile-btn-img {
//   @include mobile-tablet-large {
//     width: 35px;
//     height: 35px;
//     margin-left: 0;
//   }
// }
// #profile-collapsed {
//   @include mobile-tablet-large {
//     top: 180px;
//     right: 50px;
//   }
// }

//   .name-profile-btn {
//     @include large-screnn {
//     display: block !important;
//   }
// }

</style>