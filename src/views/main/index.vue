<template>
  <div class="add-main">
    <!-- 进度条 -->
    <vue-progress-bar></vue-progress-bar>
    <!-- 头部 -->
    <app-header></app-header>
    <!-- 页面 -->
    <div class="container">
      <router-view :key="key"></router-view>
    </div>
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

  key: string = ''; // 路由key
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

<style lang="postcss" scoped>
  .add-main {
    /* hearder高度 */
    height: calc(100% - 56px);
    margin-top: 56px;
    overflow-y: auto;
    & .container {
      
    }
  }
</style>