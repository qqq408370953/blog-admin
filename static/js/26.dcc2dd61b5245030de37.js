webpackJsonp([26],{BqiC:function(e,r){},GF4k:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s("mvHQ"),o=s.n(t),a={data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},tips:!1}},methods:{submitForm:function(e){var r=this;this.$axios.post(this.baseURL+"/user/login",{username:this.ruleForm.username,password:this.ruleForm.password}).then(function(e){var s=e.data.data;0==s.code?(sessionStorage.setItem("token",o()(s.info.token)),sessionStorage.setItem("user",o()(s.info)),r.$router.push("/constellation")):r.tips=!0})}}},n={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"ms-title"},[e._v("星座运营管理后台")]),e._v(" "),s("div",{staticClass:"ms-login"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:"username"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.submitForm("ruleForm")}},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("登录")])],1),e._v(" "),e.tips?s("p",{staticStyle:{"font-size":"12px","line-height":"30px",color:"red"}},[e._v("用户名或密码错误")]):e._e()],1)],1)])},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(e){s("BqiC")},"data-v-48fe6454",null);r.default=i.exports}});