<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style>
  .tabbar{
    display: flex;
    position: absolute;
    text-align: center;
    height: 49px;
    left: 0;
    right: 0;
    bottom: 0px;
    background-color: #f5f5f5;
    box-shadow: 0 0 5px rgba(1, 1, 1, 0.2);
  }
</style>