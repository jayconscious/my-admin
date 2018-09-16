<template>
  <div>
    <h2>这是列表页面</h2>
    <base-table border stripe :data="data" :columns="columns">
      <template slot="operate" slot-scope="{row}">
        <el-button type="text" @click="handleClick(row)">点击确定</el-button>
      </template>
    </base-table>
  </div>
</template>

<script>
import BaseTable from '@/components/Base/BaseTable'
export default {
  data() {
    return {
      data: [{
          id: '1',
          name: 'zzy',
          age: '18',
          status: 1,
        },
        {
          id: '2',
          name: 'syx',
          age: '20',
          status: 0,
        },
        {
          id: '3',
          name: 'haha',
          age: '20',
          status: 0,
        },
        {
          id: '4',
          name: 'lj',
          age: '12',
          status: 0,
        }],
      columns: [
        { label: '姓名',  prop: 'name'  },
        { label: '年龄',  prop: 'age' },
        { label: '状态',  prop: 'status', formatter: this.statusFormtter },
        { label: '操作',  slot: 'operate' }
      ],
      statusMap: [
        {
          status: 1,
          statusName: '正常'
        },
        {
          status: 0,
          statusName: '异常'
        }
      ]
    };
  },
  components: {
    BaseTable
  },
  computed: {},
  //  created: {},
  //  mounted: {},
  methods: {
    statusFormtter (row, column, cellValue, index) {
      const { status } = row
      // console.log(status)
      let name = ''
      this.statusMap.map( item => {
        if (item.status === status) {
          name = item.statusName
        }
      })
      return name
    },
    handleClick (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
}
</script>

<style>

</style>
