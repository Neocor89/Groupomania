<template>
<div class="page__container">
   <div class="slogan">
      <h2 class="color__text py-3">
        <span class="text__slogan">Partager et communiquer avec vos équipes</span> <br />
      </h2>
    </div>
    <div class="container-fluid">
      <div class=" row text-center justify-content-center">
        <div class="col-lg-8">
        <!-- Avant modif = <div class="col-12 lg-4"> -->
          <div
            class="card account-card border-0 shadow p-3 mt-1 bg-white rounded"
          >
            <div class="pt-sm-3 pt-lg-0">
              <p class=" card-text login-text h3">S'inscrire</p>
              <form>
                <div class="form-group">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Prénom"
                    v-model="input.firstName"
                    class=" input-group account-input text-dark mb-2 mt-4 pl-3 w-100"
                    aria-label="entrez votre prénom"
                  />
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Nom"
                    v-model="input.lastName"
                    class="account-input text-dark mb-2 pl-3 w-100"
                    aria-label="entrez votre nom"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="em@il"
                    v-model="input.email"
                    class="account-input text-dark mb-2 pl-3 w-100"
                    aria-label="entrez votre adresse mail"
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="input.password"
                    class="account-input text-dark mb-2 pl-3 w-100"
                    aria-label="entrez votre mot de passe"
                  />
                </div>

                <button
                  v-on:click.stop="signup()"
                  type="submit"
                  id="signup-button"
                  class="btn mt-3 btn__subscribe"
                  aria-label="Inscription"
                >
                  Inscription
                </button>
                <p class="my-3 text-danger">{{ errorMessage }}</p>
              </form>
            </div>
            <div class="line my-3"></div>

            <p class="font-small grey-text d-flex justify-content-center mb-1">
              Vous avez déjà un compte ?
              <router-link to="/login" class="mx-3">
                Connectez-vous</router-link
              >
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiClient } from '../services/api-client';
import router from '../router/index';
export default {
 name: 'SignUp',
  data() {
    return {
      errorMessage: '',
      input: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signup() {
      if (
        this.input.firstName != '' &&
        this.input.lastName != '' &&
        this.input.email != '' &&
        this.input.password != ''
      ) {
        apiClient
          .post('api/auth/signup', this.input)
          .then((data) => {
            if (!data.token) {
              this.errorMessage = data.error.errors[0].message;
            } else {
              localStorage.setItem('userToken', data.token);
              localStorage.setItem('userData', JSON.stringify(data.user));
              router.push({ name: 'Posts' });
            }
          })
          .catch((error) => {
            if (error.error) {
              return (this.errorMessage = error.error.errors[0].message);
            }
            this.errorMessage = 'Problème de connexion';
          });
      } else {
        this.errorMessage = 'Veuillez renseigner tous les champs !';
      }
    },
  },
}
</script>

<style lang="scss" scoped>

//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-pages-views/_SignUp.scss";

</style>>

