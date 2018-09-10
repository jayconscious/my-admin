<template>
  <el-table
    ref="table"
    :data="data"
    v-bind="$attrs"
    >
    <!-- 没有slot -->
    <template v-for="(item, i) in columns">
      <el-table-column
        v-if="!item.hasOwnProperty('slot')"
        :key="i"
        v-bind="item">
      </el-table-column>
    <!-- 有slot -->
      <el-table-column
        v-if="item.hasOwnProperty('slot')"
        :key="i"
        v-bind="item"
        :slot="null"
        :prop="item.slot">
          <template slot-scope="scope">
            <slot :name="item.slot" v-bind="scope"></slot>
          </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    // table 数据
    data: {
      type: Array,
      default: () => []
    },
    // table-column 所取得键值
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  // created: {},
  // mounted: {},
  methods: {}
}
</script>

<style>

</style>
