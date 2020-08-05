<template>
  <div class="Evaluating">
    <div class="productContent">
      <div class="productBanner">
        <img src="../../assets/x14.jpeg" />
        <div class="productBannerContent">
          <h3>蛮犀安全移动应用评测系统</h3>
          <article>
            蛮犀安全移动应用评测系统，是蛮犀科技吸取同行产品相关优势并结合市场监管需求，采用静态代码、资源、数据扫描检测，运行时数据挖掘，运行时内容检测等技术，依据网络安全等级保护要求、中国金融移动支付客户端技术规范、移动互联网应用软件安全评估大纲等评估要求，全面检测移动应用中存在的安全漏洞、不合规项，并将权限滥用、信息非法收集、信息泄露等严重问题，结合时下相关法律法规和监管要求，为监管机构、测评机构等提供有效的行政执法依据。
          </article>
          <router-link
            to="/Gain"
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
          <h3 class="productIntroduceTitle">产品介绍</h3>
          <div class="productIntroduceBody">
            <p>
              全面检测移动应用中存在的安全漏洞、不合规项，并将权限滥用、信息非法收集、信息泄露等严重问题，结合时下相关法律法规和监管要求，为监管机构、测评机构等提供有效的行政执法依据。
            </p>
          </div>
        </div>
        <!-- 产品特点 -->
        <div class="produtctTrait">
          <h3>产品特点</h3>
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
import $ from "jQuery";
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
<style></style>
