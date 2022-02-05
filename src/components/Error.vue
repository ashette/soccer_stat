<template>
  <v-alert text color="error" class="m-4">
    <h1 class="text-h1">
      {{ error.code }}
    </h1>
    <div>{{ error.title }}</div>

    <v-divider class="my-4 error" style="opacity: 0.22"></v-divider>

    <v-row align="center" no-gutters>
      <v-col class="grow">
        {{ error.message }}
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="shrink">
        <v-btn color="error" outlined v-if="error.homepage" to="/">
          Go to homepage
        </v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  props: ["errorCode"],
  data: () => ({
    error: {
      code: null,
      title: null,
      message: null,
      homepage: true,
    },
  }),
  mounted() {
    this.error.code = this.errorCode;

    switch (this.errorCode) {
      case 400:
        this.error.title = "Bad request";
        this.error.message = "You've sent a bad request";
        break;
      case 403:
        this.error.title = "Access denied / Forbidden";
        this.error.message =
          "This page you were trying to reach is absolutely forbidden for some reason";
        break;
      case 404:
        this.error.title = "OOPS! Page does not exist :(";
        this.error.message = "The requested URL was not found on this server";
        break;
      case 429:
        this.error.title = "Too many requests";
        this.error.message = "Please try later";
        break;
      default:
        this.error.title = "Sorry something went wrong";
        this.error.message = "Please try later";
        this.error.homepage = false;
        break;
    }
  },
};
</script>
