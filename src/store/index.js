import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 服务端使用vuex，数据保存全局变量 window，浏览器使用服务端数据替换。

export default () => {
  let store = new Vuex.Store({
    state: {
      name: 'ming'
    },
    getters: {

    },
    mutations: {
      setName(state, value) {
        state.name = value
      }
    },
    actions: {
      async changeName(store, value) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            store.commit('setName', value)
            resolve()
          }, 1000)
        })
      }
    }
  })

  if(typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    // 浏览器用服务端最新数据渲染
    store.replaceState(window.__INITIAL_STATE__)
  }

  return store
}
