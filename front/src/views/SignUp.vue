<template>
<div class="page__container">
   <div class="slogan">
      <h2 class="color__text py-3">
        <span class="text__slogan">Prennez contact avec votre équipe</span> <br />
      </h2>
    </div>
    <div class="container-fluid">
      <div class=" row text-center justify-content-center">
        <div class="col-lg-8">
        <!--: Avant <div class="col-12 lg-4"> -->
          <div
            class="card account-card border-0 shadow p-3 mt-1 bg-white rounded"
          >
            <div class="pt-sm-3 pt-lg-0">
              <p class=" card-text login-text h4">S'inscrire</p>
              <form>
                <div class="form-group">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Prénom"
                    v-model="input.firstName"
                    class=" input-group account-input text-dark mb-2 mt-4 pl-3 w-100"
                    aria-label="écrire votre pr�nom"
                  />
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Nom"
                    v-model="input.lastName"
                    class="account-input text-dark mb-2 pl-3 w-100"
                    aria-label="écrire votre nom"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="em@il"
                    v-model="input.email"
                    class="account-input text-dark mb-2 pl-3 w-100"
                    aria-label="écrire votre adresse mail"
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="input.password"
                    class="account-input text-dark mb-2 pl-3 w-100"
                    aria-label="écrire votre mot de passe"
                  />
                </div>

                <button
                  v-on:click.stop="signup()"
                  type="submit"
                  id="signup-button"
                  class="btn mt-3 btn__subscribe"
                  aria-label="S'inscrire"
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

//TODO : FINIR BACKEND + réintégrer CODE enlevé dans composants 
// import SignUp from '../components/SignUp.vue';
// import "bootstrap/dist/css/bootstrap.min.css";
export default {
 name: 'SignUp',
 components: {
  //  SignUp
 },
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
  }
}
</script>

<style lang="scss" scoped>

@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

.btn__subscribe {
  @include submit-btn;
  &:not([disabled]):focus {
    box-shadow: $shadow-focus;
  } &:hover {
      box-shadow: $shadow-hover;
  }
}


.page__container {
  background: rgba(255, 255, 255, 0);
}

span.text__slogan {
  color: $col-prim;
  font-weight: $w800;
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
}
a {
  text-decoration: $nothing;
}
@media screen and (min-width: 280px) and (max-width: 769px) {
  .account-card {
    .card-body {
      padding: 0.7rem;
    }
  }
  .shadow {
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.08) !important;
  }
  .login-text {
    font-size: $fsize-S;
  }
  .slogan {
    display: $nothing;
  }
}
</style>>

