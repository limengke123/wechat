/**
 * Created by li on 2017/12/29 10:14.
 */
const test = async (ctx, next)=>{
    ctx.body = "oh man"
}
const getList = async (ctx, next) => {
    ctx.body = "getList"
}

module.exports = {
    test,
    getList
}