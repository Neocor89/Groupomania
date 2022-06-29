<template>
  <div>
    <div class="d-flex justify-content-center">
      <button
        class="delete-account d-flex justify-content-center align-items-center"
        aria-label="Supprimer le compte"
      >
        <p @click="onDeleteAccount" class="my-2 mr-1 mr-lg-2 btn_action--delete">
          Supprimer votre compte
        </p>
        <i class="fa-solid fa-trash-xmark"></i>
      </button>
    </div>
  </div>
</template>

<script>
// import { apiClient } from '../services/api-client.js';
// import { mapActions } from 'vuex'; 
export default {
  name: 'DeleteAccount',
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
    };
  },
  methods: {
    async onDeleteAccount() {
      this.$emit('onDeleteAccount');
    },
  },
};
</script>

<style lang="scss">

//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-components-pages/_DeleteAccount.scss";

</style>