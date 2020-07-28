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
      ],
      teacher:{
        name:'ning',
        age:22
      }
    },
    mutations:{//方法,必须要通过这里对state中数据操作，才能监控到是哪个组件进行的操作
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
    },
    actions:{//异步操作都在actions中commit到muations
      aUpdata(context,sex){//这里的context相当于store
          //context.commit('addGender',sex);
          //下面你结合异步promise操作一波
          return new Promise((resolve,reject) => {
            setTimeout(() => {
              context.commit('addGender',sex);
              console.log('已经提交(更新)teacher信息');
              resolve('我是回调信息');
            }, 2000);
          })
      }
    },
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
    modules:{//模块，提供抽取模块的功能
      a:{//a模块
        state:{//模块的state取法是$store.state.a.message,即模块的state是以对象的形式保存在根state中
          message:"我是模块a的message"
        },
        mutations:{}, //其他的用法与根模块的用法差不多，可以看官方文档说明
        actions:{},
        getters:{}
      },
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