// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import service from './utils/service'
import router from './router'
// import particles from 'particles.js'
import particles from '../static/js/particles.min'
// store
import store from './vuex'
import myInput from './base/input/index'
Vue.config.productionTip = false
// Vue.use(Vuex)
Vue.component('my-input', myInput)
Vue.use(service)
Vue.use(ElementUi)
Vue.use(particles)
// #3a76e5
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
