// 服务端入口
import createApp from '../app.js'

// 服务端调用产生新的实例
export default (context) => {
  return new Promise((resolve, reject) => {
    let { app, router, store } = createApp()
    const { url } = context
    router.push(url) // url 为服务端渲染传入参数
    // 路由为异步组件，需要等待路由加载完毕
    router.onReady(() => {
      const matchComponent = router.getMatchedComponents();
      console.log('matchComponent', matchComponent.length)

      if(matchComponent.length == 0) { // 未匹配前端路由
        return reject({ code: 404 })
      } else {
        // 因此 vuex 只能使用于页面级组件中
        Promise.all(matchComponent.map(component => {
          if(component.asyncData) {
            return component.asyncData(store)
          }
        })).then(() => {
          context.state = store.state // store 最新数据保存在 window 上
          // 执行完再渲染app
          resolve(app)
        })
      }
    })
  })
}