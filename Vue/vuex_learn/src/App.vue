<template>
  <div id="app">
    <h2>APP组件</h2>
    <p>{{$store.state.count}}的平方为{{$store.getters.powerCounter}}</p>
    <button @click="addition">+1</button>
    <button @click="substraction">-1</button>
    <button @click="additionCount(3)">+3</button>
    <p>{{$store.getters.someStudents(20)}}</p>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/helloVuex"


export default {
  name: 'App',
  components:{
    HelloVuex
  },
  methods:{
    addition(){
      this.$store.commit('increment');
    },
    substraction(){
      this.$store.commit('decrement');
    },
    additionCount(num){
      this.$store.commit();
    }
  }
}
</script>

<style>

</style>
