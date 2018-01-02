/**
 * Created by li on 2017/12/29 11:19.
 */
const rp = require('request-promise')
const iconv = require('iconv-lite')
const {wechat} = require('../config')
const fs = require('fs')
const util = require('util')
const {resolve} = require('path')
const {url, appId, appsecret} = wechat
const {token_uri} = url
const TOKEN_PATH = resolve(__dirname,'../../','./file/token.txt')
/**
 * rp请求
 * */
const GET = async (uri,decodeType="utf8") => {
    return new Promise(async (resolve,reject) => {
        try{
            const buffer = await rp({
                uri,
                encoding:null
            })
            const string = iconv.decode(buffer,decodeType)
            resolve(string)
        } catch (e){
            reject(e)
        }
    })
}

const genToken = async ()=> {
    const url = `${token_uri}&appid=${appId}&secret=${appsecret}`
    try{
        return await GET(url)
    } catch(e){
        console.log(e)
    }
}
/**
 * fs.writeFile的promisify版本
 * */
const writeFilePromise = async (filepath=TOKEN_PATH,data) => {
    const write = util.promisify(fs.writeFile)
    return new Promise(async (resolve,reject) => {
        const e = await write(filepath,data)
        if(e){
            reject(e)
        } else {
            resolve(true)
        }
    })
}

const readFilePromise = async (filepath=TOKEN_PATH) => {
    const read = util.promisify(fs.readFile)
    return new Promise(async (resolve,reject) => {
        try{
            const data = await read(filepath)
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}
/**
 * fs.stat的promisify版本
 * */
const getStat = async (filepath=TOKEN_PATH) => {
    const stat = util.promisify(fs.stat)
    return new Promise(async (resolve,reject) => {
        const stats = await stat(filepath)
        if(stats){
            resolve(stats)
        } else {
            reject(false)
        }
    })
}

module.exports = {
    GET,
    genToken,
    writeFilePromise,
    getStat,
    readFilePromise,
    checkToken:require('./checkToken')
}
