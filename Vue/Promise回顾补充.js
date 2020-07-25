/***************************************************
 * 1.链式编程
 *  - promise就是把多层回调变成了链式代码，优化了代码风格
 */
new Promise ((resolve,reject) => {
  setTimeout(() => {
    resolve("第一次异步请求,1");
  }, 1000);
}).then((res) => {
  //请求结束后进行一些处理
  console.log(res);
  return Promise.resolve(res+'1');
}).then((res) => {
  console.log(res);
  return Promise.resolve(res+'1');
}).then((res) => {
  console.log(res);
  return Promise.reject("err message");
}).catch((err) => {  //catch是reject拒绝后调用的函数
  console.log(err);
})
/*************************************************
 * 2.promise.all
 *  - Promise.all()的参数是一个数组，或者是可迭代对象如map
 *  - 数组的元素是Promise对象，即不同的异步请求
 *  - .all方法可以等数组里所有的异步完成之后在做其他使其
 *  - Promise.all(plist).then((results)=>{...}，)
 *     这里then的参数results是将数组plist里的所有promise对象中的
 *     resolve()里传来的参数封装起来的数组
 */