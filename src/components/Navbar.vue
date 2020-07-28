<template>
  <div class="nav-bar">
    <b-nav>
      <DateSearch />
    </b-nav>
  </div>
</template>

<script>
  import DateSearch from "@/components/DateSearch.vue"

  export default {
    name: "Navbar",
    components: {
      DateSearch
    }
  };
</script>

<style scoped>
  .nav-bar {
    margin-bottom: 1em;
  }
</style>