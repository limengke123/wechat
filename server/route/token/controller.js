/**
 * Created by li on 2017/12/29 11:02.
 */
const {genToken,writeFilePromise,readFilePromise} = require('../../utils')
const TOKEN_PATH = './file/token.txt'
const getToken = async (ctx, next) => {
    try{
        const data = await genToken()
        const token = JSON.parse(data).access_token
        const write = await writeFilePromise(TOKEN_PATH,token)
        if(write){
            ctx.body = data
        } else {
            ctx.body = "some errors with writeFile"
        }
    } catch (e){
        ctx.body = "some errors with tokenGenerator"
    }
}
const test = async (ctx,next)=>{
    try{
        const data = await readFilePromise()
        ctx.type = "text/plain"
        ctx.body = data
    } catch (e){
        console.log(e)
        ctx.body = "you got wrong with read file"
    }
}

module.exports = {
    getToken,
    test
}