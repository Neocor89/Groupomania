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
export default {

}
</script>
