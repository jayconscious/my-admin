<template>
    <div>
        <p>这就是一个测试文件</p>
        <div>
            <p>{{ getCountDes }}</p>
        </div>
        <button @click="turnTo">返回login</button>
        <p>{{ count }}</p>
        <p>计算得到的count: {{ computedCount }}</p>
        <el-button type="primary" @click="decrement">减少</el-button>
        <el-button type="success" @click="increment">增加</el-button>
        <el-button type="info" @click="operateWithDelay">异步操作</el-button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {};
    },
    components: {},
    computed: {
        computedCount() {
            return this.count + 10
        },
        // 写法一
        // ...mapState({
        //     count:state => state.count,
        // })
        // 写法二 getCountDes
        ...mapState(['count']),
        ...mapGetters(['getCountDes'])
    },
    // created: {},
    // mounted: {}, oprateWithDelay
    methods: {
        ...mapMutations(['increment', 'decrement']),
        ...mapActions(['operateWithDelay']),
        turnTo() {
            this.$router.push({path: 'login'})
        }
    }
};
</script>

<style>

</style>
