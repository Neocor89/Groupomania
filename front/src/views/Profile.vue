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
        
                    class="mb-3 pl-lg-3"
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

          <!-- <UserDeleteAccount /> -->
        </div>
      </div>
    </div>
    <!-- <PostsList :userId="userData.id" /> -->
  </div>
</template>

<script>
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
  // data() {
  //   const userData = JSON.parse(localStorage.getItem('userData'));
  //   return {
  //     userData,
  //     input: {
  //       firstName: userData.firstName,
  //       lastName: userData.lastName,
  //       email: userData.email,
  //     },
  //     selectedFile: null,
  //     url: null,
  //   };
  // },
  methods: {
    // onFileSelected() {
    //   this.url = URL.createObjectURL(event.target.files[0]);
    //   this.selectedFile = event.target.files[0];
    // },
    // triggerInput() {
    //   this.$refs.fileUpload.click();
    // },
    // editUser(event) {
    //   let body = this.input;
    //   const isFormData = !!this.selectedFile;
    //   if (isFormData) {
    //     const formData = new FormData();
    //     formData.append('image', this.selectedFile);
    //     formData.append('user', JSON.stringify(body));
    //     body = formData;
    //   }
    //   apiClient.put('api/auth/edit', body, { isFormData }).then((res) => {
    //     localStorage.setItem('userData', JSON.stringify(res.user));
    //     this.userData = res.user;
    //     window.location.reload();
    //   })
    // }
  },
  computed: {
    // emptyInput() {
    //   return (
    //     !this.input.firstName.trim().length ||
    //     !this.input.lastName.trim().length
    //   );
    // },
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-left: 0;
  margin-right: 0;
}
.div-main-picture {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}
.profile-main-picture {
  height: 100px;
}
.custom-file-label {
  text-align: left;
}

.save-btn {
  background: linear-gradient(to bottom right, #e76f51, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  
  &:focus {
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(240, 187, 154, 0.5);
  } &:hover {
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(241, 198, 171, 0.5);
  }
  
}

// .save-btn {
//   background-color: #3f3f3fc7;
//   color: white;
//   border-radius: 0.5rem;
//   border: none;
//   margin-bottom: 1rem;
//   padding: 0.375rem 0.75rem;
//   &:hover,
//   &:focus,
//   &:active {
//     background-color: #17a2b8;
//     color: white;
//     outline: none;
//   }
// }
.card-body {
  padding-bottom: 0;
}
.shadow {
  box-shadow: 0rem 0.2rem 0.5rem rgba(53, 53, 53, 0.37) !important;
}
@media screen and (min-width: 280px) and (max-width: 768px) {
  .create-button {
    width: 100% !important;
  }
  .div-main-picture {
    width: 75px;
    height: 75px;
  }
  .profile-main-picture {
    height: 75px;
  }
  .shadow {
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.08) !important;
  }
}
</style>