/**
 * Created by li on 2017/12/29 10:14.
 */
const rp = require('request-promise')
const {wechat} = require('../../config')
const test = async (ctx, next)=>{
    ctx.body = "oh man"
}
const getList = async (ctx, next) => {
    const body = {}
    const data  = 1
}

module.exports = {
    test,
    getList
}