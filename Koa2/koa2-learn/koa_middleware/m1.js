function pv(ctx) {
  global.console.log('m1')
}

module.exports = function () {
  return async (ctx, next) => {
    global.console.log('m1 start')
    pv(ctx)
    await next()
    global.console.log('m1 end')
  }
}