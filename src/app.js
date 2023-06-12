import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'

// 改造成函数，保证每个用户访问的 app 实例为独立的，全新的实例
export default () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}

// new Vue({
//   render: h => h(App)
// }).$mount('#app')