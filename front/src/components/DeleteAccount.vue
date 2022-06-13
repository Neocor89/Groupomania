<template>
  <div>
    <div class="d-flex justify-content-center">
      <button
        class="delete-account d-flex justify-content-center align-items-center"
        aria-label="Supprimer le compte"
      >
        <p @click="onDeleteAccount" class="my-3 mr-1 mr-lg-2">
          Supprimer votre compte
        </p>
        <i icon="trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { apiClient } from '../services/apiClient';
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
.delete-account {
  font-size: $fsize-XXS;
  border-radius: 0.25rem;
  background-color: transparent;
  border: $nothing;
  &:hover {
    color: #f33232;
    text-decoration: underline;
  }
  &:focus {
    outline: $nothing;
  }
}
</style>