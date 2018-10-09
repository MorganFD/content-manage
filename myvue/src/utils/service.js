import fetcher from './fetcher'
import tips from '../base/tips/index'
export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: fetcher
  })
  Object.defineProperty(Vue.prototype, '$tips', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: tips
  })
}
