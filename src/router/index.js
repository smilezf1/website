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
import xx from '@/components/xx.vue'
Vue.use(Router)
export default new Router({
  routes: [
    { path: "/", name: "Index",component:Index},
    {
      path: "/Product", name: "Product", component: Product, redirect: "/Product/Evaluating",
      children: [
        { path: "Evaluating", component: Evaluating },
        { path: "ComplianceEvaluating", component: ComplianceEvaluating },
        { path: "Reinforce", component: Reinforce },
        { path: "Code", component: Code },
        { path: "Virtual", component: Virtual },
        { path: "SecretKey", component: SecretKey },
        { path: "SelfInspection", component: SelfInspection },
        { path: "Encryption", component: Encryption },
      ]
    },
    { path: "/Service", name: "Service", component: Service },
    { path: "/Project", name: "Project", component: Project },
    { path: "/About", name: "About", component: About },
    { path: "/Connect", name: "Connect", component: Connect },
    { path: "/Gain", name: "Gain", component: Gain }
  ]
})
