<template>
  <el-card>
    <el-alert
      title="Welcome to Login"
      type="info"
      :closable="false"
      description="Provide your email and a pin will be sent to it."
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
        v-if="pinState"
        label="Pin"
        prop="pin"
        :rules="{required: true, message: 'Login pin cannot be null', trigger: 'blur'}"
      >
        <el-input size="small" v-model="dynamicValidateForm.pin"></el-input>
        <el-button size="small" @click.prevent="removePin" type="danger">Resend Pin</el-button>
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
      pinState: false,
      dynamicValidateForm: {
        pin: "",
        email: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.pinState) {
            console.log(this.$deviceHash);
            const payload = {
              "111": {
                login: {
                  email: this.dynamicValidateForm.email,
                  device: this.$deviceHash,
                  fresh_pin: this.dynamicValidateForm.pin
                },
                "000": ["login"]
              },

              "000": ["111"]
            };
            this.$http
              .post("", payload)
              .then(res => {
                const data = res.data['111'].login;
                if (data.status) {
                  console.log(data);
                  if(['staff', 'admin'].includes(data.data.user_type)){
                      localStorage.setItem("token", data.data.token);
                      localStorage.setItem("email", this.dynamicValidateForm.email)
                      localStorage.setItem("user_type", data.data.user_type);
                      this.pinState = false;
                      this.$notify.success('Login successfull.')
                      this.$router.push("/admin");
                  }else{
                      this.$notify.error("Unauthorized User.");
                  }
                  
                }else{
                  this.$notify.error("Failed to login. Make sure pin is correct and try again, or regenerate pin.");
                }
              })
              .catch(err => {
                console.log(err.message);
                this.$notify.error("Failed to login. Try again.");
              });
            
          } else {
            const payload = {
              "111": {
                generate_pin: {
                  email: this.dynamicValidateForm.email,
                  device: this.$deviceHash
                },
                "000": ["generate_pin"]
              },

              "000": ["111"]
            };
            this.$http
              .post("", payload)
              .then(res => {
                const data = res.data['111'].generate_pin;
                console.log(data);
                if(data.status){
                  this.$notify.info("Enter the pin sent to your email.");
                  this.pinState = true;
                }else{
                  this.$notify.error("User does not exist.");
                }
                
              })
              .catch(err => {
                console.log(err.message);
                this.$notify.error("Failed to send pin. Try again.");
              });
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.pinState = false;
      this.$refs[formName].resetFields();
    },
    removePin() {
      this.pinState = false;
      this.$notify.info("Kindly check email and submit again.");
    }
  }
};
</script>

<style scoped>
.el-card {
  position: fixed;
  top: 25%;
  left: 30%;
  width: 40%;
  border: 1px solid #c7e3ff;
}
</style>