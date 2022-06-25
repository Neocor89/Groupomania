<template>
<footer class="text-center text-white" style="background-color: #f1f1f1;">
  <!-- Grid container -->
  <div class="container pt-4">
    <!-- Section: Social media -->
    <section class="mb-1">
      <!-- Facebook -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.twitter.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.google.com"
        role="button"
        data-mdb-ripple-color="dark"
        alt="Logo Google"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
         href="https://instagram.com"
        role="button"
        data-mdb-ripple-color="dark"
        alt="Logo instagram"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://linkedin.com"
        role="button"
        data-mdb-ripple-color="dark"
        alt="Logo inkedin"
        ><i class="fab fa-linkedin"></i
      ></a>
      <!-- Github -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com"
        role="button"
        data-mdb-ripple-color="dark"
        alt="Logo github"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>

  <!--------- 
    Copyright 
  -->
  <div class="text-center text-dark p-3" style="background-color: rgba(231, 111, 81, 0.9);">
    © 2022 Copyright:
    <a class="text-dark" href="https://github.com/Neocor89">Groupomania.com</a>
  </div>
</footer>
</template>

<script>
export default {
  name: 'FooterVue'
}
</script>

<style> 



@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";


@import "@/assets/scss/style-components-pages/_Footer.scss";

</style>