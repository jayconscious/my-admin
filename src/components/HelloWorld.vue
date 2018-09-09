<template>
<div class="hello">
    <el-row :gutter="10">
        <el-col :lg="{span: 12, offset: 6}">
            <el-form ref="form" :model="form" :rules="rules" label-width="100px">
            <!-- 活动区域 -->
                <el-form-item label="活动区域" prop="region">
                    <el-select class="w100h" v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              <!-- 动态表单 -->
              <template v-for="(period, index) in periods">
                <el-form-item :key="index" :label="index === 0 ? '时间选择': ''" :prop="index + 'time'">
                    <el-time-picker
                      :is-range="true"
                      :value="period"
                      range-separator="-"
                      format="HH:mm"
                      value-format="HH:mm"
                      placeholder="选择时间范围"
                      @change="handleTimeChange($event, index)">
                    </el-time-picker>
                    <el-button type="danger" icon="el-icon-minus" @click="minus(index)"></el-button>
                    <el-button v-if="index === periods.length -1" type="primary" icon="el-icon-plus" @click="plus(index)"></el-button>
                </el-form-item>
              </template>
            </el-form>
        </el-col>
    </el-row>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: "HelloWorld",
    data() {
        return {
            rules: {
              region: [{
                required: true, message: '请输入活动名称', trigger: 'blur'
              }],
              time: []
            },
            period : ['00:00', '22:00'],
            periods: [
              ['00:00', '23:59']
            ],
            selectableRange: "8:30 - 18:30",
            value4: "",
            msg: "Welcome to Your Vue.js App",
            form: {}
        };
    },
    watch: {
      periods: {
        'handler': (val, oldVal) => {
          console.log(val)
        },
        deep: true
      },
      'form.region': {
        'handler': (val, oldVal) => {
          console.log(val)
        },
        deep: true
      }
    },
    methods: {
      /**
       * 减少一项
       */
      minus (index) {
        if (this.periods.length === 1 && index === 0) {
          console.log('删不掉了')
        } else {
          this.periods.splice(index, 1)
        }
      },
      /**
       * 增加一项
       */
      plus () {
        if (this.periods.length >= 14) {
          this.$message.info('增减不了了！！！')
        } else {
          this.periods.push(['00:00', '23:59'])
        }
      },
      /**
       * 初始化自定义校验规则
       */
      initRules (periods) {

      },
      /**
       * 选择时间之后的回调
       */
      handleTimeChange (val, index) {
        console.log(val)
        console.log(index)
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
.w100h {
  width: 100%;
}
</style>
