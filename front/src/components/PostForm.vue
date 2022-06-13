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
          :placeholder="`Quoi de neuf,  ${userData.firstName} ?`"
          aria-label="écrire une publication"
          class="text-dark mb-2 mr-2 w-100"
        ></textarea>
      </div>
      <div
        id="preview"
        class="d-flex justify-content-center align-items-center"
      >
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
          <span class="mr-2 d-none d-md-block">Choisir un fichier</span>
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
        >
          <span class="mr-2 d-none d-md-block">Publier</span>
          <svg
            style="width: 24px; height: 24px; margin-bottom: 5px"
            viewBox="0 0 24 24"
          >
            <path fill="#17a2b8" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
        <input
          ref="fileInput"
          class="d-none"
          type="file"
          @change="onFileSelected"
        />
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
      return !this.value.trim().length && !this.url;
    },
  },
};
</script>

<style lang="scss">
#preview img {
  max-width: 100%;
  max-height: 500px;
}
.disabled {
  cursor: not-allowed;
}
.form-control {
  border: 1px solid rgba(192, 192, 192, 0.5);
  &:focus {
    border: none;
  }
}
.line {
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgba(192, 192, 192, 0.5);
}
.create-button {
  background: white;
  color: #747474;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  padding: 0.375rem 0.75rem;
  &:hover {
    background-color: #17a3b828;
  }
  &:active,
  &:focus {
    background-color: white !important;
    outline: none;
  }
}
</style>