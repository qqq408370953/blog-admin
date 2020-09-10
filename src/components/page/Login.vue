<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="admin-title">{{titleTip}}</div>
      <div class="login-left"></div>
      <div class="login-right">
        <div class="ms-container">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="0px"
            class="demo-ruleForm"
          >
            <el-form-item prop="username">
              <el-input
                prefix-icon="el-icon-user-solid"
                style="margin-top:10px;"
                v-model="ruleForm.username"
                placeholder="请输入账号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                prefix-icon="el-icon-s-goods"
                placeholder="请输入密码"
                v-model="ruleForm.password"
                @keyup.enter.native="submitForm('ruleForm')"
              ></el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                style="width:200px; border-radius:20px;"
              >登录</el-button>
            </div>
            <p style="font-size:12px;line-height:30px;color:red;" v-if="tips">用户名或密码错误</p>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
      tips: false,
      titleTip: "管理后台",
    };
  },

  methods: {
    submitForm(formName) {
      this.$axios
        .post(`${this.baseURL}/users/login`, {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
        })
        .then((res) => {
          if (res.data.code == 0) {
            sessionStorage.setItem("token", JSON.stringify(res.data.token));
            sessionStorage.setItem("user", JSON.stringify(res.data.info));
            this.$router.push("/newscontainer");
          } else {
            this.tips = true;
          }
        });
    },
  },
};
</script>

<style>
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 800px;
  height: 490px;
  margin-left: -400px;
  margin-top: -245px;
  border-radius: 25px;
  background: #fff;
}

.admin-title {
  width: 160px;
  font-size: 20px;
  color: #409eff;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -80px;
  text-align: center;
}

.login-left {
  position: absolute;
  top: 50%;
  /* left:50%; */
  width: 400px;
  height: 250px;
  /* margin-left:-400px; */
  margin-top: -125px;
  background-image: url(../../../static/img/login.png);
  background-repeat: no-repeat;
  background-position: 100% 100%;
}

.login-right {
  position: absolute;
  left: 50%;
  top: 0;
  width: 400px;
  height: 490px;
  /* border: 1px solid red; */
}

.change {
  position: absolute;
  /* left: 50%; */
  top: 120px;
  right: 50px;
  /* width: 400px;
  height: 490px; */
}

.login-right .ms-title {
  margin: 120px 80px 0px 100px;
  /* font-size: 20px; */
  color: #409eff;
}

.login-right .el-select .el-input__inner {
  cursor: pointer;
  padding-right: 35px;
  color: #409eff;
  font-size: 20px;
}

.login-right .el-input__inner {
  /* border: 1px solid #DCDFE6; */
  border: none;
}

.ms-container {
  /* margin-top: 80px; */
  margin: 180px 60px 0px 60px;
}

.ms-container .el-input__inner {
  border-radius: 0 !important;
  border: none !important;
  border-bottom: 1px solid #dcdfe6 !important;
}

.ms-container .el-form-item__error {
  top: 101% !important;
  left: 25px !important;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}

.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 30px;
}
</style>
