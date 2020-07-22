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

import HomeNews from '../components/HomeNews'
import HomeMessage from '../components/HomeMessage'
import Profile from '../components/profile'

Vue.use(Router) //导入的Router要注册一下

const router = new Router({
  //routes是路由表
  routes: [
    //路由默认值
    {
      path:'',
      redirect:'/home' //redirect重定向，即url后缀为空时，重定向到home
    },
    {
      path:'/home', //url后缀为home时，路由到Home组件
      component:Home,
      meta:{title:'主页'},//元数据，注意是个对象
      //嵌套组件,这里配置完后在相应父组件里使用router-link即可
      children:[
        {
          path:'',
          redirect:'message'
        },
        {
          path:'news',//这里路径不用加/
          component:HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      path:'/about',
      component:About,
      meta:{title:'关于'}
    },
    { //:即动态绑定，并传给User组件
      path:'/user/:userId',
      component:User,
      meta:{title:'用户'}
    },
    {
      path:'/profile',
      component:Profile,
      meta:{title:'档案'}
    }
  ],
  //去掉url中的#,即将模式改为history，默认为hash哈希
  mode:'history',
  linkActiveClass:'active'
})

//路由对象的.beforeEach()方法，需要传入一个箭头函数
//箭头函数三个参数to是来时的历史Route对象，from是即将跳转的Route对象
router.beforeEach(
  (to,from,next) => {
    //console.log(to)
    document.title = to.matched[0].meta.title
    next() //next()不能少，否则无法继续跳转路由
  }
)

export default router;