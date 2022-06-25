<template>
  <div>
    <DeleteAccount @onDeleteAccount="confirmDeletion" />
  </div>
</template>

<script>
import { apiClient } from '../services/api-client';
import DeleteAccount from '../components/DeleteAccount';
export default {
  name: 'UserDeleteAccount',
  components: {
    DeleteAccount,
  },
  props: ['userProfile'],
  methods: {
    async confirmDeletion() {
      if (confirm('êtes-vous sûr de vouloir supprimer ce compte ?')) {
        await apiClient.delete(`api/users/${this.userProfile.id}`);
        window.location.reload();
      }
    },
  },
};
</script>

<style lang="scss"></style>