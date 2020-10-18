const router = require('koa-router')()
const person = require('../dbs/models/person')
const Person = require('../dbs/models/person')

router.prefix('/users')  //即路径必须有/users前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

//配置数据库接口
//加数据
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
//读数据
router.post('/getPerson', async function(ctx) {
  //.findOne方法只招第一个符合条件的
  const result = await Person.findOne({name: ctx.request.body.name})
  //.find方法找所有符合条件的，并封装到数组中
  const results = await Person.find({name: ctx.request.body.name})
  ctx.body = {
    code:0,
    result,
    results
  }
})
//更新数据（改）
router.post('/updatePerson', async function(ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).update({
    age: ctx.request.body.age
  })
  ctx.body = {
    code:0
  }
})
//删除数据
router.post('/removePerson', async function(ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()
  ctx.body = {
    code:0
  }
})

module.exports = router  //配置完成后导出该路由实例

/***
 * 数据库增删改查操作
 *  - 增加数据： curl -d "name=sun&age=18" http://localhost:3000/users/addPerson
 *  - 读取数据： curl -d "name=sun" http://localhost:3000/users/getPerson
    - 更新数据： curl -d "name=sun&age=18" http://localhost:3000/users/updatePerson
    - 删除数据： curl -d "name=sun" http://localhost:3000/users/removePerson
 */