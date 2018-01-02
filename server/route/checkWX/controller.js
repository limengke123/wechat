/**
 * Created by li on 2018/1/2 11:05.
 */
const {checkToken} = require('../../utils')
const accessWX = async (ctx, next)=> {
    var url = ctx.url.split('/checkWX')[1]
    const data = checkToken(url)
    ctx.body = data
}

module.exports = {
    accessWX
}