import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Index from '@/components/Index.vue'
import Product from '@/components/Product.vue'
import Service from '@/components/Service.vue'
import Project from '@/components/Project.vue'
import About from '@/components/About.vue'
import Connect from '@/components/Connect/Connect.vue'
//product文件下的组件
import Evaluating from '@/components/product/Evaluating.vue'
import ComplianceEvaluating from '@/components/product/ComplianceEvaluating.vue'
import Reinforce from '@/components/product/Reinforce.vue'
import Code from '@/components/product/Code.vue'
import Virtual from '@/components/product/Virtual.vue'
import SecretKey from '@/components/product/SecretKey.vue'
import Encryption from '@/components/product/Encryption.vue'
import SelfInspection from '@/components/product/SelfInspection.vue'
import Gain from '@/components/Gain.vue'
import safetyEvaluation from '@/components/product/safetyEvaluation.vue'
import safetyProtection from '@/components/product/safetyProtection.vue'
import Insurance from '@/components/product/Insurance.vue'
//About文件下的组件
import companyIntroduce from '@/components/About/companyIntroduce.vue';
import devHistroy from '@/components/About/devHistroy.vue';
//Service文件夹下的组件
import percolationTest from '@/components/Service/percolationTest.vue';
import securityConsulting from '@/components/Service/securityConsulting.vue';
//文章页面
import Article from '@/components/Article/Article.vue'
//文章详细页面
import articleDetail from '@/components/Article/articleDetail.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: "/",
    name: "Index",
    meta: {
      title: "蛮犀科技-首页"
    },
    component: Index
  },
  {
    path: "/Article",
    name: "Article",
    meta: { title: "蛮犀资讯" },
    component: Article
  },
  {
    path: "/Article:id",
    name: 'articleDetail',
    meta: { title: "蛮犀资讯" },
    component: articleDetail
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
    meta: {
      title: "蛮犀科技-安全产品"
    },
    redirect: "/Product/Evaluating",
    children: [{
      path: "Evaluating",
      component: Evaluating,
      meta: { title: "蛮犀科技-移动应用评测系统" }
    },
    {
      path: "ComplianceEvaluating",
      component: ComplianceEvaluating,
      meta: { title: "蛮犀科技-移动应用合规评测系统" }
    },
    {
      path: "Reinforce",
      component: Reinforce,
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    {
      path: "Code",
      component: Code,
      meta: { title: "蛮犀科技-移动应用源码加固编译器" }
    },
    {
      path: "Virtual",
      component: Virtual,
      meta: { title: "蛮犀科技-移动应用源码虚拟化编译器" }
    },
    {
      path: "SecretKey",
      component: SecretKey,
      meta: { title: "蛮犀科技-移动应用密钥白盒插件" }
    },
    {
      path: "SelfInspection",
      component: SelfInspection,
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    {
      path: "Encryption",
      component: Encryption,
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    {
      path: "safetyEvaluation",
      component: safetyEvaluation,
      meta: { title: "蛮犀科技-移动应用加固系统" }
    },
    { path: "safetyProtection", component: safetyProtection, meta: { title: "蛮犀科技-移动应用加固系统" } },
    { path: "Insurance", component: Insurance, meta: { title: "蛮犀科技-移动应用加固系统" } }
    ]
  },
  {
    path: "/Service",
    name: "Service",
    meta: { title: "安全服务" },
    component: Service,
    redirect: "/Service/percolationTest",
    children: [{
      path: "percolationTest",
      component: percolationTest,
      meta: { title: "蛮犀科技-移动应用安全渗透" }
    }, {
      path: "securityConsulting",
      component: securityConsulting,
      meta: { title: "蛮犀科技-移动应用安全咨询" }
    }
    ]
  },
  {
    path: "/Project",
    name: "Project",
    component: Project
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: { title: "蛮犀科技-关于我们" },
    redirect: "/About/companyIntroduce",
    children: [{
      path: "companyIntroduce",
      component: companyIntroduce,
      meta: { title: "蛮犀科技-公司简介" },
    },
    {
      path: "devHistroy",
      component: devHistroy,
      meta: { title: "蛮犀科技-发展历程" },
    }]
  },
  {
    path: "/Connect",
    name: "Connect",
    component: Connect,
    meta: { title: "蛮犀科技-联系我们" }
  },
  {
    path: "/Gain",
    name: "Gain",
    component: Gain,
    meta: { title: "蛮犀科技-获取使用" }
  },
  {
    path: "/devHistroy",
    component: devHistroy
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
