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
            <img class="modal-photo__img" :src="post.imageUrl" alt="post image" />
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
export default {
  name: 'Post',
  components: {
    EditPost,
    ProfileImage,
  },
  props: ['post']
};
</script>

<style lang="scss">

// overall style
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

// Component style
@import "@/assets/scss/style-components-pages/_Post.scss";

// .div-post-picture {
//   width: 50px;
//   height: 50px;
//   margin-bottom: 1rem;
// }
// .post-profile-picture {
//   height: 50px;
// }

//   .div-post-picture {
//     @include mobile-tablet-large {
//       width: 42px;
//       height: 42px;
//     }
//   }
//   .post-profile-picture {
//     @include mobile-tablet-large {
//     height: 42px;
//   }
// }

// .btn-block + .btn-block {
//   margin-top: 3px;
// }

// .line {
//   display: block;
//   width: $full-size;
//   height: 1px;
//   background-color: $bg-effect;
// }

// .react-btn {
//   background: $light;
//   border: $nothing;
//   margin: 3px;
//   color: $col-thrd;
//   border-radius: 0.25rem;
//   font-weight: $w800;
//   padding: 0.375rem 0.75rem;
//   &:focus {
//     @include without-borders;
//   }
//   &:hover {
//     color: $col-thrd !important;
//     background-color: $col-prim !important;
//   }
// }
// .like-btn {
//   color: $col-thrd;
//   font-weight: $w500;
//   &:hover,
//   &:focus,
//   &:active {
//     color: $col-thrd !important;
//     font-weight: $w500;
//     background: $nothing !important;
//   }
// }
// .modal-photo {
//   &__img {
//     max-width: $full-size;
//     max-height: calc(100vh - 110px);
//   }
// }
// .header-style {
//   padding-bottom: 0;
//   border-bottom: $nothing;
// }
</style>