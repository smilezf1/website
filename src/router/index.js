import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [{
    path: "/",
    name: "Index",
    meta: {
      title: "蛮犀科技-首页"
    },
    component: () => import("../components/page/Index.vue")
  },
  {
    path: "/Article",
    name: "Article",
    meta: { title: "蛮犀资讯" },
    component: () => import("../components/Article/Article.vue")
  },
  {
    path: "/Article/detail",
    name: 'articleDetail',
    meta: { title: "蛮犀资讯" },
    component: () => import("../components/Article/articleDetail.vue")
  },
  {
    path: "/Product",
    name: "Product",
    component: () => import("../components/product/list.vue"),
    meta: {
      title: "蛮犀科技-安全产品"
    },
    redirect: "/Product/Evaluating",
    children: [{
      path: "Evaluating",
      component: () => import("../components/product/Evaluating.vue"),
      meta: { title: "蛮犀科技-移动应用评测系统" }
    },
    {
      path: "ComplianceEvaluating",
      component: () => import("../components/product/ComplianceEvaluating.vue"),
      meta: { title: "蛮犀科技-移动应用合规评测系统" }
    },
    {
      path: "Reinforce",
      component: () => import("../components/product/Reinforce.vue"),
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    {
      path: "Code",
      component: () => import("../components/product/Code.vue"),
      meta: { title: "蛮犀科技-移动应用源码加固编译器" }
    },
    {
      path: "Virtual",
      component: () => import("../components/product/Virtual.vue"),
      meta: { title: "蛮犀科技-移动应用源码虚拟化编译器" }
    },
    {
      path: "SecretKey",
      component: () => import("../components/product/SecretKey.vue"),
      meta: { title: "蛮犀科技-移动应用密钥白盒插件" }
    },
    {
      path: "SelfInspection",
      component: () => import("../components/product/SelfInspection.vue"),
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    {
      path: "Encryption",
      component: () => import('../components/product/Encryption.vue'),
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    {
      path: "safetyEvaluation",
      component: () => import("../components/product/safetyEvaluation.vue"),
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    { path: "safetyProtection", component: () => import("../components/product/safetyProtection.vue"), meta: { title: "蛮犀科技-移动应用加固系统" } },
    { path: "Insurance", component: () => import("../components/product/Insurance.vue"), meta: { title: "蛮犀科技-移动应用加固系统" } }
    ]
  },
  {
    path: "/Service",
    name: "Service",
    meta: { title: "安全服务" },
    component: () => import("../components/Service/list.vue"),
    redirect: "/Service/percolationTest",
    children: [{
      path: "percolationTest",
      component: () => import("../components/Service/percolationTest.vue"),
      meta: { title: "蛮犀科技-移动应用安全渗透" }
    }, {
      path: "securityConsulting",
      component: () => import("../components/Service/securityConsulting.vue"),
      meta: { title: "蛮犀科技-移动应用安全咨询" }
    }
    ]
  },
  {
    path: "/Project",
    name: "Project",
    component: () => import("../components/Project.vue")
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../components/About/list.vue"),
    meta: { title: "蛮犀科技-关于我们" },
    redirect: "/About/companyIntroduce",
    children: [{
      path: "companyIntroduce",
      component: () => import("../components/About/companyIntroduce.vue"),
      meta: { title: "蛮犀科技-公司简介" },
    },
    {
      path: "devHistroy",
      component: () => import('../components/About/devHistroy.vue'),
      meta: { title: "蛮犀科技-发展历程" },
    }]
  },
  {
    path: "/Connect",
    name: "Connect",
    component: () => import("../components/Connect/Connect.vue"),
    meta: { title: "蛮犀科技-联系我们" }
  },
  {
    path: "/Gain",
    name: "Gain",
    component: () => import("../components/page/Gain.vue"),
    meta: { title: "蛮犀科技-获取使用" }
  },
  {
    path: "/devHistroy",
    component: () => import("../components/About/devHistroy.vue")
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
