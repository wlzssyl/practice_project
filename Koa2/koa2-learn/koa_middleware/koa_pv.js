function pv(ctx) {
  global.console.log('pv', ctx.path)
}

module.exports = function() {
  return async (ctx, next) => {
    pv(ctx)
    await next()
  }
}