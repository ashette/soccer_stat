<template>
  <Loader v-if="isLoading" />
  <Error v-else-if="errorCode" :errorCode="errorCode" />
  <v-row v-else>
    <v-container>
      <div>
        <h1 class="py-5 text-center text-uppercase">Teams list</h1>
      </div>

      <v-text-field
        v-model="filter"
        prepend-icon="mdi-magnify"
        label="Search by name"
      ></v-text-field>

      <v-list two-line>
        <v-list-item-group>
          <template v-for="(team, index) in filteredTeams">
            <v-list-item :key="team.id" :to="`/teams/${team.id}/matches`">
              <template>
                <v-list-item-avatar v-if="team.crestUrl">
                  <v-img :src="team.crestUrl"></v-img>
                </v-list-item-avatar>

                <v-list-item-avatar color="primary lighten-1" v-else>
                  <span class="white--text">{{ team.name.charAt(0) }}</span>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="team.name"></v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-divider
              v-if="index < filteredTeams.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-row>
</template>

<script>
import MainService from "@/service/MainService";
import ErrorService from "@/service/ErrorService";

import Error from "@/components/Error.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "TeamList",
  components: { Error, Loader },
  data: () => ({
    teams: null,
    errorCode: null,
    isLoading: true,
    filter: "",
  }),

  async mounted() {
    try {
      const data = await MainService.getTeams();
      this.teams = data.teams;
    } catch (error) {
      this.errorCode = ErrorService.handleError(error);
    } finally {
      this.isLoading = false;
    }
  },

  computed: {
    filteredTeams() {
      if (this.teams) {
        return this.teams.filter((team) => {
          return team.name.toLowerCase().includes(this.filter.toLowerCase());
        });
      }
      return false;
    },
  },
};
</script>
