<template>
  <div class="dashboard_wrap">
    <Menu></Menu>
    <div class="dashboard_right">
      <status-bar></status-bar>
      <div class="main_wrap">
        <router-view></router-view>
      </div>
    </div>
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

<style lang="scss" scoped>
.dashboard_wrap {
  height: 100%;
  width: 100%;
}
.main_wrap {
  margin-top: 100px;
  width: 100%;
}
.dashboard_right {
  position: relative;
  float: right;
  width: calc(100% - 200px);
  height: 100%;
}
</style>
