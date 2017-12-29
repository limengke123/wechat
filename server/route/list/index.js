const router = require('koa-router')()
const controller = require('./controller')

router.get('/test',controller.test)
router.get('/openId',controller.getOpenIdList)
router.get('/',controller.getList)

module.exports = router