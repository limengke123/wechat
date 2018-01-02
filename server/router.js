/**
 * Created by li on 2017/12/29 9:58.
 */
const Router = require('koa-router')()
const allRouter = require('./route/index')
const logger = async (ctx,next)=> {console.log(ctx.url);next()}
module.exports = (app) => {
    Router.use('/checkWX',allRouter.checkWX.routes(),allRouter.checkWX.allowedMethods())
    Router.use('/list',logger,allRouter.list.routes(),allRouter.list.allowedMethods())
    Router.use('/token',allRouter.token.routes(),allRouter.token.allowedMethods())
    Router.get('/*',(ctx) => {
        console.log(ctx.url)
        ctx.body = 'sever is started' + ctx.url
    })
    app.use(Router.routes())
}
