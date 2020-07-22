import Vue from 'vue'
import App from './App'
import router from './router/index' //这个router是App组件的路由表

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
