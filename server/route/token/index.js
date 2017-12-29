/**
 * Created by li on 2017/12/29 11:01.
 */
const router = require('koa-router')()
const contoller = require('./controller')

router.get('/',contoller.getToken)

module.exports = router