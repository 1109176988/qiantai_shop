import Vue from 'vue' //引入vue
import App from './App.vue' //引入app组件
import router from './router'
import store from './store'

//引入部分组件并注册成全局公共组件路径这里的TypeNav
import TypeNav from './components/TypeNav'

Vue.component('TypeNav', TypeNav) //使用全局公共组件 至此就注册完毕了

Vue.config.productionTip = false //设置控制台中默认不显示提示信息 warning

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
