<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/newscontainer' }">
                    <i class="el-icon-date"></i>星闻内容
                </el-breadcrumb-item>
                <el-breadcrumb-item>编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container" style="position:relative;">
            <div class="form-box" style="width:100%;">
                <div style="font-size:18px; margin-left:10px;">编辑/发布文章</div>
                <div style="margin: 20px;"></div>
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="标签名称" prop="tagname" style="width:60%;">
                        <el-input v-model="ruleForm.tagname" placeholder="请输入标签名称"></el-input>
                    </el-form-item>
                    <el-form-item label="标签描述" prop="tagdesc" style="width:60%;">
                        <el-input type="textarea" :autosize="{ minRows:4, maxRows: 8}" placeholder="请输入标签描述"
                            v-model="ruleForm.tagdesc"></el-input>
                    </el-form-item>
                    <div style="position:absolute;top:80px;left:60%;"></div>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">保存</el-button>
                        <el-button @click="onCancle">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mavonEditor
    } from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    export default {
        name: "UE",
        data: function () {
            return {
                ruleForm: {
                    tagname:"",
                    tagdesc:""
                },         
            };
        },
        components: {
            mavonEditor
        },
        methods: {
            submitForm() {
                var _this = this;
                var path = "";
                var data = {
                    tagname:this.ruleForm.tagname,
                    tagdesc:this.ruleForm.tagdesc
                };
                if (this.$route.query.id) {
                    path = `${this.baseURL}/tags/update`;
                    data.id = this.$route.query.id;
                } else {
                    path = `${this.baseURL}/tags/add`;
                }
                this.$axios.post(path, data).then(res => {
                    if (res.data.code == 0) {
                        this.$message.success(res.data.msg);
                        setTimeout(function () {
                            _this.$router.push("/tagslist");
                        }, 500);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            },
            onCancle() {
                this.$router.push("/tagslist");
            },
            //获取标签信息
            getData(data) {
                var _this = this;
                data.id = this.$route.query.id;
                this.$axios.post(`${this.baseURL}/tags/detail`, data).then(res => {
                    if (res.data.code == 0) {
                        this.ruleForm = res.data.data;
                    } else {
                        this.ruleForm = {
                           tagname:"",
                           tagdesc:""
                        }
                    }
                });
            },
        },
        mounted() {

        },
        created() {
            if (this.$route.query.id) {
                this.getData({})
            }
        },
    };

</script>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 100%;
        height: 178px;
        display: block;
    }

    .el-upload--text {
        width: 250px;
    }

    /* .edui-editor {
  line-height: normal;
} */
    .el-form-item--small .el-form-item__content,
    .el-form-item--small .el-form-item__label {
        line-height: 20px !important;
    }

    /* img {
    max-width: 100%; 
    }
    body {
    overflow-y: scroll !important;
    }
    .view {
    word-break: break-all;
    }
    .vote_area {
    display: block;
    }
    .vote_iframe {
    background-color: transparent;
    border: 0 none;
    height: 100%;
    }
    #edui1_imagescale{display:none !important;} */

</style>
