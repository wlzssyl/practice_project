<template>
  <tab-bar>      
      <tabbar-item path='/home' activeColor="deepPink">
        <i class="iconfont icon-shouye" slot="item-icon"></i>
        <i class="iconfont icon-shouye" slot="item-icon-active"></i>
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path='/category' activeColor="deepPink">
        <i class="iconfont icon-faxian" slot="item-icon"></i>
        <i class="iconfont icon-faxian" slot="item-icon-active"></i>
        <div slot="item-text">分类</div>
      </tabbar-item>  
      <tabbar-item path='/cart' activeColor="deepPink">  
        <i class="iconfont icon-icon-test25" slot="item-icon"></i>
        <i class="iconfont icon-icon-test25" slot="item-icon-active"></i>
        <div slot="item-text">购物车</div>
      </tabbar-item>  
      <tabbar-item path='/profile' activeColor="deepPink">  
        <i class="iconfont icon-shequ" slot="item-icon"></i>
        <i class="iconfont icon-shequ" slot="item-icon-active"></i>
        <div slot="item-text">我的</div>
      </tabbar-item>  
    </tab-bar>
</template>

<script>
//maintabbar将app中的TabBar主体父组件抽离
import TabBar from './tabar/TabBar'
import TabbarItem from './tabar/TabbarItem'

export default {
  name:'MainTabbar',
  components:{
    TabBar,
    TabbarItem
  }
}
</script>

<style>

</style>