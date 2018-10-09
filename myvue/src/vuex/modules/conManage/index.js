import { getData } from '../../../api/index'
const modules = {
  CheckPending: {
    namespaced: true,
    state: {
      data: [],
      loading: false,
      totalLength: 100,
      conditions: {
        pageSize: 5,
        pageNum: 1,
        type: 1
      }
    },
    actions: {
      getData: async ({commit, rootState}, payload) => {
        // console.log(rootState.CheckPending.conditions)
        // const { conditions } = this.a.CheckPending.state
        const conditions = rootState.CheckPending.conditions
        let result = await getData('/getUserList', conditions)
        // console.log(result)
        // commit('SETDATA', result.data.data)
        commit('CHANGELOADING')
        setTimeout(function () {
          commit('SETDATA', result.data.data)
          commit('CHANGELOADING')
        }, 1000)
        commit('GETDATALENGTH', result.data.totalLength)
      },
      setConditions ({ commit }, payload) {
        commit('SETCONDITIONS', payload)
      }
    },
    mutations: {
      SETDATA (state, payload) {
        state.data = payload
      },
      GETDATALENGTH (state, payload) {
        state.totalLength = payload
      },
      CHANGELOADING (state) {
        state.loading = !state.loading
      },
      SETCONDITIONS (state, payload) {
        // console.log(payload)
        state.conditions = payload
      }
    }
  }
}
export default modules
