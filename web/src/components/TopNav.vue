<template>
  <el-row style="margin-left:15px;margin-right:15px;font-size:20px">
    <el-col :span="12" style="text-align: left">
      <el-button size="mini" @click="collapse" circle>
        <i v-if="isCollapse" class="el-icon-s-unfold"></i>
        <i v-else class="el-icon-s-fold cursored"></i>
      </el-button>
    </el-col>
    <el-col :span="12" style="text-align: right">
        <el-button size="mini" icon="el-icon-d-arrow-right" @click="logout" circle>
        </el-button>
    </el-col>
  </el-row>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  computed: mapState([
    'isCollapse'
  ]),
  methods: {
    logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      this.$router.push('/login');
    },
    ...mapMutations([
      'collapse'
    ])
  }
};
</script>

<style>
</style>

