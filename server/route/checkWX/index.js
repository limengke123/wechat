/**
 * Created by li on 2018/1/2 11:04.
 */
const router = require('koa-router')()
const controller = require('./controller')

router.get('/',controller.accessWX)

module.exports = router

