<template>
  <div class="login-wrap">
    <el-form class="login-form" :rules="rules" :model="form" ref="ruleform" label-width="100px">
      <el-form-item prop="name" label="账号">
        <el-input v-model="form.name" typw="text"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <button type="primary" @click="turnTo">跳转</button>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
          rules: {
            name: [{
              required: true, message: '请输入账号', trigger: 'blur'
            }],
            password: [{
              required: true, message: '请输入密码', trigger: 'blur'
            }]
          },
          form: {
            name: '',
            password: ''
          }
        };
    },
    components: {},
    computed: {},
    methods: {
      turnTo() {
        this.$router.push({name: 'test'})
      }
    }
};
</script>

<style lang="sass" scoped>

</style>
