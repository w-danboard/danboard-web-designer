import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入样式
import 'element-ui/lib/theme-chalk/index.css'  // element-ui 样式
import '@/assets/fonts/iconfont.css' 					 // 图标字体
import '@/styles/base.css'                     // 公共样式

Vue.config.productionTip = false
Vue.use(ElementUI, { locale, size: 'small' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
