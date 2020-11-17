<template>
  <div class="selfInspection">
    <div class="productContent">
      <div class="productBanner">
        <!--     <img src="../../assets/develop.jpg" /> -->
        <div class="productBannerContent">
          <h1>蛮犀安全移动应用环境自查插件</h1>
          <!-- 移动应用环境自查插件 -->
          <article>
            蛮犀科技吸取同类产品相关优势并结合市场监管需求,采用静态代码、资源、数据扫描检测、运行时数据挖掘，
            运行是内容检测等技术,依据网络安全等级保护要求、中国金融移动支付客户端技术规范、移动互联网应用软件安全评估大纲等评估要求研制的移动应用安全评测平台
          </article>
          <router-link
            to="/gain"
            class="productBannerUse"
            :class="{ getUseSelect: getUseIndex == 1 }"
            @mouseover.native="getUse()"
            @mouseout.native="recovergetUse()"
            >立即获取使用</router-link
          >
        </div>
      </div>
      <!-- 产品介绍 -->
      <div class="productBox">
        <div class="productIntroduce">
          <h1>产品介绍</h1>
          <p>
            全面检测移动应用中存在的安全漏洞、不和规项,并将权限滥用、信息非法收集、信息泄露等严重问题,结合时下相关法律法规和监管要求,为监管机构、测评机构等有效地提供行政执法依据。
          </p>
        </div>
        <!-- 产品特点 -->
        <div class="produtctTrait">
          <h1>产品特点</h1>
          <ul class="productTraitContent">
            <li v-for="(item, index) in traitList" :key="index">
              <div class="productTraitContentTop">
                <img :src="item.imgSrc" />
                <p>{{ item.title }}</p>
              </div>
              <div class="productTraitContentContainer">
                <span>{{ item.content }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Evaluating",
  data() {
    return {
      traitList: [
        {
          id: 1,
          imgSrc: require("../../assets/img1.png"),
          title: "强力的逆向引擎",
          content:
            "系统具备DeX、elf、so、二进制文件逆向引擎，动态调试引擎，反汇编引擎，JavaScript解析引擎，可对已经加固应用进行加固强度测试，对应用进行全方面的安全评测，让支持评测的数据更全面。"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "全面的基础数据支撑",
          content:
            "系统过全方面的数据搜集，系统中具备大量第三方SDK清单、离线IP位置库、离线代理IP位置库、离线IPV6位置库、离线代理IPV6位置库、精细化的权限数据清单，使评测报告中的数据更加精准、详细。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "深入的标准解读",
          content:
            "通过对国家法律法规、行业标隹进行深入解读，根据每一个移动应用的相关标准与要求制定评测项，使每一个评测点都有章可循。"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "公开的评测过程",
          content:
            "出具的专业报告中，每一个评测点都会详细的描述评测过程，使阅读者可根据过程进行复现、排除，并包含对应的解决方案，使阅读者高效、低成本的进行整改。"
        }
      ],
      getUseIndex: 0
    };
  },
  methods: {
    getUse() {
      this.getUseIndex = 1;
    },
    recovergetUse() {
      this.getUseIndex = 0;
    }
  }
};
</script>
