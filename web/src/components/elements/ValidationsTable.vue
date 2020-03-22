<template>
  <div>
    <el-alert
      title="Validated Translations."
      type="info"
      description="This table contains all translations that have been validated."
      :closable="false"
      show-icon
    ></el-alert>
    <br />
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="100" sortable></el-table-column>
      <el-table-column prop="time" label="Time" width="80"></el-table-column>
      <el-table-column prop="entry" label="Entry"></el-table-column>
      <el-table-column prop="trans" label="Translation"></el-table-column>
      <el-table-column
        prop="yes"
        label="#yes"
        width="50"
        sortable
      ></el-table-column>
      <el-table-column
        prop="no"
        label="#no"
        width="50"
        sortable
      ></el-table-column>
      <el-table-column
        prop="level"
        label="Level"
        width="80"
        :filters="levels"
        :filter-method="filterLevel"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag :type="tagType(scope.row.level)" disable-transitions>Level {{scope.row.level}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <el-pagination
      @current-change="pageTo"
      :page-size="25"
      background
      layout="prev, pager, next, ->, total"
      :total="100"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levels: [
        { text: "Level 1", value: 1 },
        { text: "Level 2", value: 2 },
        { text: "Level 3", value: 3 },
        { text: "Level 4", value: 4 }
      ],
      tableData: [
        {
          date: "2016-05-03",
          time: "12:00 AM",
          entry: "Level 1 Entry",
          trans: "Level 1 Nie",
          yes: "6",
          no: "4",
          level: "1"
        },
        {
          date: "2016-04-03",
          time: "12:01 AM",
          entry: "Level 2 Entry",
          trans: "Level 1 Nie",
          yes: "7",
          no: "3",
          level: "2"
        },
        {
          date: "2016-03-03",
          time: "12:02 AM",
          entry: "Level 3 Entry",
          trans: "Level 1 Nie",
          yes: "8",
          no: "2",
          level: "3"
        },
        {
          date: "2016-02-03",
          time: "12:03 AM",
          entry: "Level 4 Entry",
          trans: "Level 1 Nie",
          yes: "9",
          no: "1",
          level: "4"
        }
      ]
    };
  },
  methods: {
    filterLevel(value, row) {
      return row.level == value;
    },
    tagType(level) {
      switch (level) {
        case "1":
          return "info";
          break;
        case "2":
          return "success";
          break;
        case "3":
          return "warning";
          break;
        case "4":
          return "failed";
          break;
      }
    },
    pageTo(page) {
      console.log(page);
    }
  }
};
</script>