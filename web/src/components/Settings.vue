<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-tools"></i> Settings
      </span>
      <br />
      
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-custom"></i> Register New User
      </span>
      <NewUser/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import NewUser from './elements/NewUser.vue';

export default {
    components:{
        NewUser
    }
};
</script>

<style scoped>
</style>