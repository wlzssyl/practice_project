import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 从components文件夹获取组件
//注意，import这种引入方式在打包的时候，组件会全部打包到一个app.js文件，这样会使文件太大访问性能不好，可以使用懒加载引入
import Home from '../components/Home.vue'
import About from '../components/About'
//import User from '../components/User.vue'
//懒加载， const Home = ()=>import('../components/Home')
//懒加载会在打包时将该组件抽离到另一个js文件，只有访问了该组件才会加载js文件
const User = () => import('../components/User')

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
    },
    { //
      path:'/user/:userId',
      component:User
    }
  ],
  //去掉url中的#,即将模式改为history，默认为hash哈希
  mode:'history'
})
