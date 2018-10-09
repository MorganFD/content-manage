/*
* Author: Morgan
* date
*/
import Vue from 'vue'
import msgCom from './Msg.vue'
let instance
let instances = []
let current = 1
const Message = (options) => {
  if (typeof options === 'string') {
    options = {
      msg: options
    }
  }
  const id = `msgTip_${current++}`
  // Vue.extend（）构造器，参数是一个包含组件选项的选项，此处为对象
  const MsgConstructor = Vue.extend(msgCom)
  // 创建实例 传递参数（默认）
  instance = new MsgConstructor({
    data: options
  })
  instance.id = id
  // 如果组件在实例化时未收到el选项，则处于未挂载状态，没有关联的DOM元素
  // $mount()方法用来手动挂载未挂载的实例，返回值为实例本身
  instance.vm = instance.$mount()
  instance.vm.msg = options.msg
  let userOnClose = options.onClose
  options.onClose = () => {
    Message.close(id, userOnClose)
  }
  // console.log(options)
  // 如果$mount()方法无参数，模板将被渲染为文档之外的元素，只能使用原生DOM API插入文档中
  document.body.appendChild(instance.vm.$el)
  instances.push(instance)
  // console.log('instances', instances)
  return instance.vm
}
Message.close = (id, userCloseFn) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userCloseFn === 'function') {
        userCloseFn(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}
export default Message
