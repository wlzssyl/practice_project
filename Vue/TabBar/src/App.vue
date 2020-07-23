<template>
  <div id="app">
    <tab-bar>      
      <tabbar-item>
        <i class="iconfont icon-shouye" slot="item-icon"></i>
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item>
        <i class="iconfont icon-faxian" slot="item-icon"></i>
        <div slot="item-text">分类</div>
      </tabbar-item>  
      <tabbar-item>  
        <i class="iconfont icon-icon-test25" slot="item-icon"></i>
        <div slot="item-text">购物车</div>
      </tabbar-item>  
      <tabbar-item>  
        <i class="iconfont icon-shequ" slot="item-icon"></i>
        <div slot="item-text">我的</div>
      </tabbar-item>  
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabar/TabBar'
import TabbarItem from './components/tabar/TabbarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabbarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
   @import './assets/font-icon/iconfont.css'
</style>
