/**
 * Created by li on 2017/12/29 9:58.
 */
const Router = require('koa-router')()
const allRouter = require('./route/index')
const {checkToken} = require('./utils')
module.exports = (app) => {
    Router.use('/checkWX',allRouter.checkWX.routes(),allRouter.checkWX.allowedMethods())
    Router.use('/list',allRouter.list.routes(),allRouter.list.allowedMethods())
    Router.use('/token',allRouter.token.routes(),allRouter.token.allowedMethods())
    Router.get('/*',(ctx) => {
        ctx.body = 'sever is started' + ctx.url
    })
    app.use(Router.routes())
}
