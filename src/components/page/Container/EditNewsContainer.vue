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
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="文章标题" prop="arttitle" style="width:60%;">
                        <el-input v-model="ruleForm.arttitle" placeholder="请输入文章标题"></el-input>
                    </el-form-item>
                    <el-form-item label="文章概要" prop="abstract" style="width:60%;">
                        <el-input type="textarea" :autosize="{ minRows:4, maxRows: 8}" placeholder="请输入文章概要"
                            v-model="ruleForm.abstract"></el-input>
                    </el-form-item>
                    <el-form-item label="文章浏览量" prop="pv" style="width:36%;">
                        <el-input v-model="ruleForm.pv" placeholder="请输入文章浏览量"></el-input>
                    </el-form-item>
                    <el-form-item label="封面图片" prop="imgurl">
                        <el-upload class="avatar-uploader" :action="UploadUrl()" name="avatar" :show-file-list="false"
                            :on-success="imgSuccess" :before-upload="beforeUploadImg">
                            <img v-if="ruleForm.thumbnail" :src="ruleForm.thumbnail" class="avatar">
                            <i v-else class="el-icon-upload"></i>
                            <div class="el-upload__text">点击上传封面图片</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="文章标签" prop="tag" style="width:60%;">
                        <el-select v-model="ruleForm.tag" placeholder="请选择标签">
                            <el-option :label="item.tagname" :value="item.id" v-for="(item,index) in tagData"
                                :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="文章分类" prop="category" style="width:60%;">
                        <el-select v-model="ruleForm.category" placeholder="请选择文章分类">
                            <el-option :label="item.categoryname" :value="item.id" v-for="(item,index) in categoryData"
                                :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="文章内容" prop="content" style="width:100%;">
                        <!-- <div id="editor" type="text/plain"></div> -->
                        <mavon-editor v-model="ruleForm.content" :subfield="prop.subfield"
                            :defaultOpen="prop.defaultOpen" :toolbarsFlag="prop.toolbarsFlag" :editable="prop.editable"
                            :scrollStyle="prop.scrollStyle" :codeStyle="prop.codeStyle" :ishljs="prop.ishljs" ref="md"
                            @imgAdd="$imgAdd" @change="change" style="height: calc(100% - 4px);" />
                    </el-form-item>
                    <div style="position:absolute;top:80px;left:60%;"></div>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">保存</el-button>
                        <!-- <el-button type="primary" @click="submitForm('1')">保存并发布</el-button> -->
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
    import axios from 'axios';
    export default {
        name: "UE",
        data: function () {
            return {
                ruleForm: {
                    arttitle: "",
                    abstract: "",
                    pv: "",
                    thumbnail: "",
                    tag: "",
                    category: "",
                    content: "",
                },
                prop: {

                    subfield: true, // 单双栏模式
                    defaultOpen: 'preview', //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                    editable: true,
                    toolbarsFlag: true,
                    scrollStyle: true,
                    codeStyle: 'tomorrow-night',
                    ishljs: true,

                },
                rules: {},
                editorOption: {
                    placeholder: "请输入文章内容"
                },
                imgIds: [], //所有图片id
                removeIds: [], //被删除图片id
                // dataForm: {
                //     token: JSON.parse(sessionStorage.getItem("token"))
                // },
                token: JSON.parse(sessionStorage.getItem("token")),
                title: "",
                source_type: "0",
                tagData: [],
                categoryData: [],
                html: "",
                img_file: {},
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: false, // 全屏编辑
                    readmodel: false, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: false, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: false // 预览
                }
            };
        },
        components: {
            mavonEditor
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file) {
                var formdata = new FormData()
                formdata.append('avatar', $file);
                this.instance.post(`${this.baseURL}/users/upload`, formdata).then((res)=>{
                    let _res = res.data;
                    this.$refs.md.$img2Url(pos, _res.data);
                })
            },
            change(value, render) {
                // render 为 markdown 解析后的结果
                this.html = render;
            },
            // -------图片上传部分开始--------
            UploadUrl: function () {
                var url = `${this.baseURL}/users/upload`;
                return url;
            },
            beforeUploadImg(file) {
                const isLt10M = file.size / 1024 / 1024 < 10;
                if (!isLt10M) {
                    this.$message({
                        message: "上传图片大小不能超过 10MB!",
                        type: "warning"
                    });
                }
                return isLt10M;
            },
            imgSuccess: function (response, file, fileList) {
                var _this = this;
                if (response.code == 0) {
                    this.$message(response.msg);
                    _this.ruleForm.thumbnail = response.data;
                } else {
                    this.$message({
                        message: "图片上传失败!",
                        type: "error"
                    });
                }
            },
            submitForm() {
                var _this = this;
                var path = "";
                var data = {
                    arttitle: this.ruleForm.arttitle,
                    abstract: this.ruleForm.abstract,
                    pv: this.ruleForm.pv,
                    thumbnail: this.ruleForm.thumbnail,
                    tag: this.ruleForm.tag,
                    category: this.ruleForm.category,
                    content: this.ruleForm.content,
                    html: this.html
                };
                if (this.$route.query.id) {
                    path = `${this.baseURL}/articles/update`;
                    data.id = this.$route.query.id;
                } else {
                    path = `${this.baseURL}/articles/add`;
                }
                this.$axios.post(path, data).then(res => {
                    if (res.data.code == 0) {
                        this.$message.success(res.data.msg);
                        setTimeout(function () {
                            _this.$router.push("/newscontainer");
                        }, 500);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            },
            onCancle() {
                this.$router.push("/newscontainer");
            },
            //获取文章信息
            getData(data) {
                var _this = this;
                data.id = this.$route.query.id;
                this.$axios.post(`${this.baseURL}/articles/detail`, data).then(res => {
                    if (res.data.code == 0) {
                        this.ruleForm = res.data.data;
                    } else {
                        this.ruleForm = {
                            arttitle: "",
                            abstract: "",
                            pv: "",
                            thumbnail: "",
                            tag: "",
                            category: "",
                            content: "",
                        }
                    }
                });
            },
            // 获取标签列表
            getTagData() {
                var _this = this;
                var data = {

                };
                this.$axios
                    .post(`${this.baseURL}/tags/allList`, data)
                    .then(res => {
                        if (res.data.code == 0) {
                            this.tagData = res.data.data;
                        } else {
                            this.tagData = [];
                        }
                    });
            },
            // 获取分类列表
            getCategorysData() {
                var _this = this;
                var data = {

                };
                this.$axios
                    .post(`${this.baseURL}/categorys/allList`, data)
                    .then(res => {
                        if (res.data.code == 0) {
                            this.categoryData = res.data.data;
                        } else {
                            this.categoryData = [];
                        }
                    });
            }
        },
        mounted() {

        },
        watch: {
            // 方法1
            $route(to, from) {
                //监听路由是否变化
                this.getTagData();
                this.getCategorysData();
            }
        },
        created() {
            this.getTagData();
            this.getCategorysData();
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
