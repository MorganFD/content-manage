<template>
  <div class="header"><span>header</span><i class="el-icon-tickets" @click="changeCollapse"></i></div>
</template>
<script>
import Bus from '../../utils/bus.js'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    changeCollapse () {
      Bus.$emit('isCollapse')
    }
  }
}
</script>
<style scoped>

</style>
