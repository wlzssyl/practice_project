import Vue from 'vue'
import Vuex from 'vuex'

//开发时会把motations,actions,getters和moducles抽离出去后导入
import {mutations} from './mutations'
import {actions} from './actions'
import {getters} from './getters'
import {a} from './mutations/mutation_a'

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
      ],
      teacher:{
        name:'ning',
        age:22
      }
    },
    mutations,
    actions,
    getters,
    modules:{//模块，提供抽取模块的功能
      a,
      b:{//b模块
        state:{},
        mutations:{},
        actions:{},
        getters:{}
      }
    }
  }
)

//导出store对象
export default store