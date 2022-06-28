<template>
  <div>
    <Menu />

    <div class="row text-center justify-content-center">
      <div class="col-lg-6">
        <div
          class=" card mx-auto border-0 shadow p-lg-3 mb-2 mb-lg-5 mt-lg-3 bg-white rounded"
        >
          <form @submit="editUser">
            <div class="d-flex align-items-center flex-column">
              <ProfileImage
                @click="triggerInput"
                :src="url || userData.imageUrl"
                customClass="profile-main-picture"
                divCustomClass="div-main-picture"
              />
            </div>
            <div class="form-group profile_style">
              <!-- :: Revoir cette partie et optimiser :: -->
              <button
                class="create-button btn-block w-50 mx-auto my-2 d-flex align-items-center justify-content-center"
                @click="triggerInput"
                type="button"
                aria-label="Modifier la photo du profil"
              >
                <span class="button-text mr-2 d-none d-md-block"
                  >Modifier la photo du profil</span
                >
                <span class="button-text mr-2 d-md-none d-lg-none d-xl-none"
                  >
                    Modifier
                  </span>
                  <i class="fa-solid fa-id-card" aria-label="profile picture modification"></i>
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
              <div class="d-flex align-items-center justify-content-around">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label>Prénom</label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Prénom"
                    v-model="input.firstName"
                    class="text-dark mb-3 pl-lg-3"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-around">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label for="lastName">Nom</label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Nom"
                     v-model="input.lastName"
                    class="text-dark mb-3 pl-lg-3"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-around">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label for="email">Email</label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                     v-model="input.email"
                    class="mb-3 pl-lg-3 test"
                    disabled
                  />
                </div>
              </div>
              <div v-if="userData.admin" class="d-flex align-items-center">
                <div class="col-sm-2 d-none d-lg-block p-0">
                  <label for="admin">Statut</label>
                </div>
                <div class="col-sm-10">
                  <input
                    id="admin"
                    type="text"
                    placeholder="admin profile"
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
            <UserDeleteAccount />
        </div>
      </div>
    </div>
    <PostsList :userId="userData.id" />
  </div>
</template>

<script>

//: Imports
import { apiClient } from '../services/api-client';
import ProfileImage from '../components/ProfileImage';
import PostsList from '../components/PostsList.vue';
import Menu from '../components/Menu.vue';
import UserDeleteAccount from '../components/UserDeleteAccount.vue';

export default {
  name: 'ProfileVue',
  components: {
    ProfileImage,
    PostsList,
    Menu,
    UserDeleteAccount,
  },
  data() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return {
      userData,
      input: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      },
      selectedFile: null,
      url: null,
    };
  },
  methods: {
    onFileSelected(event) {
      //: Before modification =  onFileSelected()
      this.url = URL.createObjectURL(event.target.files[0]);
      this.selectedFile = event.target.files[0];
    },
    triggerInput() {
      this.$refs.fileUpload.click();
    },
    editUser() {
      let body = this.input;
      //: Check and fixed bug = !!this.selectedFile;
      const isFormData = !this.selectedFile;
      if (isFormData) {
        const formData = new FormData();
        formData.append('image', this.selectedFile);
        formData.append('user', JSON.stringify(body));
        body = formData;
      }
      apiClient.put('api/auth/edit', body, { isFormData }).then((res) => {
        localStorage.setItem('userData', JSON.stringify(res.user));
        this.userData = res.user;
        window.location.reload();
      });
    },
  },
  computed: {
    emptyInput() {
      return (
        !this.input.firstName.trim().length ||
        !this.input.lastName.trim().length
      );
    },
  },
};
</script>

<style lang="scss" scoped>

//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-pages-views/_Profile.scss" ;

</style>