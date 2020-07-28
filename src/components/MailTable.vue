<template>
  <div class="mail-table">
    <b-table hover :items="getMail" :fields="fields">
      <template v-slot:cell(to)="data">
        <p>{{ printReceivers(data.item.to) }}</p>
      </template>
      <template v-slot:cell(attachment)="data">
        <p>{{ data.item.attachment.length > 0 ? "*" : ""}}</p>
      </template>
      <template v-slot:cell(received)="data">
        <p>{{ printReceivedDate(data.item.id) }}</p>
      </template>
    </b-table>
  </div>
</template>

<script>
  import MailApi from "../api/mail.api";
  import DateApi from "../api/date.api";

  export default {
    name: "MailTable",
    props: ["mailList"],
    data() {
      return {
        fields: [
          {
            key: "from",
            label: "From",
            sortable: false,
          },
          {
            key: "to",
            label: "To",
            sortable: false,
          },
          {
            key: "subject",
            label: "Subject",
            sortable: false,
          },
          {
            key: "attachment",
          },
          {
            key: "received",
            label: "Date",
            sortable: true,
          },
        ],
        mailArray: [],
      };
    },
    methods: {
      getMail: function () {
        this.mailArray = this.$props.mailList;
        return this.mailArray;
      },
      printReceivers: function (recips) {
        if (recips.length > 1) return `${recips[0]} +${recips.length - 1}`;

        return recips[0];
      },
      printReceivedDate: function (mailId) {
        this.$log.debug("printReceivedDate");
        console.log(
          MailApi.fetchMailBetweenDateRange({
            startDate: DateApi.fetchStartDate(),
            endDate: DateApi.fetchEndDate(),
          })
        );
        return MailApi.fetchMailReceivedDate({
          id: mailId,
          format: "YYYY/MM/DD",
        });
      },
    },
  };
</script>

<style>
</style>