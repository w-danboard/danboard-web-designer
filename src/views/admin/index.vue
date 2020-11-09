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
        <el-input v-model="searchForm.user" placeholder="请输入页面URLKEY"></el-input>
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
      <el-button type="warning" icon="el-icon-s-promotion">发布</el-button>
      <el-button type="primary" icon="el-icon-folder-add">新建</el-button>
    </div>
    <!-- 列表 -->
    <el-table
    :data="tableData"
    stripe
    border
    height="100%"
    tooltip-effect="dark"
    :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column
        type="selection"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="urlKey"
        label="URLKEY"
        align="center"
        show-overflow-tooltip
        sortable>
      </el-table-column>
      <el-table-column
        prop="name"
        label="页面名称"
        align="center"
        show-overflow-tooltip
        sortable>
      </el-table-column>
      <el-table-column
        prop="title"
        label="页面标题"
        align="center"
        show-overflow-tooltip
        sortable>
      </el-table-column>
      <el-table-column
        prop="state"
        label="页面状态"
        align="center"
        show-overflow-tooltip
        sortable>
      </el-table-column>
      <el-table-column
        prop="author"
        label="创建人"
        align="center"
        show-overflow-tooltip
        sortable>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        align="center"
        show-overflow-tooltip
        sortable>
      </el-table-column>
      <el-table-column
        prop="expirationTime"
        label="过期时间"
        align="center"
        show-overflow-tooltip
        sortable>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="180">
        <template slot-scope="scope">
          <!-- 复制链接 -->
          <el-tooltip content="复制链接" placement="top">
            <el-button type="text" icon="el-icon-copy-document" class="operation-button"></el-button>
          </el-tooltip>
          <!-- 编辑 -->
          <el-tooltip content="编辑" placement="top">
            <el-button type="text" icon="el-icon-edit" class="operation-button"></el-button>
          </el-tooltip>
          <!-- 预览 -->
          <el-tooltip content="预览" placement="top">
            <el-button type="text" icon="el-icon-view" class="operation-button"></el-button>
          </el-tooltip>
          <!-- 删除 -->
          <el-tooltip content="删除" placement="top">
            <el-button type="text" icon="el-icon-delete" class="operation-button"></el-button>
          </el-tooltip>
          <!-- 暂停使用 -->
          <el-tooltip content="暂停使用" placement="top" class="operation-button">
            <el-button type="text" icon="el-icon-video-pause"></el-button>
          </el-tooltip>
        </template>
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

  tableData: Array<object> = [{name: '页面名称'}]
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

    /* 列表 */
    & >>> .operation-button {
      padding: 0;
      & i {
        transform: scale(1.2);
        padding: 0 2px;
      }
    }

    /* 分页 */
    & .pagination {
      text-align: center;
      border: 1px solid #ebeef5;
      border-top: none;
      padding-top: var(--margin-small);
      padding-bottom: var(--margin-small);
    }
  }
</style>