<template>
  <Loader v-if="isLoading" />
  <Error v-else-if="errorCode" :errorCode="errorCode" />
  <v-row v-else>
    <v-container>
      <div>
        <h1 class="py-5 text-center text-uppercase">
          Competitions list
        </h1>
      </div>

      <v-text-field
        v-model="filter"
        prepend-icon="mdi-magnify"
        label="Search by name"
      ></v-text-field>

      <v-list two-line>
        <v-list-item-group>
          <template v-for="(competition, index) in filteredCompetitions">
            <v-list-item
              :key="competition.id"
              :to="`/competitions/${competition.id}`"
            >
              <template>
                <v-list-item-avatar v-if="competition.emblemUrl">
                  <v-img :src="competition.emblemUrl"></v-img>
                </v-list-item-avatar>

                <v-list-item-avatar color="primary lighten-1" v-else>
                  <span class="white--text">{{
                    competition.name.charAt(0)
                  }}</span>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-text="competition.name"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-divider
              v-if="index < filteredCompetitions.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-row>
</template>

<script>
import MainService from "@/service/MainService.js";
import ErrorService from "@/service/ErrorService";
import Error from "@/components/Error.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: { Error, Loader },
  name: "home",
  data: () => ({
    isLoading: true,
    competitions: null,
    errorCode: null,
    filter: "",
  }),

  async mounted() {
    try {
      this.competitions = await MainService.getCompetitions();
    } catch (error) {
      this.errorCode = ErrorService.handleError(error);
    } finally {
      this.isLoading = false;
    }
  },

  computed: {
    filteredCompetitions() {
      if (this.competitions) {
        return this.competitions.filter((competition) => {
          return competition.name
            .toLowerCase()
            .includes(this.filter.toLowerCase());
        });
      }
      return false;
    },
  },
};
</script>
