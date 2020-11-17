import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: "/",
    name: "Index",
    redirect: '/index',
    meta: {
      title: "蛮犀科技|构建智慧安全生活",
    },
    component: () => import("../components/page/home.vue"),
    children: [
      {
        path: 'index', name: 'index', meta: {
          title: '蛮犀科技|构建智慧安全生活', keyWords: '蛮犀科技|蛮犀安全|APP信息安全生|APP加固|APP检测|APP隐私合规检测|APP应用渗透|等保测评|等保整改|APP安全|APP个人信息安全',
          description: '蛮犀科技|蛮犀安全|APP安全评测|APP漏洞评测|APP合规评测|APP个人信息安全评测|APP持续监督|APP安全防护|应用程序安全加固|应用代码源保护|应用数据资源保护|用户交互信息保护|APP安全业务|通信数据保护|程序密钥保护|业务落地数据保护|设备环境自查'
        }, component: () => import("../components/page/homePage.vue")
      },
      { path: 'connect', name: 'connect', meta: { title: '蛮犀科技|联系我们', keyWords: '蛮犀科技|蛮犀安全|APP信息安全生|APP加固|APP检测|APP隐私合规检测|APP应用渗透|等保测评|等保整改|APP安全|APP个人信息安全', description: '蛮犀科技|蛮犀安全|APP安全评测|APP漏洞评测|APP合规评测|APP个人信息安全评测|APP持续监督|APP安全防护|应用程序安全加固|应用代码源保护|应用数据资源保护|用户交互信息保护|APP安全业务|通信数据保护|程序密钥保护|业务落地数据保护|设备环境自查' }, component: () => import("../components/connect/index") },
      {
        path: 'article', name: 'article', meta: { title: '蛮犀科技|蛮犀资讯', keyWords: '蛮犀科技|蛮犀安全|蛮犀资讯', description: '蛮犀科技|蛮犀安全|蛮犀资讯|建立安全体系|保驾护航' }, component: () => import("../components/Article/index.vue")
      },
      { path: '/article/detail:id?', name: 'articleDetail', meta: { title: '蛮犀科技|蛮犀资讯详情', keyWords: '蛮犀科技|蛮犀安全|APP信息安全生|APP加固|APP检测|APP隐私合规检测|APP应用渗透|等保测评|等保整改|APP安全|APP个人信息安全', description: '蛮犀科技|蛮犀安全|APP安全评测|APP漏洞评测|APP合规评测|APP个人信息安全评测|APP持续监督|APP安全防护|应用程序安全加固|应用代码源保护|应用数据资源保护|用户交互信息保护|APP安全业务|通信数据保护|程序密钥保护|业务落地数据保护|设备环境自查' }, component: () => import("../components/Article/detail.vue") },
      {
        path: 'product', name: 'product', meta: { title: '蛮犀科技|安全产品', keyWords: '蛮犀科技|蛮犀安全|安全产品|移动应用评测', description: '蛮犀科技|蛮犀安全|静态代码|数据扫描检测|数据挖掘|内容检测|网络安全|安全漏洞|不合规项|权限滥用|信息非法收集|信息非法收集|信息泄露' }, component: () => import('../components/product/list.vue'), redirect: 'product/evaluating', children: [
          {
            path: 'evaluating', name: 'productEvaluating', meta: { title: '蛮犀科技|移动应用评测系统', keyWords: '蛮犀科技|蛮犀安全|安全产品|移动应用评测', description: '蛮犀科技|蛮犀安全|移动应用评测|静态代码|数据扫描检测|数据挖掘|内容检测|网络安全|安全漏洞|不合规项|权限滥用|信息非法收集|信息非法收集|信息泄露' }, component: () => import("../components/product/Evaluating.vue")
          },
          {
            path: "complianceEvaluating",
            component: () => import("../components/product/ComplianceEvaluating.vue"),
            meta: { title: "蛮犀科技|移动应用合规评测系统", keyWords: '蛮犀科技|蛮犀安全|应用合规评测', description: '蛮犀科技|蛮犀安全|规评测|APP隐私|过度收集|APP合规自查' }
          },
          {
            path: "reinforce",
            component: () => import("../components/product/Reinforce.vue"),
            meta: { title: "蛮犀科技|移动应用加固系统", keyWords: '蛮犀科技|蛮犀安全|安全产品|移动应用加固', description: '蛮犀科技|蛮犀安全|安全产品|移动应用加固|代码加固|数据保护|风险监控|网络安全|技术规范|应用软件安全|' }
          },
          {
            path: "code",
            component: () => import("../components/product/Code.vue"),
            meta: { title: "蛮犀科技|移动应用源码加固编译器", keyWords: '蛮犀科技|蛮犀安全|安全产品|源码加固编译器', description: '蛮犀科技|蛮犀安全|安全产品|源码加固编译器|代码混淆|放调试|反盗版|反恶意代码' }
          },
          {
            path: "virtual",
            component: () => import("../components/product/Virtual.vue"),
            meta: { title: "蛮犀科技|移动应用源码虚拟化编译器", keyWords: '', description: '蛮犀科技|蛮犀安全|安全产品|源码虚拟化编译器|C/C++汇编|安全保护|提升安全能力' }
          },
          {
            path: "secretKey",
            component: () => import("../components/product/SecretKey.vue"),
            meta: { title: "蛮犀科技|移动应用密钥白盒插件", keyWords: '蛮犀科技|蛮犀安全|安全产品|密钥白盒', description: '蛮犀科技|蛮犀安全|安全产品|密钥白盒|安全加解密数据|保障信息机密性' }
          }
        ]
      },
      {
        path: "/service",
        name: "service",
        meta: { title: "安全服务" },
        component: () => import("../components/Service/list.vue"),
        redirect: "/service/percolationTest",
        children: [{
          path: "percolationTest",
          component: () => import("../components/Service/percolationTest.vue"),
          meta: { title: "蛮犀科技|移动应用安全渗透", keyWords: '蛮犀科技|蛮犀安全|安全服务|渗透测试', description: '蛮犀科技|蛮犀安全|安全服务|渗透测试|移动应用程序数据|安全测试|黑客思维|全量渗透测试' }
        }, {
          path: "securityConsulting",
          component: () => import("../components/Service/securityConsulting.vue"),
          meta: { title: "蛮犀科技|移动应用安全咨询", keyWords: '蛮犀科技|蛮犀安全|安全服务|咨询服务', description: '蛮犀科技|蛮犀安全|安全服务|咨询服务|信息安全风险|全面咨询' }
        }
        ]
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../components/About/list.vue"),
        meta: { title: "蛮犀科技|关于我们" },
        redirect: "/about/companyIntroduce",
        children: [{
          path: "companyIntroduce",
          component: () => import("../components/About/companyIntroduce.vue"),
          meta: { title: "蛮犀科技|公司简介", keyWords: '上海蛮犀科技有限公司,信息安全研究的创新技术型高科技企业', description: '上海蛮犀科技有限公司,在漏洞挖掘、应用加固、隐私合规、威胁情报、服务端防护等领域取得了丰硕的成果,为政府、互联网、金融、医疗等企业的APP提供安全防护工具及“云、管、端”的信息安全解决方案,为企业数据安全及隐私保驾护航。' },
        },
        {
          path: "devHistroy",
          component: () => import('../components/About/devHistroy.vue'),
          meta: { title: "蛮犀科技|发展历程", keyWords: '上海蛮犀科技有限公司,信息安全研究的创新技术型高科技企业', description: '上海蛮犀科技有限公司,在漏洞挖掘、应用加固、隐私合规、威胁情报、服务端防护等领域取得了丰硕的成果,为政府、互联网、金融、医疗等企业的APP提供安全防护工具及“云、管、端”的信息安全解决方案,为企业数据安全及隐私保驾护航。' },
        }]
      },
      {
        path: "/connect",
        name: "connect",
        component: () => import("../components/Connect/index.vue"),
        meta: { title: "蛮犀科技|联系我们", keyWords: '上海蛮犀科技有限公司,信息安全研究的创新技术型高科技企业', description: '上海蛮犀科技有限公司,在漏洞挖掘、应用加固、隐私合规、威胁情报、服务端防护等领域取得了丰硕的成果,为政府、互联网、金融、医疗等企业的APP提供安全防护工具及“云、管、端”的信息安全解决方案,为企业数据安全及隐私保驾护航。' }
      }
    ]
  },
  {
    path: '/404', name: 'notFound', component: () => import("../components/error/404.vue"),
  },
  {
    path: '*',
    redirect: '/404',
    name: 'notFound',
    hidden: true
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
