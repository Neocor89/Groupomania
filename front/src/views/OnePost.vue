<template>
  <div>
    <Menu />

    <div class="row justify-content-center align-items-center flex-column">
      <div div="col-lg-6">
        <Post v-if="post" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { apiClient } from '../services/api-client';
// import router from '../router/index';
import Post from '../components/Post';
import Menu from '../components/Menu';
export default {
  name: 'OnePost',
  components: {
    Post,
    Menu,
  },
  data() {
    return {
      post: null,
    };
  },
  watch: {
    $route() {
      this.loadPost();
    },
  },
  async unmounted() {
    await this.loadPost();
  },
  methods: {
    async loadPost() {
      const res = await apiClient.get(`api/posts/${this.$route.params.postId}`);
      this.post = res.post;
    },
  },
};
</script>

<style lang="scss"></style>