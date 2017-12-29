/**
 * Created by li on 2017/12/29 9:58.
 */
const Router = require('koa-router')()
const allRoute = require('./route/index')
module.exports = (app) => {
    Router.use('/list',allRoute.list.routes(),allRoute.list.allowedMethods())
    Router.use('/token',allRoute.token.routes(),allRoute.token.allowedMethods())
    Router.get('/*',(ctx) => {
        ctx.body = "your server is connected"
    })
    app.use(Router.routes())
}
