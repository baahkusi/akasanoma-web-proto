<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-upload2"></i> Upload Entries
      </span>

      <el-alert
        title="File Format"
        type="info"
        description="The file must be a csv or excel file."
        :closable="false"
        show-icon
      ></el-alert>
      <br />
      <el-alert
        title="File Content"
        type="info"
        description="The file must have two columns named Entries and .Level."
        :closable="false"
        show-icon
      ></el-alert>
      <br />
      <Upload/>
    </el-tab-pane>

    <el-tab-pane label="Config">
      <span slot="label">
        <i class="el-icon-download"></i> Download Data
      </span>
      <Download/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Upload from './elements/Upload.vue';
import Download from './elements/Download.vue';

export default {
    components:{
        Upload,
        Download
    }
};
</script>

<style scoped>
</style>