<template>
  <div>

    <div class="form-group">
      <div class="d-flex align-items-center">
        <div class="d-flex mr-2 mr-lg-3 mt-2">
          <router-link :to="{ name: 'Profile' }">
            <ProfileImage
              :src="userData.imageUrl"
              customClass="post-profile-picture"
              divCustomClass="div-post-picture"
          /></router-link>
        </div>
        <textarea
          :value="value"
          @input="updateValue"
          id="content"
          :placeholder="`Publication de,  ${userData.firstName}`"
          aria-label="écrire une publication"
          class="text-dark mb-2 mr-2 w-100"
        ></textarea>
      </div>
      <div
        id="preview"
        class="d-flex justify-content-center align-items-center">
        <img class="mt-3" v-if="url" :src="url" alt="" />
      </div>

    </div>

    <div class="line mb-3"></div>

    <div class="form-group">
      <div class="d-flex justify-content-around">
        <button
          class="d-flex align-items-center justify-content-center create-button btn-block"
          @click="triggerInput"
          type="button"
          aria-label="Choisir un fichier"
        >
          <span class="mr-2 d-md-block">Choisir un fichier</span>
          <i class="fa-solid fa-folder-magnifying-glass"></i>
        </button>
        <button
          v-if="isCreating"
          :class="`d-flex align-items-center justify-content-center create-button btn-block ${
            emptyField ? 'disabled' : ''
          }`"
          :disabled="emptyField"
          type="submit"
          aria-label="Publier"
          @click="onFormSubmit"
        >
          <span class="mr-2 d-md-block">Publier</span>
         <i class="fa-solid fa-comment-plus"></i>
        </button>
        <input
          ref="fileInput"
          class="d-none"
          type="file"
          @change="onFileSelected"
        />
      </div>
    </div>

  </div>
</template>

<script>
// import { apiClient } from '../services/apiClient';
import ProfileImage from './ProfileImage';
export default {
  name: 'PostForm',
  components: {
    ProfileImage,
  },
  props: ['value', 'imgUrl', 'onFormSubmit', 'isCreating'],
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      url: this.imgUrl,
    };
  },
  watch: {
    onFormSubmit() {
      this.url = null;
    },
  },
  methods: {
    onFileSelected(event) {
      this.url = URL.createObjectURL(event.target.files[0]);
      this.$emit('onFileSelected', event.target.files[0]);
    },
    updateValue(value) {
      this.$emit('input', value);
    },
    triggerInput() {
      this.$refs.fileInput.click();
    },
  },
  computed: {
    emptyField() {
      return !this.value?.trim().length && !this.url;
    },
  },
};
</script>

<style lang="scss">
//: Ligne 41 & 53 sur span => d-none enlevé
//+ :: overall style ::
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

//+ :: component style ::
@import "@/assets/scss/style-components-pages/_PostForm.scss" ;

</style>