import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

const store = new Vuex.Store(
  {
    state:{//状态
      count:10
    },
    mutations:{//方法,必须要通过这里对state中数据操作，才能监控到是哪个组件进行的操作
      increment(){
        this.state.count++;
      },
      decrement(){
        this.state.count--;
      }
    },
    actions:{},
    getters:{},
    modules:{}
  }
)

//导出store对象
export default store