<template>
  <div class="login-wrap">
    <el-form class="login-form" :rules="rules" :model="form" ref="ruleform">
      <h3 class="title">诊所后台系统</h3>
      <el-form-item prop="name">
        <el-input v-model="form.name" typw="text" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button class="wid100" type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
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
      },
      submit() {
        // console.log(this.form)
        this.$router.push({name: 'departmentList'})
      }
    }
};
</script>

<style lang="scss" scoped>
  .login-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #2d3a4b;
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0 auto 40px;
      text-align: center;
      font-weight: 700;
    }
    .login-form {
      width: 300px;
      padding: 35px 35px 15px;
      margin: 120px auto;
    }
  }
</style>
