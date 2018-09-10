<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <Menu></Menu>
      <el-container>
        <div>
          <status-bar></status-bar>
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import StatusBar from './layoutComponents/StatusBar'
import Menu from './layoutComponents/Menu'
export default {
  name: 'Dashboard',
  data() {
    return {};
  },
  components: {
    StatusBar,
    Menu
  },
  computed: {},
  // created: {},
  // mounted: {},
  methods: {}
}
</script>

<style>

</style>
