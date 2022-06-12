<template>
  <div>
    <DeleteAccount @onDeleteAccount="confirmDeletion" />
  </div>
</template>

<script>
import { apiClient } from '../services/apiClient';
import DeleteAccount from '../components/DeleteAccount';
export default {
  name: 'UserDeleteAccount',
  components: {
    DeleteAccount,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
    };
  },
  methods: {
    async confirmDeletion() {
      if (confirm('Veuillez confirmer la suppression définitive de ce compte ?')) {
        await apiClient.delete(`api/users/${this.userData.id}`);
        localStorage.clear();
        this.$router.push({
          path: '/login?deletedAccount=true',
        });
      }
    },
  },
};
</script>

<style lang="scss"></style>