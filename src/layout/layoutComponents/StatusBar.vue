<template>
  <el-header class="status_bar" style="text-align: right; font-size: 12px; width: 100%;">
    <h2>这是顶部状态栏</h2>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: 'StatusBar',
  data() {
    return {};
  },
  components: {},
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .status_bar {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 5em;
    background-color: #cccccc;
    border: 1px solid black;
    & > h2{
      display: inline-block;
    }
  }
</style>

