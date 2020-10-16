const router = require('koa-router')()
const Person = require('../dbs/models/person')

router.prefix('/users')  //即路径必须有/users前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

//配置数据库接口
router.post('/addPerson', async function(ctx) {
  const person = new Person({
    name: ctx.request.body.name,
    age: ctx.request.body.age
  })
  let code
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code:code
  }
})

module.exports = router  //配置完成后导出该路由实例

/***
 * 数据库增删改查操作
 *  - 增加数据： curl -d "name=sun&age=18" http://localhost:3000/users/addPerson
 */