<template>
  <div class="app-admin">
    <!-- banner -->
    <div class="banner">
      <!-- 图标 -->
      <div class="icon-wrap">
        <i class="icon iconfont icon-zhenduan"></i>
      </div>
      <!-- 文本 -->
      <div class="text">
        <h6>项目列表管理</h6>
        <p>可以对历史项目进行相应的操作。</p>
      </div>
    </div>
    <!-- 搜索表单 -->
    <el-form :inline="true" :model="searchForm" class="search-form">
      <el-form-item>
        <el-select v-model="searchForm.state" placeholder="请选择页面状态">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.user" placeholder="请输入页面urlKey"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.user" placeholder="请输入页面名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.user" placeholder="请输入页面标题"></el-input>
      </el-form-item>
      <el-form-item class="button-group">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button icon="el-icon-refresh-right">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 按钮组 -->
    <div class="button-group">
      <el-button type="success" icon="el-icon-s-promotion">发布</el-button>
      <el-button type="primary" icon="el-icon-folder-add">新建</el-button>
    </div>
    <!-- 列表 -->
    <el-table
    :data=" [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]"
    stripe
    border
    height="100%"
    tooltip-effect="dark"
    :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="pagination"
      @size-change=""
      @current-change=""
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

// 搜索表单
interface searchForm {
  state: string,
  urlKey: string,
  name: string,
  title: string
}

@Component
export default class app_admin extends Vue {

  // *********** data部分 ***********
  searchForm: searchForm = {
    state: '',
    urlKey: '',
    name: '',
    title: ''
  }
}
</script>

<style lang="postcss" scoped>
  .app-admin {
    padding: var(--padding-large);

    /* 横幅 */
    & .banner {
       display: flex;
       align-items: center;
       height: 100px;
       padding: 0 20px;
       margin-bottom: var(--margin-medium);
       font-weight: 500;
       color: var(--white);
       background: linear-gradient(90deg, #588bff 0%, #59bef9);

       /* 图标 */
       & .icon-wrap {
         position: relative;
         text-align: center;
         width: 68px;
         height: 68px;
         padding-top: 12px;
         border-radius: 50%;
         border: 1px solid rgba(255,255,255, .2);
         margin-right: var(--margin-medium);

         &::after {
           position: absolute;
           content: "";
           width: 56px;
           height: 56px;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           border-radius: 50%;
           background-color: var(--white);
         }

         & i {
           position: relative;
           color: #58a0fd;
           font-size: 30px;
           z-index: 1;
         }
       }
       /* 文本 */
       & .text {
         & h6 {
           margin-bottom: 2px;
         }

         & p {
           font-size: 12px;
         }
       }
    }

    /* 搜索表单 */
    & .search-form {
      margin-top: var(--margin-large);
      & .button-wrap {
        margin-top: -1px;
      }
    }

    /* 按钮组 */
    & .button-group {
      margin-bottom: var(--margin-medium);
    }

    /* 分页 */
    & .pagination {
      text-align: center;
      border: 1px solid #ebeef5;
      border-top: none;
      padding-top: var(--margin-medium);
      padding-bottom: var(--margin-medium);
    }
  }
</style>