<template>
    <div class="box" id="particles-js">
        <el-form :model="loginObj" ref="loginObj" label-width="100px" class="demo-ruleForm">
            <!-- <el-form-item
                label="用户"
                prop="user"
                :rules="[
                { required: true, message: '用户不能为空'}
                ]"
            >
                <el-input type="text" v-model="loginObj.user" ></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="pwd"
                :rules="[
                { required: true, message: '密码不能为空'}
                ]"
            >
                <el-input type="text" v-model="loginObj.pwd" ></el-input>
            </el-form-item> -->
            <div class="formItem">
              <div class="labelItem">
                <label>用户名:</label>
                <my-input
                type="text" className="user"
                @handleBlur="userBlur"
                @updateValue="userValue"
                v-model="loginObj.user"
                ></my-input>
              </div>
              <div class="labelItem">
                <label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
                <my-input
                type="text" className="pwd"
                @handleBlur="pwdBlur"
                v-model="loginObj.pwd"
                ></my-input>
                <!-- {{@handleFocus="userFocus"  @updateValue="userValue"}}
                {{@handleFocus="pwdFocus"  @updateValue="pwdValue"}} -->
              </div>
            </div>
            <el-form-item class="btns">
                <el-button type="primary" @click="submitForm('loginObj')">提交</el-button>
                <el-button @click="resetForm('loginObj')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
// import messageFn from '@/utils/tips.js'
export default {
  name: 'Login',
  mounted () {
    particlesJS.load('particles-js', '../../static/data/particles.json')
    // messageFn('666')
    // this.$tips({
    //   message: 'this is msgbox',
    //   duration: 1500
    // })
  },
  data () {
    return {
      loginObj: {
        user: '',
        pwd: ''
      }
    }
  },
  methods: {
    userValue (val) {
      // console.log(val)
      this.loginObj.user = val
    },
    pwdValue (val) {
      this.loginObj.pwd = val
    },
    userBlur (val) {
      let reg = /^[a-zA-Z0-9_-]{4,16}$/
      // 用户名正则，4到16位（字母，数字，下划线，减号
      if (!val) {
        this.$message('用户名不能为空')
      } else {
        if (reg.test(val)) {
          this.$message('用户名格式正确')
          // this.alertFn()
          this.userValue(val)
          // console.log(this.loginObj)
        } else {
          this.$message('用户名格式错误')
        }
      }
    },
    pwdBlur (val) {
      let reg = /^[a-zA-Z0-9_-]{4,16}$/
      // 密码正则，4到16位（字母，数字，下划线，减号）
      if (!val) {
        this.$message('密码不能为空')
      } else {
        if (reg.test(val)) {
          this.$message('密码格式正确')
          this.pwdValue(val)
        } else {
          this.$message('密码格式错误')
        }
      }
    },
    // alertFn () {
    //   alert(1)
    // },
    submitForm (formName) {
      // console.log(this.loginObj)
      // this.$tips({
      //   duration: 3000,
      //   title: 'title about tips',
      //   content: 'content about tips', // 可写标签
      //   showCloseBtn: true,
      //   showCancelBtn: true,
      //   showEnsureBtn: true,
      //   ensureBtnText: '提交',
      //   onClose (vm) {
      //     console.log(vm)
      //   },
      //   confirmCallback () {
      //     return new Promise((resolve, reject) => {
      //       setTimeout(function () {
      //         resolve()
      //         console.log('confirm')
      //       }, 2000)
      //     })
      //   }
      // })
      this.$router.push('/home')
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //   //   alert('submit!')
      //     // get方法
      //     // this.$http.get('/api/getLogin', this.loginObj).then((res) => {
      //     //   console.log(res)
      //     //   console.log(this.loginObj)
      //     // })
      //     // post方法
      //     // this.$http.post('/api/postLogin', this.loginObj).then((res) => {
      //     //   console.log(res)
      //     //   console.log(this.loginObj)
      //     // })
      //     // jsonp
      //     // this.$http.jsonp('/api/jsonp', this.loginObj).then((res) => {
      //     //   console.log(res)
      //     //   console.log(this.loginObj)
      //     // })
      //     // this.$router.push('/computed')
      //     this.$router.push('/home')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.box{
    width:100%;
    height:100%;
    background: url('../assets/bg.jpg') no-repeat;
    /* background:blue; */
    background-size:cover;
}
.demo-ruleForm{
    width:420px;
    height:300px;
    background:rgba(0,0,0,.3);
    border-radius: 10px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    padding:60px;
}
.formItem{
  width:300px;
  height:150px;
}
.labelItem{
  width:100%;
  height:50px;
}
.labelItem label {
  display: inline-block;
  width:60px;
  height:50px;
  line-height:50px;
  text-align: right;
  color:#fff;
}
.labelItem input{
  height:36px;
  border:0;
}
.btns{
  transform: translate(-30px,0)
}
</style>
