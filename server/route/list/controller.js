/**
 * Created by li on 2017/12/29 10:14.
 */
const {readFilePromise, GET} = require('../../utils')
const {url} = require('../../config').wechat
const {getList_uri, getUserInfo} = url
const test = async (ctx, next) => {
    ctx.body = "oh man"
}

const getOpenIdList = async (ctx, next) => {
    try {
        const tokenBuffer = await readFilePromise()
        const token = tokenBuffer.toString()
        const url = `${getList_uri}&access_token=${token}&next_openid=`
        const dataString = await GET(url)
        ctx.body = dataString
    } catch (e) {
        console.log(e)
        ctx.body = "you got wrong with getOpenID"
    }
}
const getList = async (ctx, next) => {
    try {
        const tokenBuffer = await readFilePromise()
        const token = tokenBuffer.toString()
        const url = `${getList_uri}&access_token=${token}&next_openid=`
        const dataString = await GET(url)
        const data = JSON.parse(dataString)
        /**
         * 这里原先用Map去遍历，有点异步问题解决不了
         * 只能用for循环
         * */
        const fn = async ()=>{
            let arr = []
            for(let id of data.data.openid){
                console.log(id)
                let url = `${getUserInfo}access_token=${token}&openid=${id}&lang=zn_CN`
                let data = await GET(url)
                //console.log(data)
                arr.push(data)
            }
            return arr
        }
        const _data = await fn()
        ctx.body = _data
    } catch (e) {
        console.log(e)
        ctx.body = "you got error with getList"
    }
}

module.exports = {
    test,
    getList,
    getOpenIdList
}