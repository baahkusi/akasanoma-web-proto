<template>
    <el-tabs type="border-card">

    <el-tab-pane label="entries">
      <span slot="label">
        <i class="el-icon-document-copy"></i> All Entries
      </span>
      <EntriesTable/>
    </el-tab-pane>
      
    <el-tab-pane label="translations">
      <span slot="label">
        <i class="el-icon-edit"></i> Translated Entries
      </span>
      <TranslationsTable/>
    </el-tab-pane>

    <el-tab-pane label="validations">
      <span slot="label">
        <i class="el-icon-document-checked"></i> Validated Translations
      </span>
      <ValidationsTable/>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
import EntriesTable from './elements/EntriesTable.vue';
import TranslationsTable from './elements/TranslationsTable.vue';
import ValidationsTable from './elements/ValidationsTable.vue';


export default {

    components:{
        TranslationsTable,
        ValidationsTable,
        EntriesTable
    }
    
}
</script>

<style scoped>

</style>