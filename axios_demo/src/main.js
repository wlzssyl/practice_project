import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


/*******************************************
 * axios网络请求
 * 安装 npm install axios --save
 * 导入 import axios form 'asios'
 */
//1.axios(config)简单实现
// axios({
//   url:'http://httpbin.org/', //请求地址
//   method:'get',//请求方式，get post delete put patch
//   params:{},  //与get配合使用，为get请求的网址进行参数拼接
//   data:{},  //与post配合使用，
//   baseURL:'', //这个是网址前缀，可以省去url中重复的前缀
//   timeout:3000  //超时设置
//   //还有其他设置可以查文档
// }).then(res => { //axios 是一个promise对象
//   console.log(res);
// })
// //2.axios.all([]),类似promise.all()
// axios.all([
//   axios({
//     url:'http://httpbin.org/'
//     //method不写默认get
//   }),
//   axios({
//     url:'http://httpbin.org/post',
//     method:'post'
//   })
// ]).then(results => {
//   console.log(results);
//   console.log(results[0]);
// })
//3.全局配置
//axios.default.baseURL = '......'
//axios.default.timeout = ...

/*********************************************************
 * 4.axios实例
 *  - 上面的axios请求都是全局请求
 *  - 创建axios实例，可以从不同服务器发送请求
 */
// const instance = axios.create({
//   baseURL:'http://152.136.185.210:8000/api/n3',
//   timeout:5000
// })
// instance({
//   url:'/recommend'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });
 //实例后可以再写一个与上面不同地址或者其他配置不同的axios请求
// instance({
//   url:'home/multidata'
// }).then(res =>{
//   console.log(res);
// })
/****************************************
 * 使用网络封装
 */
import {request} from './network/request'
request(
  {url:'./recommend'}
).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})