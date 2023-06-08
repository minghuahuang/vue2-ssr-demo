import Vue from 'vue'
import Router from 'vue-router'

import Foo from '../components/Foo.vue'

// 提供两个全局组件：router-view router-link
Vue.use(Router)

const Bar = () => import('../components/Bar.vue')

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Foo },
      { path: '/bar', component: Bar },
    ]
  })

  return router
}