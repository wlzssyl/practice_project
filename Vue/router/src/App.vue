<template>
  <div id="app">
    <h1>hahah</h1>
    <!-- router-link即链接路由组件 -->
    <router-link to="/Home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- router-view控制路由组件渲染的位置 -->
    <router-view></router-view>
  </div>
  <!-- router-link的一些属性补充 -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
