<template>
  <div>
    <!--:: Gestion Suppression eidtion text user ::-->
    <button @click="toggleActions"
      v-if="isAdmin || isCreator == true"
      :class="customClass"
      class="post-button d-block position-absolute"
      aria-label="Afficher les actions"
    >
      <i class="fa-solid fa-unlock-keyhole"></i>
    </button>
    <div
      v-bind:class="`${
        classCollapse || ''
      }  mt-2 position-absolute ${
        areActionsVisible && 'visible'
      }`"
    >
      <div class="card border-0" @click="toggleActions">
        <p class="card-text" v-if="isCreator">
          <button
            class="text-left w-100"
            v-if="editingPost && isCreator == true"
            block
            v-b-modal="`modal-${elementId}`"
            aria-label="Modifier"
          >
          <i class="fa-solid fa-pencil mr-2 mr-lg-3"></i>
            ><span>{{ modifyText }}</span></button
          >
          <button
            class="text-left w-100"
            v-if="!editingPost && isCreator == true"
            block
            @click="clickedEditButton"
            aria-label="Modifier"
          >
            <i class="fa-solid fa-pencil mr-2 mr-lg-3"></i>
            ><span>{{ modifyText }}</span></button
          >
          <slot></slot>
        </p>
        <p class="card-text">
          <button
            class="text-left w-100"
            v-if="isAdmin || isCreator == true"
            block
            v-on:click="onDelete"
            aria-label="Supprimer"
            ><i class="fa-solid fa-trash-xmark mr-2 mr-lg-3"></i>
            <span>{{ deleteText }}</span></button
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { apiClient } from '../services/api-client.js';
export default {
  name: 'EditBtn',
  props: [
    'post',
    'customClass',
    'classCollapse',
    'isAdmin',
    'isCreator',
    'elementId',
    'modifyText',
    'deleteText',
    'editingPost',
  ],
  data() {
    return {
      areActionsVisible: false,
    };
  },
  methods: {
    toggleActions() {
      this.areActionsVisible = !this.areActionsVisible;
    },
    async onDelete() {
     await this.$emit('onDelete');
    },
    async clickedEditButton() {
      this.$emit('clickedEditButton');
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
@import "@/assets/scss/style-components-pages/EditBtn.scss";

</style>