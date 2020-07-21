<template>
  <div>
    <h2>用户页</h2>
    <p>这里是用户页面，uid为{{userId}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    userId(){
      return this.$route.params.userId;
      //此处的$route.params.userId中$route是当前活跃的路由组件
      //userId是与index.js里path：对应，即拿到url尾部的uid
    }
  }
}
</script>

<style>

</style>