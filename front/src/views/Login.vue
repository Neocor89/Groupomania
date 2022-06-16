<template>
  <div class="page-container">
    <div class="slogan">
      <h2>
        <span class="pb-3 logoText"> Garder le contact avec votre équipe</span> <br />
      </h2>
    </div>
    <div class="container-fluid">
      <div class="row text-center justify-content-center">
         <div class="col-lg-6"><!-- Avant modif: class="col-lg-8 -->
          <div
            class="card account-card border-0 shadow p-3 mb-5 mt-3 bg-white rounded"
          >
            <div class="pt-sm-3 pt-lg-0">
              <p class="card-text login-text h4">Se connecter</p>
              <form role="form">
                <div class="form-group">
                  <input
                    id="email"
                    type="email"
                    placeholder="em@il"
                    v-model="input.email"
                    class="account-input text-dark mb-3 mt-4 pl-3 w-100"
                    aria-label="Entrez votre adresse mail"
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="input.password"
                    class="account-input text-dark mb-2 pl-3 w-100"
                    aria-label="Entrez votre mot de passe"
                  />
                </div>

                <button
                  v-on:click.stop="login()"
                  type="submit"
                  id="login-button"
                  class="btn btn__subscribe"
                  aria-label="Connexion"
                >
                  Connexion
                </button>
                <p class="my-3 text-danger">{{ errorMessage }}</p>
              </form>
            </div>
            <div class="line my-3"></div>

            <p class="font-small d-flex justify-content-center mb-1">
              Vous n'êtes pas encore inscrit ?
              <router-link to="/signup">
                Rejoingez vos collègues</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Profile /> -->
  </div>
</template>

<script>
//TODO : Revoir les 3 SPA à réintégrer et corriger
//TODO : FINIR BACKEND + réintégrer CODE enlevé dans composants 
// import Signup from '../components/Signup';
// import Profile from '../views/Profile';
// import { apiClient } from '../services/apiClient';
// import router from '../router/index';

export default {
  name: 'LoginVue',
  components: {
    // Signup,
    // Profile
  },
  // props: ['notification'],
  data() {
    return {
      errorMessage: '',
      input: {
        email: '',
        password: '',
      },
    };
  }

};
</script>

<style lang="scss" scoped>

// overall style 
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

// Component style
@import "@/assets/scss/style-pages-views/_Login.scss";

</style>