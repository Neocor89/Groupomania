<template>
  <div>
    <EditButton
      :editingPost="true"
      :isCreator="post.userId == userData.id"
      :isAdmin="userData.admin"
      @onDelete="onDelete"
      :elementId="post.id"
      modifyText="Modifier la publication"
      deleteText="Supprimer la publication"
    />
    <div
        class="modal"
        :id="`modal-${post.id}`"
        title="Modifier la publication"
        ok-title="Enregistrer"
        ok-variant="light"
        @ok="onUpload"
        ok-only
      >
        <form>
          <PostForm
            :imgUrl="post.imageUrl"
            @onFileSelected="onFileSelected"
            v-model="content"
          />
        </form>
      </div>
    <EditBtn />
    </div>
</template>

<script>
import { apiClient } from '../services/api-client.js';
import { mapActions } from 'vuex';
import PostForm from './PostForm';
import EditBtn from './EditBtn';
export default {
  name: 'EditPost',
  components: {
    PostForm,
    EditBtn,
  },
  props: ['post'],
  data() {
    return {
      isCreator: "",
      isAdmin: "",
      content: this.post.content,
      userData: JSON.parse(localStorage.getItem('userData')),
      selectedFile: null,
    };
  },
  methods: {
    ...mapActions(['deletePost', 'modifyPost']),
    toggleActions() {
      this.areActionsVisible = !this.areActionsVisible;
    },
    async onDelete() {
      //: await this.deletePost(this.post.id);
      await apiClient.deletePost(this.post.id);
      this.displayNotification('Publication supprimée !');
    },
    onFileSelected(file) {
      this.selectedFile = file;
    },
    async onUpload() {
      if (!this.content.trim().length) return;
      await this.modifyPost({
        postId: this.post.id,
        selectedFile: this.selectedFile,
        content: this.content,
      });
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
@import "@/assets/scss/style-components-pages/_EditPost.scss" ;

</style>