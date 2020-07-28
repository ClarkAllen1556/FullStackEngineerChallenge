<template>
  <div>
    <b-input-group>
      <template v-slot:prepend>
        <b-input-group-text>
          <img class="icon" :src="require('../assets/icon_calender.svg')" />
        </b-input-group-text>
      </template>
      <b-form-input :id="id" type="text" :name="id" />
      <b-input-group-append>
        <b-button @click="emitDTRangeChanged" variant="secondary">
          <img class="icon" :src="require('../assets/icon_search.svg')" />
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
  import $ from "jquery";
  import daterangepicker from "daterangepicker";

  export default {
    name: "DateRangePicker",
    props: ["id", "name"],
    mounted: function () {
      var self = this;
      var input = $('input[name="' + this.id + '"]');
      input.daterangepicker();
      input.on("apply.daterangepicker", function (ev, picker) {
        self.emitDTRangeChanged(picker);
      });
    },
    methods: {
      emitDTRangeChanged: function (picker) {
        this.$emit("DT_RANGE_CHANGED", picker);
      }
    }
  };
</script>

<style>
  .icon {
    height: 1em;
    width: 1em;
  }
</style>
