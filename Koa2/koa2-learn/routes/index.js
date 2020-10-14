const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  //主页面接口设置cookies
  ctx.cookies.set('pvid', Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    //在json接口读取cookies
    cookies: ctx.cookies.get('pvid')
  }
})

/**
 * async与await示例
 *  - async用于声明异步函数
 *  - await只能出现在async函数中，后面跟promise对象 
 *    const a = await new Promise(...);
 *    表示异步事件完成后将结果赋值给a，在异步事件完成前，等待该行代码完成再继续执行后面代码
 */
router.get('/testAsync', async (ctx) => {
  global.console.log('start', new Date().getTime())
  const a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      global.console.log('async a', new Date().getTime())
      resolve('a1');
    }, 1000);
  })
  const b = await 'b1';
  ctx.body = {
    title: 'koa2 json',
    a,
    b
  }
})


module.exports = router  //配置完成后导出该路由实例
