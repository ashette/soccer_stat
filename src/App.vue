<template>
  <v-app>
    <NavbarComponent />

    <v-main class="d-flex flex-column">
      <v-container fluid class="main-container__wrap d-flex">
        <v-container fluid class="main-container px-sm-8 my-8 rounded-lg">
          <router-view />
        </v-container>
      </v-container>
    </v-main>

    <v-footer app absolute class="justify-center">
      <div class="footer">
        <p class="footer-text text-center font-weight-light">
          Soccer statistics. 2022 &copy; All rights reserved.
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
export default {
  components: { NavbarComponent },
};
</script>


<style lang="scss">
@import "./assets/styles/index.scss";
</style>
