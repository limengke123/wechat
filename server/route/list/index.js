const router = require('koa-router')()
const controller = require('./controller')

router.get('/test',controller.test)
router.get('/',controller.getList)

module.exports = router