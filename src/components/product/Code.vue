<template>
  <div class="code">
    <div class="productContent">
      <div class="productBanner">
        <img src="../../assets/banner24.jpg" />
        <div class="productBannerContent">
          <!-- 移动应用源码加固编译器 -->
          <h1>蛮犀安全移动应用源码加固编译器</h1>
          <article>
            蛮犀安全源码加固编译器通过对代码混淆、完整性保护和防调试等技术手段保护源代码安全，特别在反调试，反盗版和反恶意代码上效果显著，保护企业源码安全。
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
            蛮犀安全源码加固编译器是一款源代码高级混淆的工具，采用LLVM编译器技术实现，将C/C++等源代码编译成二进制代码过程中对源码进行高强度的保护，对C/C++源码，与普通编译器相似，可将C/C++源代码编译成二进制代码，不同之处在于，蛮犀安全源代码加固编译器在编译的时候，能够对代码进行七项安全处理：控制流平坦、不透明谓词混淆、等价指令替换、控制流间接化、基本快调度、字符串加密、基本快调度、分裂基本快，从而保护C/C++代码的数据流和逻辑的保护。
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
          title: "混淆复杂度高",
          content:
            "通过核心算法混淆代码，使程序执行流程难以分析，保护源代码抵御主流调试器，避免动态分析执行中的代码。"
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "无感知加固",
          content:
            "通过采用蛮犀安全编译器，在企业代码编译过程中进行加固，让使用者无感知即可完成加固操作，减小使用者学习、使用成本。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "部署灵活方便",
          content:
            "使用者通过集成插件形式进行使用，使用者可自行部署，与常规开发工具使用类似，简单操作即可部署集成。"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "加固影响小",
          content: "对原程序混淆增量少，对原程序执行性能影响很小。"
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
