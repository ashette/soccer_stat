<template>
  <Loader v-if="isLoading" />
  <Error v-else-if="errorCode" :errorCode="errorCode" />
  <div class="d-flex flex-column" v-else>
    <template v-if="competition">
      <div>
        <h1>
          {{ competition.name }}
          <span class="competition-area py-4 text-muted"
            >({{ competition.area.name }})</span
          >
        </h1>
      </div>

      <div v-if="matches" class="matches-table">
        <div>
          <ListFilter
            :getFilteredData="filterByDate"
            :dateFrom="dateFrom"
            :dateTo="dateTo"
            :updatedDateFrom.sync="dateFrom"
            :updatedDateTo.sync="dateTo"
          />
          <MatchCalendar :matches="matches" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import MainService from "@/service/MainService";
import ErrorService from "@/service/ErrorService";
import Error from "@/components/Error.vue";
import MatchCalendar from "@/components/MatchCalendar.vue";
import ListFilter from "@/components/ListFilter.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: { Error, MatchCalendar, Loader, ListFilter },
  data: () => ({
    competition: null,
    competitionID: null,
    matches: null,
    errorCode: null,
    isLoading: true,
    dateFrom: null,
    dateTo: null,
  }),
  methods: {
    async getMatches(id, params = "") {
      try {
        const data = await MainService.getMatches(id, params);
        this.competition = data.competition;
        this.matches = data.matches;
      } catch (error) {
        this.errorCode = ErrorService.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    filterByDate() {
      if (this.dateFrom !== null && this.dateTo !== null) {
        const params = `?dateFrom=${this.dateFrom}&dateTo=${this.dateTo}`;
        this.$router
          .push({ query: { dateFrom: this.dateFrom, dateTo: this.dateTo } })
          .catch(() => {});
        this.getMatches(this.$route.params.id, params);
      }
    },
  },
  async mounted() {
    this.dateFrom = this.$route.query.dateFrom;
    this.dateTo = this.$route.query.dateTo;
    if (this.dateFrom && this.dateTo) {
      this.filterByDate();
    } else {
      await this.getMatches(this.$route.params.id);
    }
  },
};
</script>