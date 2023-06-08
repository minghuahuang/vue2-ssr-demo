import Vue from 'vue'
import App from './App.vue'

// 改造成函数，保证每个用户访问的 app 实例为独立的，全新的实例
export default () => {
  const app = new Vue({
    render: h => h(App)
  })

  return { app }
}

// new Vue({
//   render: h => h(App)
// }).$mount('#app')