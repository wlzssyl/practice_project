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