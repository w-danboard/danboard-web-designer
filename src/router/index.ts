import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// 登录
const Login = () =>
  import('@/views/login/index.vue')
  
// 编辑页面
const DesigenerPage = () =>
  import('@/views/desigener-page/index.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      name: '登录'
    }
  },
  {
    path: '/desigener-page',
    name: 'desigener-page',
    component: DesigenerPage,
    meta: {
      name: '编辑页面'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
