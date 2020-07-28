<template>
  <div class="dt-search-field">
    <DateRangePicker id="dfdfd" v-on:DT_RANGE_CHANGED="onDateRangeChanged" />
  </div>
</template>

<script>
  import moment from "moment";
  import DateRangePicker from "@/components/DateRangePicker";
import MailApi from "../api/mail.api";
  export default {
    name: "FilterProductList",
    components: {
      DateRangePicker,
    },
    data() {
      return {
        dateRange: { startDate: "" , endDate: "" },
        // startDate: "",
        // endDate: "",
      };
    },
    methods: {
      onDateRangeChanged: function (picker) {
        this.dateRange.startDate = picker.startDate.format('YYYY-MM-DD')
        this.dateRange.endDate = picker.endDate.format('YYYY-MM-DD')

        this.$store.dispatch('updateActiveMail', this.dateRange)
      },
    },
  };
</script>

<style scoped>
  .dt-search-field {
    margin-top: 1em;
  }
</style>

