<template>
  <div class="secretKey">
    <div class="productContent">
      <div class="productBanner">
        <img src="../../assets/banner3.jpg" />
        <div class="productBannerContent">
          <h1>蛮犀安全移动应用密钥白盒</h1>
          <article>
            蛮犀安全移动应用密钥白盒可在不可信环境中，实现安全的加解密数据，保障信息机密性。
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
          <!-- 移动应用密钥白盒插件 -->
          <h1>产品介绍</h1>
          <p>
            蛮犀安全移动应用密钥白盒，是一套适用于用户敏感数据、通信数据进行加解密安全保护，通过强力的算法以及算法本身的自我防护，来保护敏感、重要数据的安全。
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
          title: "适用场景广",
          content:
            "蛮犀安全移动应用密钥白盒可适用于被监管企业、经常面临黑客攻击的应用、应用安全问题类等以APP为重要资产的企业。"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "支持多算法",
          content:
            "支持国际、国内主流算法AES、3DES、SM4，便于现有业务系统结合使用，将算法和密钥进行高强度保护，将密钥隐藏在变换中，在程序中或运行时内存中密钥均不会以明文出现。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "服务端密钥保护",
          content:
            "可对服务器端私钥等敏感数据进行加密，并发送至客户端安全的存储，当需要私钥进行签名时由密钥白盒进行解密，签名结束后立即擦除使用痕迹，确保私钥安全。"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "通信数据全保护",
          content:
            "对通信主密钥及工作密钥全部做白盒化安全处理，并对设备硬件进行关联绑定，即使被复制到其他环境中也无法正常使用。"
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
