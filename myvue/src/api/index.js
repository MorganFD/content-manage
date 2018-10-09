import http from '../utils/fetcher'
const API_HOST = 'http://47.94.202.70:8082'
// 47.94.202.70
// http://47.95.13.141:8082/api/list
// http://47.94.202.70:8082/getUserList
const getData = (url, params) => {
  return http.post(`${API_HOST}${url}`, params).then(res => res)
  // return http.post(url, {}).then(res => res)
}
export {
  getData
}
