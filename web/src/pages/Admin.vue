<template>
  <el-container>
    <el-header>
      <TopNav/>
    </el-header>
    <el-container>
      <el-aside width="none">
        <SideNav />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideNav from "../components/SideNav.vue";
import TopNav from "../components/TopNav.vue";
import auth from "../auth.js"

export default {
  components: {
    SideNav,
    TopNav
  },
  beforeRouteEnter (to, from, next) {
      if (auth()) {
        next();
      } else {
        next("/login")
      }
  },
  beforeRouteUpdate (to, from, next) {
      if (auth()) {
        next();
      } else {
        next("/login")
      }
  }
};
</script>

<style>
.el-header {
  padding: 0;
  background-color: #333;
  color: #b3c0d1;
  line-height: 60px;
}
</style>
