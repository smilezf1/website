<template>
  <div class="securityConsulting">
    <!-- 蛮犀安全咨询服务 -->
    <!-- banner -->
    <div class="percolationTestBanner">
      <img src="../../assets/banner14.jpeg" />
      <div class="percolationTestBannerContent">
        <h1>蛮犀安全咨询服务</h1>
        <article>蛮犀安全咨询服务，提供对移动应用全生命周期中存在的信息安全风险进行全面的咨询服务。</article>
      </div>
    </div>
    <div class="percolationTestBox">
      <!-- 服务介绍 -->
      <div class="serviceIntroduce">
        <h1>服务介绍</h1>
        <p>蛮犀安全咨询服务体系是依据ISO27001、信息安全等级保护、SOX、IT内控等国际、国内优秀的信息安全体系标准，遵循良好的思路框架，为客户提供标准政策合规性咨询服务，在遵循适度安全的原则基础上，帮助客户平衡成本与效益，合理部署和利用信息安全的信任体系、防御体系、监控体系、应急体系等重要的基础设施和组织架构，制订合适的安全策略、措施和方案，从而确保组织机构具有完成其使命的信息安全保障能力。</p>
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
  name: "securityConsulting",
  data() {
    return {
      scopeList: [
        {
          id: 1,
          imgSrc: require("../../assets/img1.png"),
          title: "安全规划与设计",
          content:
            "对信息安全进行架构与规划，为未来的信息安全建设设计架构蓝图，并为中长期信息安全建设指明方向。"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "安全风险管理",
          content:
            "依据信息安全管理体系等相关标准，通过调查、访谈和技术检测等多种方式对风险要素进行数据采集，采用定量、定性相结合的方法对采集数据进行综合风险分析。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "等保咨询",
          content:
            "满足国家要求、满足业务安全要求、提升企业整体安全能力、增强企业人员安全意识。"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "信息科技风险管理建设",
          content:
            "了解组织信息科技风险管理现状，明确信息科技风险管理相关部门职责与岗位，制定信息科技风险管理标准，确定信息安全风险管理制度。"
        }
      ]
    };
  }
};
</script>
