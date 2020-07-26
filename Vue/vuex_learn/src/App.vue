<template>
  <div id="app">
    <h2>APP组件</h2>
    <p>{{$store.state.count}}</p>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
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
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
