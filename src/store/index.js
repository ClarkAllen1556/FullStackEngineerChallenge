import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'core-js/features/promise'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mailPool: [],
    activeMail: [],
    dateRange: { startDate: "", endDate: "" }
  },
  mutations: {
    pushMail: function (state, mail) {
      mail.forEach(el => el.received = new Date(el.received))
      state.mailPool.push(...mail)

      Vue.$log.info(">> Mail pushed")
    },
    setActiveMail: function (state) {
      state.activeMail = state.mailPool.filter( mail => {
        return new Date(mail.received) >= state.dateRange.startDate &&
        mail.received <= state.dateRange.endDate
      })

      Vue.$log.info(">> ActiveMail pushed")
    },
    setStartDate: function (state, start) {
      console.log(start)
      state.dateRange.startDate = new Date(start)
      Vue.$log.info(">> StartDate updated")
    },
    setEndDate: function (state, end) {
      state.dateRange.endDate = new Date(end)
      Vue.$log.info(">> EndDate updated")
    },
    clearActiveMail: function (state) {
      state.activeMail = []
      Vue.$log.info(">> ActiveMail Cleared")
    }
  },
  actions: {
    updateDateRange: function ({ commit, state }, { startDate, endDate }) {
      return new Promise((resolve) => {
        Vue.$log.info(">> Updating Date Ranges")

        commit("setStartDate", startDate)
        commit("setEndDate", endDate)
        resolve(state)
      })
    },
    updateAllMail: function ({ commit, state }, mailList) {
      return new Promise((resolve) => {
        Vue.$log.info(">> Updating [ALL] mail")

        commit("pushMail", mailList);
        resolve()
      })
    },
    updateActiveMail: function (context, dateRange) {
      console.log(dateRange)
      Vue.$log.info(">> Updating [ACTIVE] mail")
      return context.dispatch("updateDateRange", dateRange).then((resp) => {
        context.commit('clearActiveMail')
        context.commit('setActiveMail')
        return resp
      })
    }
  },
  getters: {
    fetchAllMail: function (state) {
      Vue.$log.info(">> Fetch [ALL]")
      return state.mailPool
    },
    fetchActiveMail: function (state) {
      Vue.$log.info(">> Fetch [ACTIVE]")
      return state.activeMail
    },
    fetchMailById: function (state) {
      return function (id) {
        Vue.$log.info(`>> Fetch [ID] : ${id}`)
        return state.mailPool.find(mail => mail.id === id)
      }
    },
    fetchDateRanges: function (state) {
      Vue.$log.info(">> Fetch DateRanges")
      return state.dateRange
    },
    fetchEndDate: function (state) {
      Vue.$log.info(">> Fetch EndDate")
      return state.dateRange.endDate
    },
    fetchStartDate: function (state) {
      Vue.$log.info(">> Fetch StartDate")
      return state.dateRange.startDate
    }
  }
})