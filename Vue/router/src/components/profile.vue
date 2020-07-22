<template>
  <div>
    <h4>个人信息如下</h4>
    <p>{{$route.query}}  </p>  
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    
  </div>
</template>

<script>
export default {
  name:'Profile'
}
</script>

<style>

</style>