<template>
  <div id="checkPending">{{this.$route.meta.title}}
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐问答" name="1">
          <el-table
          v-loading="loading"
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
            <el-table-column
              v-for="(value, key) in conTitles"
              align="center"
              :key="key"
              :prop="key"
              :label="value[0]"
              :width="value[1]">
            </el-table-column>
            <el-table-column
              prop="operate"
              label="操作"
              width="180">
              <template slot-scope="scoped">
                <button>取消推荐</button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="length">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="全部问答" name="2">
          <el-table
          v-loading="loading"
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
            <el-table-column
              v-for="(value, key) in conTitles"
              align="center"
              :key="key"
              :prop="key"
              :label="value[0]"
              :width="value[1]">
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="length">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { conManage } from '@/assets/tableTitles/index'
// import http from '@/utils/fetcher.js'
export default {
  name: 'CheckPending',
  data () {
    return {
      patterns: '',
      title: '待审核列表',
      activeName: '1',
      conTitles: conManage
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    handleClick (tab, event) {
      let conditions = Object.assign({}, this.conditions, {type: this.activeName * 1})
      this.setCondition(conditions)
      this.initData()
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleSizeChange (val) {
      let conditions = Object.assign({}, this.conditions, {pageSize: val})
      this.setCondition(conditions)
      this.initData()
    },
    handleCurrentChange (val) {
      let conditions = Object.assign({}, this.conditions, {pageNum: val})
      this.setCondition(conditions)
      this.initData()
    },
    ...mapActions({
      initData: 'CheckPending/getData',
      setCondition: 'CheckPending/setConditions'
    })
  },
  computed: {
    ...mapState({
      tableData: state => state.CheckPending.data,
      loading: state => state.CheckPending.loading,
      length: state => state.CheckPending.totalLength,
      conditions: state => state.CheckPending.conditions
    })
  }
}
</script>
<style scoped>
#elMain {
  width: 100%;
  height: 100%;
}
#elMain h3{
  width: 100%;
  height: 50px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
