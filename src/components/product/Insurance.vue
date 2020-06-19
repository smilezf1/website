<template>
  <div class="Insurance">
    <!--  移动应用安全业务 -->
    <div class="productContent">
      <div class="productBanner">
        <img src="../../assets/develop.jpg" />
        <div class="productBannerContent">
          <h3>蛮犀安全移动应用安全业务</h3>
          <article>
            蛮犀科技吸取同类产品相关优势并结合市场监管需求,采用静态代码、资源、数据扫描检测、运行时数据挖掘，
            运行是内容检测等技术,依据网络安全等级保护要求、中国金融移动支付客户端技术规范、移动互联网应用软件安全评估大纲等评估要求研制的移动应用安全评测平台
          </article>
          <router-link
            to="/"
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
          <h3>产品介绍</h3>
          <p>
            全面检测移动应用中存在的安全漏洞、不和规项,并将权限滥用、信息非法收集、信息泄露等严重问题,结合时下相关法律法规和监管要求,为监管机构、测评机构等有效地提供行政执法依据。
          </p>
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
export default {
  name: "Insurance",
  data() {
    return {
      traitList: [
        {
          id: 1,
          imgSrc: require("../../assets/string.png"),
          title: "强力的逆向引擎",
          content:
            "系统具备DeX文件逆向引擎、elf格式文件逆向引擎、二进制文件逆向引擎、动态调试引擎、反汇编引擎、解释语言解析引擎，并汇集不针对采用了加固保护应用的自动脱壳引擎，对已加固应用预脱壳处理，然后再对应用进行全方面的安全评测，让支持评测的数据更全面"
        },
        {
          id: 2,
          imgSrc: require("../../assets/string.png"),
          title: "全面的基础数据支撑",
          content:
            "系统通过全方面的数据收集，使评测系统中具备3000+的第三方SDK数据清单、具备离线版|P位置库、具备离线版代理P位置库、具备高线版PV6位置库、目备商线版代理|Pv6位置库、具备更细化的权限数据清单，使评测报告中的数据更加精准、详纽"
        },
        {
          id: 3,
          imgSrc: require("../../assets/string.png"),
          title: "深入的标准解读",
          content:
            "通过对国家法律法规、行业标隹进行深入解读，将每一个评测项都与依据中的某一章节或某一要求进行对应，使每一个评测项都有章可循辅辅"
        },
        {
          id: 4,
          imgSrc: require("../../assets/string.png"),
          title: "公开的评测过程",
          content:
            "系统出具的评测报告中，针对每一项评测项都进行详细的描述其中对于评测过程更是详细到具体的操作过程，使阅读者可根据操作过程进行复现，排除针对，使评测系统透明公开，有理可籍。"
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
