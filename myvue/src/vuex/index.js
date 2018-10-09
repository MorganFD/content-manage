import Vue from 'vue'
import Vuex from 'vuex'
// 拆分引入
import state from './state'
import actions from './actions'
import mutations from './mutations'
// import getters from './getters'
import modules from './modules/conManage/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  // getters: {
  //   getTableData (state) {
  //     console.log(state)
  //
  //   }
  // },
  modules: modules
})
export default store
