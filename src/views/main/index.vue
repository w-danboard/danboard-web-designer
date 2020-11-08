<template>
  <div class="add-main">
    <!-- 进度条 -->
    <vue-progress-bar></vue-progress-bar>
    <!-- 头部 -->
    <app-header></app-header>
    我是主页面
    <!-- 页面 -->
    <router-view :key="key"></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router'
import appHeader from '@/views/layouts/app-header.vue'

@Component({
  components: {
    appHeader
  }
})
export default class app_main extends Vue {

  // *********** watch部分 ***********

  @Watch('$route')
  onRouteChange (to: Route) {
    this.key = to.name || ''
  }
  
  // *********** data部分 ***********

  key: String = ''; // 路由key
  $Progress : any = {}

  // *********** mounted部分 ***********
  
  mounted () {
    // 开启 & 关闭 顶部进度条
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }

}
</script>