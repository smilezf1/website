<template>
  <div class="reinforce">
    <div class="productContent">
      <div class="productBanner">
        <!-- 移动应用加固系统 -->
        <img src="../../assets/banner13.png" />
        <div class="productBannerContent">
          <h1>蛮犀安全移动应用加固系统</h1>
          <article>
            蛮犀移动应用安全加固，是蛮犀科技吸取同行产品相关优势并结合市场监管需求，采用代码加固技术、运行时数据保护技术、运行时风险监控技术，依据网络安全等级保护要求、中国金融移动支付客户端技术规范、移动互联网应用软件安全评估大纲等评估办法，全面针对移动应用的代码、数据进行安全保护的APP加固解决方案。
          </article>
          <span
            class="productBannerUse"
            :class="{ getUseSelect: getUseIndex == 1 }"
            @mouseover="getUse()"
            @mouseout="recovergetUse()"
            @click="jumpSecurityManagePlat"
            >立即获取使用</span
          >
        </div>
      </div>
      <!-- 产品介绍 -->
      <div class="productBox">
        <div class="productIntroduce">
          <h1>产品介绍</h1>
          <p>
            蛮犀安全移动应用加固系统主要由Web可视化前端、加固后台两部分构成，蛮犀安全移动应用加固系统根据实际环境配置部署完成后，能够根据用户上传的移动应用进行安全加固，并自动生成加固包供用户下载。
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
          title: "多防火墙保护",
          content:
            "对APP程序中的代码采取了Dex加壳、Dex字节码抽离、Dex虚拟化、DexToC技术，使APP程序中原生代码被四道“防火墙”保护，防止恶意分析者的代码逆向。"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "Native深度加固",
          content:
            "对APP程序中的Native库进行自定义Linker加固，结合动态反调试技术，增强了被Dump和被调试的难度。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "自身安全有保障",
          content:
            "对蛮犀加固中自身的解释器以及加固代码采用了自定义虚拟机技术以及源码混淆技术，并采用加密壳保护，防止黑客从加固“防火墙”出发破解加固后的应用。"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "运行过程全监控",
          content:
            "蛮犀加固会对APP进行运行全生命周期的监控，具备防恶意添加文件、防恶意删除文件、防高风险设备运行、防内存拷贝等运行时保护。"
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
    },
    jumpSecurityManagePlat() {
      window.open("https://www.manxi-inc.com/manxi-platform-web/", "_blank");
    }
  }
};
</script>
