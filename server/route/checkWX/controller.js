/**
 * Created by li on 2018/1/2 11:05.
 */
const {checkToken} = require('../../utils')
const accessWX = async (ctx, next)=> {
    const data = checkToken(ctx.url)
    ctx.body = data
}

module.exports = {
    accessWX
}