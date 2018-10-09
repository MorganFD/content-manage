import Vue from 'vue'
let msgCom = Vue.component('MessageBox', {
  data: function () {
    return {
      message: ''
    }
  },
  template: '<div>{{message}}</div>'
})
let instance
let instances = []
let MsgConstructor = Vue.extend(msgCom)
// const message = new MsgConstructor()
const messageFn = (options) => {
  // console.log(message.$mount())
  // console.log(options)
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // let duration = options.duration
  // console.log(duration)
  instance = new MsgConstructor({
    data: options
  })
  // console.log('instance', instance)
  instance.vm = instance.$mount()
  // instance.vm.$el
  // console.log('vm', instance)
  document.body.appendChild(instance.vm.$el)
  instances.push(instance)
  console.log(instance.$data)
  return instance.vm
}
// console.log(message)
export default messageFn
