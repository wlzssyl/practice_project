const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

//中间件学习示例pv
const pv = require('./koa_middleware/koa_pv')
const m1 = require('./koa_middleware/m1')
const m2 = require('./koa_middleware/m2')
const m3 = require('./koa_middleware/m3')
/**mongoose*************************************/
const mongoose = require('mongoose')
const dbConfig = require('./dbs/config')
/***redis*************************************** */
const Redis = require('koa-redis')
const session = require('koa-generic-session')
/******************************************* */

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)
  //redis配置
app.keys = ['keys', 'keyskeys']
app.use(session({
  store: new Redis()
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(pv()) //使用的顺序也有讲究
app.use(m1())
app.use(m2())
app.use(m3())

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true
})    //可以这样写死，详情了解可看官网文档

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
