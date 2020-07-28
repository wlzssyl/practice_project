<template>
  <div id="app">
    <h2>APP组件</h2>
    <p>{{$store.state.count}}的平方为{{$store.getters.powerCounter}}</p>
    <button @click="addition">+1</button>
    <button @click="substraction">-1</button>
    <button @click="additionCount(3)">+{{num}}</button>
    <p>{{$store.getters.someStudents(20)}}</p>
    <hello-vuex></hello-vuex>

    <p style="'color=red'">dispatch->actions->commit->mutations</p>
    <button @click="addGender(1)">actions</button>
    <p>{{$store.state.teacher}}</p>
  </div>
</template>

<script>
import HelloVuex from "./components/helloVuex"


export default {
  name: 'App',
  data(){
    return {num:5}
  },
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
      this.num = num;
      //commit()第一个参数是mutations里的函数 名，第二个参数是要传过去的数据
      // this.$store.commit('additionCount',num);    
      //也可以直接传过去Payload对象
      this.$store.commit({
          type:'additionCount',
          num
        })
    },
    addGender(gender){
      let sex;
      if(gender == 1){
        sex = '男';
      }else{
        sex = '女';
      }
      this.$store.dispatch('aUpdata',sex)
      .then((res) => {console.log(res);})
    }
  }
}
</script>

<style>

</style>
