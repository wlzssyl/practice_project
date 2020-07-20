import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 从components文件夹获取组件
import Home from '../components/Home.vue'
import About from '../components/About'

Vue.use(Router) //导入的Router要注册一下

export default new Router({
  //routes是路由表
  routes: [
    //路由默认值
    {
      path:'',
      redirect:'/home' //redirect重定向，即url后缀为空时，重定向到home
    },
    {
      path:'/Home', //url后缀为home时，路由到Home组件
      component:Home
    },
    {
      path:'/about',
      component:About
    }
  ]
})
