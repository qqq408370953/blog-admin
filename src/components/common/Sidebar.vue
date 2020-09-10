<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      :unique-opened="false"
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              <span>{{ subItem.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    const userInfo = JSON.parse(sessionStorage.getItem("user"));
    return {
      collapse: false,
      menu: userInfo.menu,
      items: [
        {
          icon: "el-icon-tickets",
          index: "newscontainer",
          title: "内容管理",
          subs: [
            {
              index: "newscontainer",
              title: "文章内容",
            },
            {
              index: "navlist",
              title: "导航管理",
            },
            {
              index: "typeslist",
              title: "导航类型管理",
            },
            {
              index: "tagslist",
              title: "标签管理",
            },
            {
              index: "categorylist",
              title: "分类管理",
            },
          ],
        },
      ],
    };
  },
  methods: {
    tabUrl(key) {
      var urlObj = {
        //页面和导航对应关系映射
        newscontainer: "newscontainer",
        editnewscontainer: "newscontainer",
        addtags: "tagslist",
        tagslist: "tagslist",
        categorylist: "categorylist",
        addcategory: "categorylist",
        navlist: "navlist",
        editnav: "navlist",
        typeslist: "typeslist",
        addtypes: "typeslist",
      };
      return urlObj[key];
    },
  },
  mounted() {},
  computed: {
    onRoutes() {
      var path = this.$route.path.replace("/", "");
      return this.tabUrl(path);
    },
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}
</style>
