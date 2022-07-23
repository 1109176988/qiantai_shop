import Vue from 'vue' //引入vue
import App from './App.vue' //引入app组件
import router from './router'
import store from './store'

Vue.config.productionTip = false //设置控制台中默认不显示提示信息 warning

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
