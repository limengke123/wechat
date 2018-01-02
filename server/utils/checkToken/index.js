/**
 * Created by li on 2018/1/2 10:47.
 */

const querystring = require('querystring')

const parseUrl = (url)=> {
    return querystring.parse(url)
}

module.exports = parseUrl