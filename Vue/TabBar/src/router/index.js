import Vue from 'vue'
import Router from 'vue-router'
//引入组件
const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')
const Profile = ()=>import ('../views/profile/Profile')

/**解决重复路由的报错，即重复点*************************/
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/********************************************************/

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    }
  ],
  mode:'history'
})

//导出路由
export default router
