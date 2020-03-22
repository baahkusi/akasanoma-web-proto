<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="#"
    :http-request="upload"
    :on-success="success"
    :on-error="error"
    :before-upload="before"
    list-type="text"
    :multiple="false"
    :auto-upload="false"
  >
    <el-button slot="trigger" size="small" type="primary">Add file</el-button>
    <el-button
      style="margin-left: 10px;"
      size="small"
      type="success"
      @click="submitUpload"
    >Upload to Server</el-button>
  </el-upload>
</template>

<script>
export default {
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 4, you selected ${
          files.length
        } files this time, add up to ${files.length + fileList.length} totally`
      );
    },
    submitUpload() {
      this.$refs.upload.submit();
      this.$refs.upload.clearFiles();
    },
    success() {
      this.$message.success("Files successfully uploaded");
    },
    error() {
      this.$message.error("Files could not upload");
    },
    before() {
      this.$message.info("Uploading");
    },
    reader(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
      });
    },
    upload(file) {
      this.reader(file.file).then(result => {
        const payload = {
          "111": {
            set_entries: { file: result },
            "000": ["set_entries"]
          },

          "000": ["111"]
        };
        
        
        this.$http
          .post("", payload, {
            headers: {
              Authorization: localStorage.getItem("token"),
              "Account-ID": localStorage.getItem("email")
            }
          })
          .then(res => {
            const data = res.data["111"]["set_entries"];
            console.log(data);

            if (data.status) {
              this.$notify.success("Upload Successful.");
            } else {
              this.$notify.error("Upload Failed.");
            }
          })
          .catch(err => {
            console.log(err.message);
            this.$notify.error("Upload Failed.");
          });
      });
    }
  }
};
</script>