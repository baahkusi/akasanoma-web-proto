<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :router="true"
  >
    <el-menu-item index="/admin/dashboard">
      <i class="el-icon-menu"></i>
      <span slot="title">Dashboard</span>
    </el-menu-item>
    <el-menu-item index="/admin/tables">
      <i class="el-icon-s-grid"></i>
      <span slot="title">Tables</span>
    </el-menu-item>
    <el-menu-item index="/admin/charts">
      <i class="el-icon-data-line"></i>
      <span slot="title">Charts</span>
    </el-menu-item>
    <el-menu-item index="/admin/data">
      <i class="el-icon-document"></i>
      <span slot="title">Data</span>
    </el-menu-item>
    <el-menu-item index="/admin/settings">
      <i class="el-icon-setting"></i>
      <span slot="title">Settings</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: mapState([
    'isCollapse'
  ])
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
