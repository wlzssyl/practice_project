<template>
  <div class="tabbar-item" @click="tabbarClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else class="active"><slot name="item-icon-active"></slot></div>
    <div :style="color"><slot name="item-text"></slot></div>   
  </div>
</template>

<script>
export default {
  name:'TabbarItem',
  data(){
    return{}
  },
  computed:{
    isActive(){ //判断活跃组件path是否与props传来的path相同
      return this.$route.path.indexOf(this.path) != -1
    },
    color(){//如果组件活跃，则返回props传来的颜色数据， :style="color"动态绑定了样式
      return this.isActive? {color:this.activeColor}:{}
    }
  },
  props:{
    path:{
      type:String
    },
    activeColor:{
      type:String,
      default:"red"
    }
  },
  methods:{
    tabbarClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tabbar-item i{
    color: #000;
    font-size: 18px;
  }
  .tabbar-item{
    flex: 1 0 auto;
    margin-top: 5px;
  } 
  .tabbar-item div{
    font-size: 12px;
  }
  .tabbar-item .active i{
    color: deepPink;
  }
</style>