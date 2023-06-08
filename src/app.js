import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

// 改造成函数，保证每个用户访问的 app 实例为独立的，全新的实例
export default () => {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })

  return { app, router }
}

// new Vue({
//   render: h => h(App)
// }).$mount('#app')