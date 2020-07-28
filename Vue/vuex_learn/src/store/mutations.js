import Vue from 'vue'
export const mutations = {//方法,必须要通过这里对state中数据操作，才能监控到是哪个组件进行的操作
  increment(){
    this.state.count++;
  },
  decrement(){
    this.state.count--;
  },
  additionCount(state,num){
    // state.count += num;
    state.count += num.num;
  },
  addGender(state,sex){
    //state.teacher.gender = sex; //这个方法不能响应式更新页面，
    //因为只有state已经初始化过的属性才能被监控是否更新
    Vue.set(state.teacher,'gender',sex)
    //Vue.set()和Vue.delete()可以响应式更新页面
  }
}