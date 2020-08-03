<template>
  <div class="securityConsulting">
    <!-- 蛮犀安全咨询服务 -->
    <!-- banner -->
    <div class="percolationTestBanner">
      <img src="../../assets/img26.jpg" />
      <div class="percolationTestBannerContent">
        <h3>蛮犀安全咨询服务</h3>
        <article>移动应用人工渗透测试、移动应用漏洞专项分析</article>
      </div>
    </div>
    <div class="percolationTestBox">
      <!-- 服务介绍 -->
      <div class="serviceIntroduce">
        <h3>服务介绍</h3>
        <p>移动应用人工渗透测试、移动应用漏洞专项分析</p>
      </div>
      <!-- 业务范围 -->
      <div class="businessScope">
        <h3>业务范围</h3>
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
          title: "强力的逆向引擎",
          content:
            "系统具备DeX文件逆向引擎、elf格式文件逆向引擎、二进制文件逆向引擎、动态调试引擎、反汇编引擎、解释语言解析引擎，并汇集不针对采用了加固保护应用的自动脱壳引擎，对已加固应用预脱壳处理，然后再对应用进行全方面的安全评测，让支持评测的数据更全面"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "全面的基础数据支撑",
          content:
            "系统通过全方面的数据收集，使评测系统中具备3000+的第三方SDK数据清单、具备离线版|P位置库、具备离线版代理P位置库、具备高线版PV6位置库、目备商线版代理|Pv6位置库、具备更细化的权限数据清单，使评测报告中的数据更加精准、详纽"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "深入的标准解读",
          content:
            "通过对国家法律法规、行业标隹进行深入解读，将每一个评测项都与依据中的某一章节或某一要求进行对应，使每一个评测项都有章可循辅辅"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "公开的评测过程",
          content:
            "系统出具的评测报告中，针对每一项评测项都进行详细的描述其中对于评测过程更是详细到具体的操作过程，使阅读者可根据操作过程进行复现，排除针对，使评测系统透明公开，有理可籍。"
        }
      ]
    };
  }
};
</script>
