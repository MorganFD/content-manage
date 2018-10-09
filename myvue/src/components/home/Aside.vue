<template>
    <el-menu
    default-active="this.$router.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#D3DCE6"
    text-color="#666"
    active-text-color="#333"
    unique-opened
    router
    >
      <el-submenu v-for="(item,index) in routes" :key="index" :index="index+''">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.menuName}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(itm,ind) in item.childMenu" :key="ind" :index="ind+''" :route="itm.route.path" @click="getMenuName(itm.menuName)">{{itm.menuName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>
<script>
import routes from '../../assets/routes.js'
import Bus from '../../utils/bus.js'
export default {
  name: 'Aside',
  mounted () {
    Bus.$on('isCollapse', () => {
      this.isCollapse = !this.isCollapse
    })
  },
  data () {
    return {
      routes,
      isCollapse: false,
      showRouter: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    getMenuName (param) {
      Bus.$emit('menuName', param)
    }
  }
}
</script>
<style scoped>
.home,.el-container {
    width:100%;
    height:100%;
}
.el-header {
  background-color: #3a76e5;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
