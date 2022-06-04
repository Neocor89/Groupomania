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
            class="card account-card border-0 shadow p-3 mb-5 mt-3 bg-white rounded"
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
              <router-link to="/login" class="font-weight-bold ml-1">
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

.btn__subscribe {
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
}

.btn__subscribe:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(240, 187, 154, 0.5);
}

.btn__subscribe:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(241, 198, 171, 0.5);
}


.page__container {
  background: rgba(255, 255, 255, 0);
}

span.text__slogan {
  color: #e76f51;
  font-weight: 800;
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
}
a {
  text-decoration: none;
  // color: #0180ff !important;
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
    font-size: 1.1rem;
  }
  .slogan {
    display: none;
  }
}
</style>>

