<template>
  <div>
    <Menu />

    <div class="row text-center justify-content-center">
      <div class="d-flex align-items-center flex-column">
        <ProfileImage
          :src="userProfile.imageUrl"
          customClass="profile-main-picture"
          divCustomClass="div-user-profile-picture"
        />
        <p class="user-name">
          {{ userProfile.firstName }} {{ userProfile.lastName }}
        </p>

        <AdminDeleteAccount
          v-if="userData.admin && !userProfile.deleted"
          :userProfile="userProfile"
        />
      </div>
    </div>

    <PostsList :userId="this.$route.params.userId" />
  </div>
</template>

<script>

// import { apiClient } from '../services/apiClient';
import ProfileImage from '../components/ProfileImage';
import PostsList from '../components/PostsList';
import Menu from '../components/Menu';
import AdminDeleteAccount from '../components/AdminDeleteAccount';

export default {
  name: 'UserProfile',
  components: {
    ProfileImage,
    PostsList,
    Menu,
    AdminDeleteAccount,
  },
  watch: {
    $route() {
      window.location.reload();
    },
  },
  data() {
    return {
      userProfile: {},
      userData: JSON.parse(localStorage.getItem('userData')),
    };
  },
  // async mounted() {
  //   const res = await apiClient.get(`api/users/${this.$route.params.userId}/`);
  //   this.userProfile = res.user;
  // },
};

</script>


<style lang="scss">

//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-pages-views/_UserProfile.scss";

</style>
