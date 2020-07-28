import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLogger from 'vuejs-logger'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import DateRangePicker from 'vue2-daterange-picker'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import './styles/custom.css'

const isProduction = process.env.NODE_ENV === 'production';
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('date-range-picker', DateRangePicker)

Vue.config.productionTip = false

// >> loads up an array of mail filler
store.dispatch('updateAllMail', Object.values(require('./assets/mails.json')))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
