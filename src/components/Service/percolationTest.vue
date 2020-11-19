<template>
  <div class="percolationTest">
    <!-- banner -->
    <div class="percolationTestBanner">
      <img src="../../assets/banner7.png" />
      <div class="percolationTestBannerContent">
        <h1>蛮犀安全渗透测试服务</h1>
        <article>蛮犀安全渗透测试是基于移动应用程序数据的全生命周期的安全测试服务，以黑客思维对应用中的代码、数据、业务等方面的全量渗透测试。</article>
      </div>
    </div>
    <div class="percolationTestBox">
      <!-- 服务介绍 -->
      <div class="serviceIntroduce">
        <h1>服务介绍</h1>
        <p>蛮犀安全渗透测试包括Android、iOS、公众号、小程序、Web站点等，从黑客思维和开发者角度出发，多方面对应用的代码安全、数据安全、业务逻辑安全、系统环境安全等内容进行静动态检测，并结合人工分析，模拟全量测试使用过程，获取用户数据的输入、存储处理、网络传输以及所处系统环境等方面的安全隐患进行全方位的专业测试。</p>
      </div>
      <!-- 业务范围 -->
      <div class="businessScope">
        <h1>业务范围</h1>
        <ul class="businessScopeContent">
          <li v-for="(item, index) in scopeList" :key="index">
            <div class="businessScopeContentTop">
              <img :src="item.imgSrc" />
              <p>{{ item.title }}</p>
            </div>
            <div class="businessScopeContentContainer">
              <span>{{ item.content }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "percolationTest",
  data() {
    return {
      scopeList: [
        {
          id: 1,
          imgSrc: require("../../assets/img1.png"),
          title: "Android全量渗透测试",
          content:
            "对Android APP从源码/代码、调试安全、数据安全、加密算法安全、常见安全漏洞、传输协议安全、身份鉴别安全、接口安全等方面进行人工渗透，输出渗透报告，并提供漏洞整改咨询服务。"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "iOS全量渗透测试",
          content:
            "对iOS APP从源码/代码、调试安全、数据安全、加密算法安全、常见安全漏洞、传输协议安全、身份鉴别安全、接口安全等方面进行人工渗透，输出渗透报告，并提供漏洞整改咨询服务。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "公众号、小程序全量渗透",
          content:
            "对公众号、小程序等分别从代码安全、业务安全、越权检测、接口安全等方面进行人工渗透，输出渗透报告，并提供漏洞整改咨询服务。"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "Web站点全量渗透",
          content:
            "对Web站点从服务器信息搜集、资产、认证、会话管理、权限管理、上传/下载、信息泄露、输入数据、脚本攻击、等方面安全进行人工渗透，输出渗透报告，并提供漏洞整改咨询服务。"
        }
      ]
    };
  }
};
</script>
