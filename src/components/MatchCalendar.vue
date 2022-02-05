<template>
  <div v-if="matches.length" class="d-flex flex-column">
    <template>
      <v-data-table
        :headers="matchFields"
        :items="matches"
        :page.sync="page"
        @page-count="pageCount = $event"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1 flex-grow-1"
      >
        <template v-slot:[`item.formatedDate`]="{ item }">
          <div class="d-flex flex-wrap align-items-center">
            <span class="match-date me-4 my-1">
              {{ formatDate(item.utcDate) }}
            </span>

            <v-chip
              class="my-1"
              v-bind:class="
                item.status.toLowerCase() == 'finished'
                  ? 'status_finished white--text'
                  : 'status_not_finished'
              "
              >{{ item.status }}
            </v-chip>
          </div>
        </template>
        <template v-slot:[`item.opponents`]="{ item }">
          <strong>{{ item.awayTeam.name || "--?--" }}</strong> vs
          <strong>{{ item.homeTeam.name || "--?--" }}</strong>
        </template>
        <template v-slot:[`item.formatedScore`]="{ item }">
          {{ formatScore(item) }}
        </template>
      </v-data-table>
      <v-pagination
        v-model="page"
        color="secondary"
        class="my-2"
        total-visible="6"
        :length="pageCount"
      ></v-pagination>
    </template>
  </div>

  <div v-else class="text-center py-16">
    <p>No matches.</p>
  </div>
</template>

<script>
export default {
  props: {
    matches: Array,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    matchFields: [
      {
        text: "Date",
        value: "formatedDate",
        sortable: false,
      },
      {
        text: "Opponents",
        value: "opponents",
        sortable: false,
      },
      {
        text: "Score",
        value: "formatedScore",
        sortable: false,
      },
    ],
  }),
  methods: {
    formatDate(date) {
      const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      };
      return new Date(date).toLocaleString([], options);
    },

    formatScore(item) {
      const awayTeamScore =
        item.score.fullTime.awayTeam != null
          ? item.score.fullTime.awayTeam
          : "...";
      const homeTeamScore =
        item.score.fullTime.homeTeam != null
          ? item.score.fullTime.homeTeam
          : "...";
      return `${awayTeamScore}:${homeTeamScore}`;
    },
  },
};
</script>
