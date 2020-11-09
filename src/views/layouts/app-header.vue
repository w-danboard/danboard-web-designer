<template>
  <div class="app-header">
    <!-- logo -->
    <div class="logo-wrap">
      <img class="logo-icon" src="@/assets/images/logo.png" width="32">
      <span class="logo-text">{{ $config.title }}</span>
    </div>
    <!-- 个人中心 -->
    <div class="user">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="iconfont icon-yonghu avatar-icon"></i>
          {{$store.getters.user.name }}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout" icon="iconfont icon-tuichu3">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class app_header extends Vue {
  handleCommand () {
    console.log('handleCommand')
  }
}
</script>
<style lang="postcss" scoped>
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    height: 56px;
    line-height: 56px;
    background: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    z-index: 999;

    /* logo */
    & .logo-wrap {
      width: 230px;
      background: #2f323d;
      padding-left: 1px;

      & .logo-icon {
        display: inline-block;
        vertical-align: middle;
        margin: 0 var(--margin-mini);
      }

      & .logo-text {
        display: inline-block;
        vertical-align: middle;
        color: var(--white);
        font-size: 15px;
        font-weight: 700;
      }
    }

    /* 个人中心 */
    & .user {
      padding-right: var(--padding-medium);
      cursor: pointer;

      & .avatar-icon {
        padding-right: var(--padding-mini);
      }
    }
  }
</style>