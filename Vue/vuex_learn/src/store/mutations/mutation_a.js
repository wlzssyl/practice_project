export const a = {//a模块
    state:{//模块的state取法是$store.state.a.message,即模块的state是以对象的形式保存在根state中
      message:"我是模块a的message"
    },
    mutations:{}, //其他的用法与根模块的用法差不多，可以看官方文档说明
    actions:{},
    getters:{}
  }
