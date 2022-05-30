<template>
  <section>
    <h1>Hello Signup</h1>
    <h2>
      Avec <span class="logotext">Groupomania</span>, <br />
      restez en contact avec votre �quipe.
    </h2>
    <from>
      <p>S'inscrir</p>
      <input
        id="firstName"
        type="text"
        placeholder="Pr�nom"
        v-model="input.firstName"
        class="account-input text-dark mb-2 mt-4 pl-3 w-100"
        aria-label="�crire votre pr�nom"
      />
      <input
        id="lastName"
        type="text"
        placeholder="Nom"
        v-model="input.lastName"
        class="account-input text-dark mb-2 pl-3 w-100"
        aria-label="�crire votre nom"
      />
      <input
        id="email"
        type="email"
        placeholder="@"
        v-model="input.email"
        class="account-input text-dark mb-2 pl-3 w-100"
        aria-label="�crire votre adresse mail"
      />
      <input
        id="password"
        type="password"
        placeholder="Mot de passe"
        v-model="input.password"
        class="account-input text-dark mb-2 pl-3 w-100"
        aria-label="�crire votre mot de passe"
      />
      <button
        v-on:click.stop="signup()"
        type="submit"
        id="signup-button"
        class="btn btn-outline-info"
        aria-label="S'inscrire"
      >
        Inscription
                </button>
                <p class="my-3 text-danger">{{ errorMessage }}</p>
                 <p class="font-small grey-text d-flex justify-content-center mb-1">
              Vous avez d�j� un compte ?
              <router-link to="/login" class="font-weight-bold ml-1">
                Connectez-vous</router-link>
    </from>
  </section>
</template>

<script>
export default {
  name: 'Signup',
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
            this.errorMessage = 'Erreur de connexion';
          });
      } else {
        this.errorMessage = 'Veuillez renseigner les champs ci-dessus :-(';
      }
    },
  },
}
</script>

<style lang="scss">
span.logotext {
  color: white;
  font-weight: 800;
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
}
a {
  text-decoration: none;
  color: #0180ff !important;
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
</style>