<template>
    <div class="home">
        <el-container>
            <el-header><Header /></el-header>
            <el-container>
                <el-aside width="auto"><Aside /></el-aside>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import Header from './Header'
import Aside from './Aside'
export default {
  name: 'Home',
  components: {
    Header,
    Aside
  },
  mounted () {
    // console.log('home', this.$store.state)
    // this.$store.dispatch('getData')
  },
  data () {
    return {
    }
  },
  methods: {
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
</style>
