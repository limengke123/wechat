/**
 * Created by li on 2017/12/29 9:58.
 */
const Router = require('koa-router')()
const allRouter = require('./route/index')
module.exports = (app) => {
    Router.get('/fk',(ctx) => {ctx.body = "fk"})
    Router.use('/list',allRouter.list.routes(),allRouter.list.allowedMethods())
    Router.use('/token',allRouter.token.routes(),allRouter.token.allowedMethods())
    Router.get('/*',(ctx) => {
        ctx.body = "your server is connected"
    })
    app.use(Router.routes())
}
