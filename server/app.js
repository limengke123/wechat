/**
 * Created by li on 2017/12/29 9:52.
 */
const Koa = require('koa')
const router = require('./router')
const port = 3030

const app = new Koa()


require('./router')(app)


app.on('error',(err,ctx)=>{
    if (process.env.NODE_ENV !== 'test') {
        console.error('error', err)
    }
})

app.listen(port,()=>{
    console.log(`port is started on ${port}`)
})