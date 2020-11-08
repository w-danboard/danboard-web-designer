<template>
  <div class="add-main">
    <!-- 进度条 -->
    <vue-progress-bar></vue-progress-bar>
    我是主页面
    <!-- 页面 -->
    <router-view :key="key"></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class app_main extends Vue {
  
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