import moment from "moment"
import store from '../store/index'
import Vue from 'vue'

Vue.use(store)

const DateApi = {
  fetchDateRanges: function () {
    Vue.$log.debug("fetchDateRanges")
    return store.getters.fetchDateRanges
  },
  fetchStartDate: function () {
    Vue.$log.debug("fetchStartDate")
    return store.getters.fetchStartDate
  },
  fetchEndDate: function () {
    Vue.$log.debug("fetchEndDate")
    return store.getters.fetchEndDate
  }
}

export default DateApi