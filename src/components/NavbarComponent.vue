<template>
  <div class="header">
    <v-app-bar app absolute class="deep-purple lighten-2 white--text">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up white--text"
        @click="menu = !menu"
      ></v-app-bar-nav-icon>
      <v-toolbar-title to="/">Soccer Stat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text to="/" class="white--text"> Home </v-btn>
        <v-btn text to="/teams" class="white--text"> Teams </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="menu" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/teams">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Teams</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: false,
  }),
};
</script>
