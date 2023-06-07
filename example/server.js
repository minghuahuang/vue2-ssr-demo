const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const Vue = require('vue')
const VueServerRenderer = require('vue-server-renderer')

const vm = new Vue({
  template: `
    <div>hello, {{ name }}</div>
  `,
  data: {
    name: 'ming'
  }
})

const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8')

// 接口
router.get('/', async (ctx) => {
  ctx.body = await VueServerRenderer.createRenderer({ template }).renderToString(vm)
})

// 注册路由
app.use(router.routes())

app.listen(3000, function() {
  console.log('server start at 3000 port')
})