new Vue({
  el:"#app",
  template:`<App></App>`,
  data:{
    message:"vue组件"
  },
  components:{
    App:{
      template:`<div>
                 <p>vue组件</p>
                 <p>{{cmessage}}</p>
                </div>`,
      data(){
        return {cmessage:"组件数据"}
      }
    }
  }
});