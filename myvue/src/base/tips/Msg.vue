<template>
  <div class="msg-box">
    <span class="msg-close" v-if="showCloseBtn" @click="close">X</span>
    <h5 class="msg-title" v-if="showTitle">{{title}}</h5>
    <div class="msg-content" v-html="content"></div>
    <div class="msg-operations">
        <button class="msg-cancel" v-if="showCancelBtn" @click="close">取消</button>
        <button class="msg-ensure" v-if="showEnsureBtn" @click="confirmFn">确认</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MsgBox',
  data () {
    return {
      title: 'default title',
      showCloseBtn: false,
      showTitle: false,
      showCancelBtn: false,
      showEnsureBtn: false,
      cancelBtnText: '取消',
      ensureBtnText: '确认',
      timer: null,
      closed: false
    }
  },
  methods: {
    async confirmFn () {
      if (typeof this.confirmCallback === 'function') {
        await this.confirmCallback()
        this.close()
      }
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    close () {
      console.log('start destroy')
      clearTimeout(this.timer)
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', (e) => {
      // console.log(e.keyCode)
      if (e.keyCode === 27) {
        this.close()
      }
    })
    // console.log(this.$el)
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.$destroy(true)
        // 完全销毁一个实例
        document.body.removeChild(this.$el)
      }
    }
  }
}
</script>
<style scoped>
.msg-box{
  width:300px;
  height:200px;
  background: rgba(255,255,255,.3);
  position: fixed;
  top:100px;
  left:30%;
}</style>
