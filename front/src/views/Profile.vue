<template>
  <div>
    <!-- <Menu /> -->
    <!-- Route à éditer !!!! -->
    <div class="row text-center justify-content-center">
      <div class="col-lg-6">
        <div
          class=" card mx-auto border-0 shadow p-lg-3 mb-2 mb-lg-5 mt-lg-3 bg-white rounded"
        >
          <form @submit="editUser">
            <div class="d-flex align-items-center flex-column">
              <ProfileImage/>
            </div>
            <div class="form-group">
              <button
                class="create-button btn-block w-50 mx-auto mb-3 d-flex align-items-center justify-content-center"
                @click="triggerInput"
                type="button"
                aria-label="Changer ma photo de profil"
              >
                <span class="button-text mr-2 d-none d-md-block"
                  >Changer ma photo de profil</span
                >
                <span class="button-text mr-2 d-md-none d-lg-none d-xl-none"
                  >Modifier</span
                >
              </button>
              <div class="d-flex align-items-center">
                <div class="col-sm-10">
                  <input
                    ref="fileUpload"
                    class="d-none"
                    type="file"
                    @change="onFileSelected"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label> Prénom </label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Prénom"
                 
                    class="text-dark mb-3 pl-lg-3"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label for="lastName"> Nom </label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Nom"
                  
                    class="text-dark mb-3 pl-lg-3"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label for="email"> Email </label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
        
                    class="mb-3 pl-lg-3 test"
                    disabled
                  />
                </div>
              </div>
              <div  class="d-flex align-items-center">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label for="admin"> Statut </label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="admin"
                    type="text"
                    placeholder="Admin"
                    class="mb-4 pl-lg-3"
                    disabled
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              :class="`save-btn ${emptyInput ? 'disabled' : ''}`"
              :disabled="emptyInput"
              aria-label="Enregistrer"
            >
              Enregistrer
            </button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
//TODO : Revoir les 3 SPA à réintégrer et corriger
//TODO : FINIR BACKEND + réintégrer CODE enlevé dans composants 
// import { apiClient } from '../services/api-client';
import ProfileImage from '../components/ProfilImage.vue';
// import PostsList from '../components/PostsList';
// import Menu from '../components/Menu';
// import UserDeleteAccount from '../components/UserDeleteAccount';
export default {
  name: 'ProfileVue',
  components: {
    ProfileImage,
    // PostsList,
    // Menu,
    // UserDeleteAccount,
  },

};
</script>

<style lang="scss" scoped>

// overall style
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

// component style
@import "@/assets/scss/style-pages-views/_Profile.scss" ;


// .row {
//   margin-left: 0;
//   margin-right: 0;
// }
// .div-main-picture {
//   width: $size-medium-comp;
//   height: $size-medium-comp;
//   margin-bottom: 1rem;
// }
// .profile-main-picture {
//   height: $size-medium-comp;
// }
// .custom-file-label {
//   text-align: left;
// }

// .save-btn {
//   @include submit-btn;
//   &:focus {
//     box-shadow: $shadow-focus;
//   } &:hover {
//     box-shadow: $shadow-hover;
//   }
  
// }

// .card-body {
//   padding-bottom: 0;
// }

// .shadow {
//   box-shadow: $shadow !important;
// }

//   .create-button {
//     @include mobile-tablet-medium {
//     width: 100% !important;
//   }
// }
//   .div-main-picture {
//     @include mobile-tablet-medium {
//     width: $size-small-comp;
//     height: $size-small-comp;
//   }
// }
//   .profile-main-picture {
//     @include mobile-tablet-medium {
//     height: $size-small-comp;
//   }
// }
//   .shadow {
//     @include mobile-tablet-medium {
//     box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.08) !important;
//   }
// }

</style>