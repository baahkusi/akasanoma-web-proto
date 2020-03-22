<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      ref="dataTypeForm"
      size="mini"
      class="demo-form-inline"
    >
      <el-form-item 
       label="Data Type"
       prop="data"
       :rules="[{ required: true, message: 'Data Type is Required'}]">
        <el-select
          v-model="formInline.data"
          placeholder="Data Type"
          clearable
        >
          <el-option label="Entry Data" value="entries"></el-option>
          <el-option label="Translated Data" value="translations"></el-option>
          <el-option label="Verified Data" value="validations"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Prepare Download</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="User" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.user }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Time" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Data Type" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.data }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Action">
        <template slot-scope="scope">
          <el-button
            size="mini"
            :type="actionColor(scope.row.status)"
            @click="handleAction(scope.row)"
          >{{ scope.row.action }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        data: ""
      },
      tableData: [
        {
          id: 1,
          user: "Tom",
          date: "2016-05-03",
          time: "12:00 PM",
          data: "Entries",
          status: "ready",
          action: "Download"
        },
        {
          id: 2,
          user: "Jerry",
          date: "2016-05-03",
          time: "12:00 PM",
          data: "Translations",
          status: "pending",
          action: "Cancel"
        },
        {
          id: 3,
          user: "Tweenie",
          date: "2016-05-03",
          time: "12:00 PM",
          data: "Validations",
          status: "failed",
          action: "Retry"
        },
        {
          id: 4,
          user: "Anoma",
          date: "2016-05-03",
          time: "12:00 PM",
          data: "Entries",
          status: "expired",
          action: "Reload"
        }
      ]
    };
  },
  methods: {
    handleAction(row) {
      this.$message.info(`Performing action ${row.action} on row ${row.id}.`);
    },
    actionColor(status) {
      switch (status) {
        case "ready":
          return "success";
          break;
        case "pending":
          return "warning";
          break;
        case "failed":
          return "danger";
          break;
        case "expired":
          return "info";
          break;
      }
    },
    onSubmit() {
      this.$refs['dataTypeForm'].validate(valid => {
        if (valid) {
          this.$message.info(`Preparing ${this.formInline.data} data for download`);
        } else {
          this.$message.error(`Empty Submit`);
          return false;
        }
      });
    }
  },
  computed: {}
};
</script>