const router = require('koa-router')()

router.prefix('/users')  //即路径必须有/users前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router  //配置完成后导出该路由实例
