// let data = require('../assets/data')
// export default {
//   add (context, payLoad) {
//     context.commit('ADD', 10)
//   },
//   cut (context, payLoad) {
//     context.commit('CUT', 10)
//   },
//   getData ({commit}, payLoad) {
//     // let res = data.default.filter((item, index) => {
//     //   return item.name === payLoad
//     // })
//     // this.$http.get('/api/data').then((res) => {
//     //   console.log(res)
//     //   commit('GETDATA', res.data.data)
//     // })
//     commit('GETDATA', data)
//     // console.log('payLoad', payLoad)
//     // console.log(data)
//   },
//   getPageData ({commit}, payLoad) {
//     let pageData = []
//     console.log(data)
//     pageData = data.default.filter((item, index) => {
//       return item.name === payLoad
//     })
//     console.log(pageData)
//     commit('GETPAGEDATA', pageData)
//   }
// }
