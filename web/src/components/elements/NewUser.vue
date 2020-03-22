<template>
  <el-card>
    <el-alert
      title="Register a New User"
      type="info"
      :closable="false"
      description="Provide email and type of new user."
      show-icon
    ></el-alert>
    <br />
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="120px"
      class="demo-dynamic"
      @submit.prevent
    >
      <el-form-item
        prop="email"
        label="Email"
        :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
      >
        <el-input size="small" v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        prop="user_type"
        label="User Type"
        :rules="[
        { required: true, message: 'User type required', trigger: 'blur' },
        ]"
      >
        <el-select size="small" v-model="dynamicValidateForm.user_type" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="small"
          @click.prevent="submitForm('dynamicValidateForm')"
        >Submit</el-button>
        <el-button type="info" @click="resetForm('dynamicValidateForm')" size="small">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        user_type: "",
        email: ""
      },
      options: [
        {
          value: "client",
          label: "Client"
        },
        {
          value: "staff",
          label: "Staff"
        },
        {
          value: "admin",
          label: "Admin"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const payload = {
            "111": {
              register: {
                email: this.dynamicValidateForm.email,
                device: this.$deviceHash,
                user_type: this.dynamicValidateForm.user_type
              },
              "000": ["register"]
            },

            "000": ["111"]
          };
          this.$http
            .post("", payload)
            .then(res => {
              const data = res.data["111"].register;

              if (data.status) {
                this.$notify.success(
                  "Registration successfull. Email Sent to user."
                );
              } else {
                this.$notify.error("Registration failed. User Already Exists.");
              }
            })
            .catch(err => {
              this.$notify.error("Failed to Register. Network error.");
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.el-card {
  position: relative;
  top: 25%;
  left: 30%;
  width: 40%;
  border: 1px solid #c7e3ff;
}
</style>