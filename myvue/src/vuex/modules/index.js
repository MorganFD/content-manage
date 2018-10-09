// import http from '../../utils/fetcher'
import { getData } from '../../api/index'
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
    // getters: {
    //   getList (state) {
    //     // console.log(state.conditions)
    //     let stateData = state.data.data
    //     // console.log('statedata', stateData)
    //     let { pageNum, pageSize, type } = state.conditions
    //     let data = []
    //     if (type === 1) {
    //       data = stateData && stateData.filter((item, index) => {
    //         return item.type === type
    //       })
    //     } else {
    //       data = stateData && stateData
    //     }
    //     // console.log(pageNum, pageSize)
    //     // console.log(data)
    //     let listData = data && data.slice(pageSize * (pageNum - 1), pageSize * pageNum)
    //     // console.log(listData)
    //     state.totalLength = data && data.length
    //     return listData
    //   }
    // },
    actions: {
      // getData ({commit}, payload) {
      //   const { conditions } = this.state
      //   http.post('http://127.0.0.1:9000/api/getConList', conditions).then((res) => {
      //     console.log(res)
      //     // commit('SETDATA', res.data)
      //   })
      //   // setTimeout(function () {
      //   //   // commit('SETDATA', tableData)
      //   // }, 2000)
      //   // http://localhost:9000 数据库端口号
      //   // http.post('/api/data', {}).then((res) => {
      //   //   console.log(res)
      //   //   commit('SETDATA', res)
      //   //   commit('GETDATALENGTH', res.data.length)
      //   //   // commit('CHANGELOADING')
      //   // })
      // },
      // getData: async ({commit}, payload) => {
      //   // const { conditions } = this.state
      //   let result = await getData('/api/getConList', {})
      //   // console.log(result)
      //   console.log('SETDATA', result)
      //   // // console.log(commit)
      //   // commit('SETDATA', result.data)
      //   // commit('GETDATALENGTH', result.data.length)
      // },
      getData: async ({commit}, payload) => {
        // console.log(this)
        const { conditions } = this.a.CheckPending.state
        // console.log(this.a.CheckPending.state)
        // console.log(conditions)
        let result = await getData('/api/getConList', conditions)
        // console.log(result.data)
        commit('SETDATA', result.data)
        commit('GETDATALENGTH', result.totalLength)
      },
      // getData ({commit}, payload) {
      //   http.post('http://127.0.0.1:9000/api/getConList', {}).then((res) => {
      //     console.log(res.data)
      //     commit('SETDATA', res.data)
      //     commit('GETDATALENGTH', res.data.length)
      //   })
      // },
      setConditions ({commit}, payload) {
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
// ConManage: {
//   namespaced: true,
//   state: {
//     msg: 'this is conModule',
//     pageData: null
//   },
//   actions: {
//     changeMsg ({ commit }, payload) {
//       commit('CHANGEMSG', 'state.msg is changed')
//     }
//     // getPageData ({commit}, payload) {
//     // }
//   },
//   mutations: {
//     CHANGEMSG (state, payload) {
//       state.msg = payload
//     }
//   }
//   // getters: {
//   // }
// }
