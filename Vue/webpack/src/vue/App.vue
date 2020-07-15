<template>
  <div>
    <p>vue组件</p>
    <p class="app">{{cmessage}}</p>
  </div>
</template>

<script>
export default {
      data(){
        return {cmessage:"组件数据"}
      }
}
</script>

<style>
  .app{color: aqua;}
</style>