import {name,age,gender} from "./js/a.js";
console.log(name,age,gender);

// 对css文件的依赖，可以使用common.js导入方法
require('./css/style.css');

// 对less文件的依赖, 即先npm less-loader安装包，然后去webpack.config.js里配置less-loader
require('./css/font.less');

//对img图片引入，在css文件中引入

//配置vue， 先npm install vue --save 再去配置
import Vue from "vue";

//引入App组件
import App from "./vue/App.vue";

new Vue({
  el:"#app",
  template:`<App></App>`,
  components:{
    App
  }
});

