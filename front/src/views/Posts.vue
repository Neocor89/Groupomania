<template>
  <div id="posts">
    <Menu />

    <div class="row align-items-center text-center justify-content-center">
      <div div="col-lg-6">
        <div
          class="card mx-auto mb-2 mt-lg-3 mb-lg-5 border-0 shadow px-lg-3 pt-lg-4 bg-white rounded"
        >
          <CreatePost />
        </div>
      </div>
    </div>
    <PostsList />
  </div>
</template>

<script>
// import { apiClient } from '../services/api-client';
// import router from '../router/index';
import { mapState } from 'vuex';
import CreatePost from '../components/CreatePost.vue';
import PostsList from '../components/PostsList.vue';
import Menu from '../components/Menu.vue';
export default {
  name: 'AllPosts',
  components: {
    CreatePost,
    PostsList,
    Menu,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
    };
  },
  computed: {
    ...mapState(['companyName']),
  },
};
</script>

<style lang="scss">


//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
// @import "@/assets/scss/style-pages-views/_Posts.scss";

</style>