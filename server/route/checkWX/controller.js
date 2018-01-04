/**
 * Created by li on 2018/1/2 11:05.
 */
const {checkToken} = require('../../utils')
const accessWX = async (ctx, next)=> {
    let url = ctx.url.split('?')[1]
    const data = checkToken(url)
    console.log(data)
    ctx.body = data
}

const getCode = async (ctx, next ) => {
    if(ctx.query){
        ctx.body =ctx.query
    } else {
        ctx.body = "no data"
    }
}

module.exports = {
    accessWX,
    getCode
}