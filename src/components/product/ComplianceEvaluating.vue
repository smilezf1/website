<template>
  <!-- 移动应用合规评测系统 -->
  <div class="complianceEvaluating">
    <div class="productContent">
      <div class="productBanner">
        <img src="../../assets/img13.jpg" />
        <div class="productBannerContent">
          <h3>蛮犀安全移动应用合规评测系统</h3>
          <article>
            帮助用户、企业对APP隐私、过度收集、滥用等行为进行检测，帮企业高效、低成本地做APP合规自查，满足监管要求。
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
          <h3>产品介绍</h3>
          <p>
            全面检测移动应用中存在的不合规项，包含APP收集使用个人信息行为、个人信息存储方式、第三方SDK行为分析、境外数据传输分析、APP运营者对用户权益保障、应用脆弱性等其他违规违法进行评测。
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
  name: "Evaluating",
  data() {
    return {
      traitList: [
        {
          id: 1,
          imgSrc: require("../../assets/img1.png"),
          title: "对标依据广",
          content:
            "系统评测主要国内法规为主，包含App违法违规收集使用个人信息自评估指南、信息安全技术个人信息安全规范、个人金融信息保护技术规范等，全面参考时下相关法律以及行业标准进行对标评测，一次全面测试即可全面通过监管要求。"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "全面的基础数据支撑",
          content:
            "系统过全方面的数据搜集，系统中具备大量第三方SDK清单、离线IP位置库、离线代理IP位置库、离线IPV6位置库、离线代理IPV6位置库、精细化的权限数据清单，可保证第三方SDK行为分析、境外数据传输分析拥有海量的数据支撑。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "深入的评测过程",
          content:
            "通过使用模拟用户操作的形式，针对操作过程中产生的缓存、通信以及代码数据进行分析，并以白帽子的思维对APP逻辑进行渗透，全面发现其中不符合项。"
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
