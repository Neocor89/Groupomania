<template>
  <div class="page-container">
    <div class="slogan">
      <h2>
        <span class="pt-3 logotext"> Garder le contact avec votre équipe</span> <br />
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
              <form>
                <div class="form-group">
                  <input
                    id="email"
                    type="email"
                    placeholder="em@il"
                    v-model="input.email"
                    class="account-input text-dark mb-2 mt-4 pl-3 w-100"
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
              <router-link to="/signup" class="btn__style">
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
//TODO : Problème sur les 3 composants à vérifier et corriger progréssivement
// import Signup from '../components/Signup';
// import { apiClient } from '../services/apiClient';
// import router from '../router/index';
export default {
  name: 'LoginVue',
  components: {
    // Signup,
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
//   mounted() {
//     if (this.$route.query.deletedAccount) {
//       this.$bvToast.toast('Votre compte a bien été supprimé', {
//         title: 'Notification',
//         autoHideDelay: 4000,
//       });
//     }
//   },
//   methods: {
//     login() {
//       if (this.input.email != '' && this.input.password != '') {
//         apiClient
//           .post('api/auth/login', this.input)
//           .then((data) => {
//             if (!data.token) {
//               this.errorMessage = 'Utilisateur introuvable';
//             } else {
//               localStorage.setItem('userToken', data.token);
//               localStorage.setItem('userData', JSON.stringify(data.user));
//               router.push({ name: 'Posts' });
//             }
//           })
//           .catch((error) => {
//             if (error.error) {
//               return (this.errorMessage = error.error);
//             }
//             this.errorMessage = 'Problème de connexion';
//           });
//       } else {
//         this.errorMessage =
//           'Veuillez renseigner votre email et mot de passe :-(';
//       }
//     },
//   },
};
</script>

<style lang="scss">

a {
  text-decoration: none;
  color: #e2421a !important;
}



.line {
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgba(192, 192, 192, 0.5);
}
.account-input {
  &:-webkit-autofill {
    border: none;
    -webkit-text-fill-color: #212529;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:focus {
    border: none;
    border-radius: 6px;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(32, 120, 244, 0.5);
  }
}

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

</style>