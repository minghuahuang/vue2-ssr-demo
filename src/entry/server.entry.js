// 服务端入口
import createApp from '../app.js'

// 服务端调用产生新的实例
export default () => {
  let { app } = createApp()
  return app
}