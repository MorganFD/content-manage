export default {
  filterPageData: (state) => (param) => {
    // console.log('state', state)
    console.log(param)
    // console.log(state.data && state.data.default.filter((item) => item.name === param))
    let arr = []
    arr = state.data && state.data.default
    console.log(arr)
    return arr.length > 0 && arr.filter((item) => item.name === param)
  }
}
