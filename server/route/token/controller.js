/**
 * Created by li on 2017/12/29 11:02.
 */

const getToken = async (ctx,next) => {
    ctx.body = "token"
}

module.exports = {
    getToken
}