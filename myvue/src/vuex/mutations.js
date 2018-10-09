export default {
  ADD (state, payLoad) {
    state.num += payLoad
    console.log(state.num)
  },
  CUT (state, payLoad) {
    state.num -= payLoad
    console.log(state.num)
  }
  // GETPATH (state, payLoad) {
  // },
  // GETDATA (state, payLoad) {
  //   state.data = payLoad
  // },
  // GETPAGEDATA (state, payLoad) {
  //   state.pageData = payLoad
  // }
}
