<template>
<div>
  <h2>首页</h2>
  <p>这是首页组件</p>
  <router-link to='/home/news'>新闻</router-link>
  <router-link to='/home/message'>消息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return {path:'/home/news'}
  },
  created(){
    console.log('home created')
  },
  destroyed(){
    console.log('home destroyed')
  },
  activated(){   //activated和deactivated只有在keep-alive存在时才生效
    console.log('home 活跃')
    this.$router.push(this.path)
  },
  deactivated(){
    console.log('home 不活跃')
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style>

</style>