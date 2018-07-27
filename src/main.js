// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import Vue from 'vue'
import 'lib-flexible/flexible'
import router from './router'
import utils from './lib/utils'

import App from './App'
//import VueAxios from 'vue-axios'

import css from './router/reset.css'

Vue.prototype.ajax=axios
Vue.prototype.$utils=utils

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
