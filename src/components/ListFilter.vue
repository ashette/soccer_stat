<template>
  <div class="filter my-5 d-flex justify-end align-center">
    <v-dialog
      ref="calendarMenuFrom"
      v-model="calendarMenuFrom"
      :close-on-content-click="false"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="updatedDateFrom"
          label="Choose date: From"
          append-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          class="datepicker-input mr-sm-8 flex-grow-0"
        ></v-text-field>
      </template>
      <v-date-picker v-model="updatedDateFrom" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="calendarMenuFrom = false">
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.calendarMenuFrom.save(updatedDateFrom)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>

    <v-dialog
      ref="calendarMenuTo"
      v-model="calendarMenuTo"
      :close-on-content-click="false"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="updatedDateTo"
          label="Choose date: To"
          append-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          class="datepicker-input flex-grow-0"
        ></v-text-field>
      </template>
      <v-date-picker v-model="updatedDateTo" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="calendarMenuTo = false">
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.calendarMenuTo.save(updatedDateTo)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>

    <v-btn
      class="filter-btn ml-sm-8"
      v-if="dateFrom && dateTo"
      color="secondary"
      @click="getFilteredData"
      >Find</v-btn
    >
  </div>
</template>

<script>
export default {
  props: {
    dateFrom: String,
    dateTo: String,
    getFilteredData: Function,
  },
  data: () => ({
    calendarMenuFrom: false,
    calendarMenuTo: false,
  }),
  computed: {
    updatedDateFrom: {
      get: function () {
        return this.dateFrom;
      },
      set(value) {
        this.$emit("update:updatedDateFrom", value);
      },
    },
    updatedDateTo: {
      get: function () {
        return this.dateTo;
      },
      set(value) {
        this.$emit("update:updatedDateTo", value);
      },
    },
  },
};
</script>