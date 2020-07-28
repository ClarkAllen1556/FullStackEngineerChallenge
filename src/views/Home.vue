<template>
  <div class="home">
    <b-row>
      <b-col>
        <p>
          <strong>Results: {{ fetchedMail.length }} mails(s)</strong>
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <MailTable v-if="fetchedMail.length > 0" :mailList="getMails" />
        <hr v-else />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import MailTable from "@/components/MailTable.vue";
  import MailApi from "../api/mail.api";

  export default {
    name: "Home",
    components: {
      MailTable,
    },
    data() {
      return {
        fetchedMail: [""],
      };
    },
    created: function () {
      // this.fetchedMail = MailApi.fetchMailReceivedDate()
    },
    computed: {
      getMails: function () {
        return MailApi.fetchActiveMail()
      },
    },
    watch: {
      fetchedMail: function () {
        return MailApi.fetchActiveMail();
      },
    },
  };
</script>

<style>
</style>
