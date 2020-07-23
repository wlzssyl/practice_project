<template>
  <div class="tabbar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name:'TabbarItem'
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
</style>