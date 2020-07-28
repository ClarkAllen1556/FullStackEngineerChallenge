<template>
  <div id="app">
    <b-container style="height: 100%">
      <b-row>
        <b-col>
          <Navbar />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";

  export default {
    components: {
      Navbar,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
