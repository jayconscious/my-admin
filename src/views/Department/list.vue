<template>
  <div>
    <h2>这是列表页面</h2>
    <base-table :data="data" :columns="columns"></base-table>
  </div>
</template>

<script>
import BaseTable from '@/components/Base/BaseTable'
export default {
  data() {
    return {
      data: [
        {
          name: 'zzy',
          age: '18',
          status: 1,
        },
        {
          name: 'syx',
          age: '20',
          status: 0,
        }
      ],
      columns: [
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '年龄',
          prop: 'age'
        },
        {
          label: '状态',
          prop: 'status',
          formatter: this.statusFormtter
        }
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
      console.log(status)
      let name = ''
      this.statusMap.map( item => {
        if (item.status === status) {
          name = item.statusName
        }
      })
      return name
    }
  }
}
</script>

<style>

</style>
