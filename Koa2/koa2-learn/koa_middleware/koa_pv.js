function pv(ctx) {
  ctx.session.count++  //在cookies中加入session值
  global.console.log('pv', ctx.path)
}

module.exports = function() {
  return async (ctx, next) => {
    pv(ctx)
    await next()
  }
}

/****cmd命令行代码说明
 *  - redis-cli
 *    运行redis-cli 在redis目录下运行
 *  - keys *   
 *    查看所有session值
 *  - get key值（即上面一行查到的值）
 *    查看该session值的信息
 *  - hget fix name 
 *     这个是route里面的一个接口fix的查看方式，具体的话看菜鸟教程的相关命令学习吧
 */