import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/Home/Home.vue')
const Login = () => import('../pages/Login/Login.vue')
const ComponyInfoManage = () => import('../pages/Componyinfomanage/componyinfomanage.vue')
const PostInfoManage = () => import('../pages/Postinfomanage/postinfomanage.vue')
const OrderInfoManage = () => import('../pages/Orderinfomanage/orderinfomanage.vue')
const PostType =() => import('../pages/Datamanageinfo/datamanageinfo.vue')
const Index = () => import('../pages/Index/index.vue')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savePosition) {//返回页面在之前停留过的位置
        if (savePosition) {
            return savePosition;
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta:{
                requireAuth: true
            },
            children: [
                {
                    path:'/index',
                    name:'首页',
                    component:Index,
                    meta:{
                        requireAuth: true
                    }
                },
                {
                    path: '/componyinfomanage',
                    name: '企业信息',
                    component: ComponyInfoManage,
                    meta:{
                        requireAuth: true
                    }
                },
                {
                    path: '/postinfomange',
                    name: '岗位信息',
                    component: PostInfoManage,
                    meta:{
                        requireAuth: true
                    }
                },
                {
                    path: '/orderinfomange',
                    name: '订单信息',
                    component: OrderInfoManage,
                    meta:{
                        requireAuth: true
                    }
                },
                {
                    path: '/datamangeinfo',
                    name: '数据信息',
                    component: PostType,
                    meta:{
                        requireAuth: true
                    }
                }
            ]
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})


// router.beforeEach((to,from,next)=>{
//     if(to.meta.requireAuth){
//         const username = localStorage.getItem("token");
//         if(username){
//             next();
//         }else{
//             next({
//                 path:'/login'
//             })
//         }
//     }else{
//         next();
//     }
// })

export default router;