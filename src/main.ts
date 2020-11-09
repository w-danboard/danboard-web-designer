import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'	 // vue顶部的轻量级进度条
import appConfig from '../app.config'          // 系统全局配置

// 引入样式
import 'element-ui/lib/theme-chalk/index.css'  // element-ui 样式
import '@/assets/fonts/iconfont.css' 					 // 图标字体
import '@/assets/_fonts/iconfont.css' 				 // 图标字体[私有]
import '@/styles/base.css'                     // 公共样式
import '@/styles/common.css'                   // 统一边距颜色样式
import '@/styles/element-cover/index.css'      // element-ui样式覆盖

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#409eff',
  failedColor: '#f56b6c'
})
Vue.use(ElementUI, { locale, size: 'small' })

// 系统全局配置
Vue.prototype.$config = appConfig

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
