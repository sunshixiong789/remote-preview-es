import Vue from "vue";
import Router from "vue-router";
import Layout from "../views/layout/Layout";

Vue.use(Router)

export const constantRouterMap = [
  { path: "/404", component: () => import("@/views/404"), hidden: true },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    name: "home",
    hidden: true,
    children: [{
      path: "home",
      component: () => import("@/views/home/index")
    }]
  },
  {
    path: "/userinfo",
    component: Layout,
    children: [
      {
        path: "personal",
        name: "Form",
        component: () => import("@/views/userinfo/personal"),
        meta: { title: "个人中心", icon: "address-card" }
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
]

export default new Router({
  // mode: "history", // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
