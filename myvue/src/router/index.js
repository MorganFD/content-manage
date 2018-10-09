import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
// import Home from '@/components/home/Home'
// import TeacherList from '../components/home/main/TeacherList.vue'
// import CheckPending from '../components/home/main/CheckPending.vue'
// import ConManage from '../components/home/main/ConManage.vue'
// import UserList from '../components/home/main/UserList.vue'
// import Withdraw from '../components/home/main/Withdraw.vue'
const Login = (resolve) => require(['../components/Login.vue'], resolve)
const Home = (resolve) => require(['../components/home/Home.vue'], resolve)
const TeacherList = (resolve) => require(['../components/home/main/TeacherList.vue'], resolve)
const CheckPending = (resolve) => require(['../components/home/main/CheckPending.vue'], resolve)
const ConManage = (resolve) => require(['../components/home/main/ConManage.vue'], resolve)
const UserList = (resolve) => require(['../components/home/main/UserList.vue'], resolve)
const Withdraw = (resolve) => require(['../components/home/main/Withdraw.vue'], resolve)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/checkPending',
      children: [
        {
          path: '/home/checkPending',
          name: 'CheckPending',
          component: CheckPending,
          meta: {
            title: '待审核列表'
          }
        },
        {
          path: '/home/teacherList',
          name: 'TeacherList',
          component: TeacherList,
          meta: {
            title: '导师列表'
          }
        },
        {
          path: '/home/withdraw',
          name: 'Withdraw',
          component: Withdraw,
          meta: {
            title: '提现管理'
          }
        },
        {
          path: '/home/userList',
          name: 'UserList',
          component: UserList,
          meta: {
            title: '用户列表'
          }
        },
        {
          path: '/home/conManage',
          name: 'ConManage',
          component: ConManage,
          meta: {
            title: '内容管理'
          }
        }
      ]
    }
  ]
})
router.beforeEach((from, to, next) => {
  // console.log(to)
  // console.log(to.meta)
  // const title = to.mata.title ? to.meta.title : 'default'
  // this.$store.dispatch('getData')
  next()
})
export default router
