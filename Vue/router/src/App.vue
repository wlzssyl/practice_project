<template>
  <div id="app">
    <h1>hahah</h1>
    <!-- router-link即链接路由组件 -->
    <router-link to="/Home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- router-view控制路由组件渲染的位置 -->
    <router-view></router-view>
  </div>
  <!-- router-link的一些属性补充
      1. tag="button" , 可以将其渲染成指定元素（例子中为按钮），默认为a
                      同时会使元素在被点击时添加新类名：vouter-link-active
      2. replace    将返回功能禁用，其实是跟.replaceState方法相同。
                    这里与.pushState做好区别，push()和back()是入栈和出栈
      3. active-class 可以修改tag带来的类名
       -->
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
