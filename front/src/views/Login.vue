<template>
  <div class="page-container">
    <div class="slogan">
      <h2>
        <span class="pb-3 logoText">Partager entre équipes</span> <br />
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
  </div>
</template>

<script>
import Signup from '../components/Signup';
import { apiClient } from '../services/api-client';
import router from '../router/index';

export default {
  name: 'LoginVue',
  components: {
    Signup,
  },
  data() {
    return {
      errorMessage: '',
      input: {
        email: '',
        password: '',
      },
    };
  },
  mounted() {
    if (this.$route.query.deletedAccount) {
      this.$bvToast.toast('Votre compte a bien été supprimé', {
        title: 'Notification',
        autoHideDelay: 4000,
      });
    }
  },
  methods: {
    login() {
      if (this.input.email != '' && this.input.password != '') {
        apiClient
          .post('api/auth/login', this.input)
          .then((data) => {
            if (!data.token) {
              this.errorMessage = 'Utilisateur introuvable';
            } else {
              localStorage.setItem('userToken', data.token);
              localStorage.setItem('userData', JSON.stringify(data.user));
              router.push({ name: 'Posts' });
            }
          })
          .catch((error) => {
            if (error.error) {
              return (this.errorMessage = error.error);
            }
            this.errorMessage = 'Problème lors de la connexion';
          });
      } else {
        this.errorMessage =
          'Veuillez renseigner les champs email et mot de passe !';
      }
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
@import "@/assets/scss/style-pages-views/_Login.scss";

</style>