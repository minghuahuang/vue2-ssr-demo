// 服务端入口
import createApp from '../app.js'

// 服务端调用产生新的实例
export default (url) => {
  return new Promise((resolve, reject) => {
    let { app, router } = createApp()
    router.push(url) // url 为服务端渲染传入参数
    // 路由为异步组件，需要等待路由加载完毕
    router.onReady(() => {
      const matchComponent = router.getMatchedComponents();
      console.log('matchComponent', matchComponent.length)
      if(matchComponent.length == 0) { // 未匹配前端路由
        return reject({ code: 404 })
      } else {
        resolve(app)
      }
    })
  })
}