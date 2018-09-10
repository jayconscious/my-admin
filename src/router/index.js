import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Auth/login'
import Test from '../views/Test/test'
import Dashboard from '@/layout/Dashboard'

import List from '@/views/Department/list'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 诊所相关页面
    {
      path: '/clinic',
      component: Dashboard,
      children: [{
        path: '/clinic/department',
        name: 'departmentList',
        component: List
      }]
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

router.beforeEach((to, form, next) => {
  // console.log(to)
  // console.log(form)
  // console.log(next)
  next()
})

export default router
