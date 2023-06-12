const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')

const path = require('path')
const fs = require('fs')

const VueServerRender = require('vue-server-renderer')

const app = new Koa()
const router = new Router()

app.use(static(path.resolve(__dirname, '../dist')))
app.use(router.routes())

const serverBundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8')
const template = fs.readFileSync(path.resolve(__dirname, '../dist/server.html'), 'utf-8')
const render = VueServerRender.createBundleRenderer(serverBundle, {
  template
})

router.get('/', async (ctx) => {
  // css 渲染生效， 必须使用回调方式
  ctx.body = await new Promise((resolve, reject) => {
    render.renderToString({ url: ctx.url },(err, html) => {
      if(err) reject(err)
      resolve(html)
    })
  })
  // const html = await render.renderToString()
})

router.get('/(.*)', async (ctx) => {
  // 任意路径，重定向至首页，浏览器会自动按照路径匹配，会自动匹配到前端路由
  ctx.body = await new Promise((resolve, reject) => {
    render.renderToString(ctx, (err, html) => {
      if(err && err.code == 404) resolve('not found')
      resolve(html)
    })
  })
})

app.listen(3000, () => {
  console.log('server start at port 3000')
})