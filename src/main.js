// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const axiosConfigured = axios.create({
  baseURL: 'http://test1.dev/api'
})

Vue.use(VueAxios, axiosConfigured)
Vue.use(VueRouter)

const router = new VueRouter({routes})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
