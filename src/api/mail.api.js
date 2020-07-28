import moment from "moment"
import store from '../store/index'
import Vue from 'vue'

Vue.use(store)

const MailApi = {
  fetchAllMail: function () {
    Vue.$log.debug("fetchAllMail")
    return store.getters.fetchAllMail
  },
  fetchMailById: function (id) {
    Vue.$log.debug("fetchMailById")
    const mails = this.fetchAllMail()

    return mails.find(mail => mail.id === id)
  },
  fetchMailReceivedDate: function ({ id, format }) {
    Vue.$log.debug("fetchMailReceivedDate")
    const mail = this.fetchMailById(id)

    return moment(mail.received).format(format)
  },
  fetchActiveMail: function () {
    Vue.$log.debug("fetchActiveMail")

    return store.getters.fetchActiveMail
  }
}

export default MailApi