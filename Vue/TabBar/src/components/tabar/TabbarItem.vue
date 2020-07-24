<template>
  <div class="tabbar-item" @click="tabbarClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="active"><slot name="item-icon-active"></slot></div>
    <div class="active"><slot name="item-text"></slot></div>   
  </div>
</template>

<script>
export default {
  name:'TabbarItem',
  data(){
    return{
      isActive:'true'
    }
  },
  props:{
    path:{
      type:String
    }
  },
  methods:{
    tabbarClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tabbar i{
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
  .active,.tabbar i{
    color: rgb(251, 114, 153);
  }
</style>