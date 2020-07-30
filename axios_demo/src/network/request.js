import axios from 'axios'

/*************************************************
 * 网络封装
 */

export function request(config){
  return new Promise((resolve,reject) => {
    const instence = axios.create({
      baseURL:'http://152.136.185.210:8000/api/n3',
      timeout:5000
    })
    instence(config).then(res => {resolve(res)})
    .catch(err => reject(err))
  })
}

//注意上面的promise中，instance本身也是一个promise实例
//instance异步成功后，调用resolve，即return new promise的resolve
//此时