<template>
  <div>
    <div class="mx-auto border-0 shadow p-0 mb-2 mt-2 mt-lg-3 bg-white rounded">
      <div class="d-flex align-items-center">
        <div class="d-flex mr-3">
          <router-link
            :to="{ name: 'UserProfile', params: { userId: post.User.id } }"
          >
            <ProfileImage
              :src="post.User.imageUrl"
              customClass="post-profile-picture"
              divCustomClass="div-post-picture"
          /></router-link>
        </div>
        <div class="text-left">
          <router-link
            :to="{ name: 'UserProfile', params: { userId: post.User.id } }"
            ><p class="font-weight-bold mb-0">
              {{ post.User.firstName }} {{ post.User.lastName }}
            </p></router-link
          >
          <p class="text-secondary">
            {{ moment(post.createdAt).locale('fr').format('LL') }}
          </p>
        </div>
      </div>
      <EditPost :post="post" />

      <p class="card-text text-left mt-3 mb-0 mb-lg-3" v-if="post.content">
        {{ post.content }}
      </p>
      <div
        class="post d-flex align-items-center justify-content-center my-1 mb-lg-4"
        v-if="post.imageUrl"
      >
        <img
          v-b-modal="`modal-photo-${post.id}`"
          class="post__image"
          :src="post.imageUrl"
          alt=""
        />
        <div
          :id="`modal-photo-${post.id}`"
          size="xl"
          class="modal modal-photo"
          header-class="header-style"
        >
          <div slot="modal-title"></div>
          <div class="d-flex align-items-center justify-content-center">
            <img class="modal-photo__img" :src="post.imageUrl" alt="" />
          </div>
          <div slot="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiClient } from '../services/apiClient';
import router from '../router/index';
import EditPost from '../components/EditPost';
import ProfileImage from './ProfileImage';
import CommentsList from '../components/CommentsList';
import LikesList from '../components/LikesList';
export default {
  name: 'Post',
  components: {
    EditPost,
    ProfileImage,
    CommentsList,
    LikesList,
  },
  props: ['post'],
  async mounted() {
    const res = await apiClient.get(`api/posts/${this.post.id}/like`);
    this.likesThisPost = res.like;
  },
  data() {
    return {
      likesThisPost: false,
      likesCount: this.post.likesCount,
    };
  },
  methods: {
    async likeOrUnlikePost() {
      const res = await apiClient.post(`api/posts/${this.post.id}/likes`);
      if (res.like !== this.likesThisPost) {
        this.likesCount += res.like ? 1 : -1;
      }
      this.likesThisPost = res.like;
    },
    focusInput() {
      document.getElementById(`comment-area-${this.post.id}`).focus();
    },
  },
};
</script>

<style lang="scss">
.div-post-picture {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}
.post-profile-picture {
  height: 50px;
}
@media screen and (min-width: 280px) and (max-width: 769px) {
  .div-post-picture {
    width: 42px;
    height: 42px;
  }
  .post-profile-picture {
    height: 42px;
  }
}
.btn-block + .btn-block {
  margin-top: 3px;
}
.line {
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgba(192, 192, 192, 0.5);
}
.blue {
  color: rgb(32, 120, 244);
}
.react-btn {
  background: white;
  border: none;
  margin: 3px;
  color: #747474;
  border-radius: 0.25rem;
  font-weight: bold;
  padding: 0.375rem 0.75rem;
  &:focus {
    border: none !important;
    outline: none !important;
  }
  &:hover {
    color: #747474 !important;
    background-color: #17a3b828 !important;
  }
}
.like-btn {
  color: #747474;
  font-weight: normal;
  &:hover,
  &:focus,
  &:active {
    color: #747474 !important;
    font-weight: normal;
    background: none !important;
  }
}
.modal-photo {
  &__img {
    max-width: 100%;
    max-height: calc(100vh - 110px);
  }
}
.header-style {
  padding-bottom: 0;
  border-bottom: none;
}
</style>