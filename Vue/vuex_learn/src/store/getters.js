export const getters = {//类比计算属性
  powerCounter(state,getters){//getters中函数两个形参是固定的
    return state.count*state.count;
  },
  someStudents(state,getters){
    return function(age){ //这个返回的函数中的形参即为组件传来的数据
      return state.students.filter((s) =>{
        return s.age>=age;
      });
    }
  }
}