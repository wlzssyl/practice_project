import axios from 'axios'

/*************************************************
 * 网络封装
 */

export function request(config){
  return new Promise((resolve,reject) => {
    const instence = axios.create({
      baseURL:'http://152.136.185.210:8000/api/z8',
      timeout:5000
    })

    //请求拦截
    //instence.interceptors.request.use()方法要传两个函数作为参数
    instence.interceptors.request.use(config => {
      console.log(config);
      return config; //拦截后一定要return才能发出去
    },err => {
      console.log(err)
    })
    //响应拦截
    //instence.interceptors.request.use()方法与上相同，但第一个参数为res，即服务器返回的数据results
    instence.interceptors.request.use(res => {
      console.log(res);
      return res; //同样拦截后一定要return，return的就是接受的数据
    },err => {
      console.log(err);
    })

    //使用该网络请求axios实例
    instence(config).then(res => {resolve(res)})
    .catch(err => reject(err))
  })
}

//注意上面的promise中，instance本身也是一个promise实例
//instance异步成功后，调用resolve，即return new promise的resolve

/*请求拦截的作用：
 - config 中有不符合服务器的信息
 - 切换成加载图片
 - 登录等网络请求要携带信息
 */