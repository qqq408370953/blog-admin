import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: '首页',
                requireAuth: true
            },
            children: [
                {
                    path: '/newscontainer',
                    component: resolve => require(['../components/page/Container/NewsContainer.vue'], resolve),
                    meta: {
                        title: '博客内容',
                        requireAuth: true
                    }
                },
                {
                    path: '/editnewscontainer',
                    component: resolve => require(['../components/page/Container/EditNewsContainer.vue'], resolve),
                    meta: {
                        title: '编辑博客内容',
                        requireAuth: true
                    }
                },
                {
                    path: '/navlist',
                    component: resolve => require(['../components/page/Container/navlist.vue'], resolve),
                    meta: {
                        title: '导航列表',
                        requireAuth: true
                    }
                },
                {
                    path: '/editnav',
                    component: resolve => require(['../components/page/Container/editnav.vue'], resolve),
                    meta: {
                        title: '编辑导航',
                        requireAuth: true
                    }
                },
                {
                    path: '/tagslist',
                    component: resolve => require(['../components/page/Container/tagslist.vue'], resolve),
                    meta: {
                        title: '标签管理',
                        requireAuth: true
                    }
                },
                {
                    path: '/addtags',
                    component: resolve => require(['../components/page/Container/addtags.vue'], resolve),
                    meta: {
                        title: '添加标签',
                        requireAuth: true
                    }
                },
                {
                    path: '/typeslist',
                    component: resolve => require(['../components/page/Container/typeslist.vue'], resolve),
                    meta: {
                        title: '导航类型管理',
                        requireAuth: true
                    }
                },
                {
                    path: '/addtypes',
                    component: resolve => require(['../components/page/Container/addtypes.vue'], resolve),
                    meta: {
                        title: '添加导航类型',
                        requireAuth: true
                    }
                },
                {
                    path: '/categorylist',
                    component: resolve => require(['../components/page/Container/categorylist.vue'], resolve),
                    meta: {
                        title: '分类管理',
                        requireAuth: true
                    }
                },
                {
                    path: '/addcategory',
                    component: resolve => require(['../components/page/Container/addcategory.vue'], resolve),
                    meta: {
                        title: '添加分类',
                        requireAuth: true
                    }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
    // mode:'history' 
})
