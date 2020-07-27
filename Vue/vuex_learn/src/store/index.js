import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

const store = new Vuex.Store(
  {
    state:{//状态
      count:10,
      students:[
        {id:1001,name:'孙悟空',age:18},
        {id:1002,name:'唐僧',age:28},
        {id:1003,name:'猪八戒',age:19},
        {id:1004,name:'沙和尚',age:20}
      ]
    },
    mutations:{//方法,必须要通过这里对state中数据操作，才能监控到是哪个组件进行的操作
      increment(){
        this.state.count++;
      },
      decrement(){
        this.state.count--;
      },
      
    },
    actions:{},
    getters:{//类比计算属性
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
    },
    modules:{}
  }
)

//导出store对象
export default store