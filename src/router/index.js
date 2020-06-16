import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Index from '@/components/Index.vue'
import Product from '@/components/Product.vue'
import Service from '@/components/Service.vue'
import Project from '@/components/Project.vue'
import About from '@/components/About.vue'
import Connect from '@/components/Connect.vue'
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
import safetyService from '@/components/product/safetyService.vue'
//About文件下的组件
import companyIntroduce from '@/components/About/companyIntroduce.vue';
import devHistroy from '@/components/About/devHistroy.vue';
import xx from '@/components/xx.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
    redirect: "/Product/Evaluating",
    children: [{
      path: "Evaluating",
      component: Evaluating
    },
    {
      path: "ComplianceEvaluating",
      component: ComplianceEvaluating
    },
    {
      path: "Reinforce",
      component: Reinforce
    },
    {
      path: "Code",
      component: Code
    },
    {
      path: "Virtual",
      component: Virtual
    },
    {
      path: "SecretKey",
      component: SecretKey
    },
    {
      path: "SelfInspection",
      component: SelfInspection
    },
    {
      path: "Encryption",
      component: Encryption
    },
    {
      path: "safetyEvaluation",
      component: safetyEvaluation
    },
    { path: "safetyProtection", component: safetyProtection },
    { path: "safetyService", component: safetyService }
    ]
  },
  {
    path: "/Service",
    name: "Service",
    component: Service
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
    children: [{
      path: "/About/companyIntroduce",
      component: companyIntroduce
    },
    {
      path: "/About/devHistroy",
      component: devHistroy
    }]
  },
  {
    path: "/Connect",
    name: "Connect",
    component: Connect
  },
  {
    path: "/Gain",
    name: "Gain",
    component: Gain
  }, {
    path: "/xx",
    name: "xx",
    component: xx
  },
  {
    path: "/devHistroy",
    component: devHistroy
  }
  ]
})
