<template>
  <div class="virtual">
    <div class="productContent">
      <div class="productBanner">
        <img src="../../assets/img12.jpg" />
        <div class="productBannerContent">
          <!-- 移动应用源码虚拟化编译器 -->
          <h1>蛮犀安全移动应用源码虚拟化编译器</h1>
          <article>
            蛮犀安全移动应用源码虚拟化编译器是针对C/C++/汇编代码进行指令级别的安全保护，提升运行在移动终端上的应用、插件的安全能力。
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
            蛮犀安全移动应用源码虚拟化编译器是一款源代码加密工具，采用LLVM编译器技术实现，将C/C++等源代码编译成二进制代码过程中对源码进行高强度的保护，对C/C++源码进行虚拟化保护，实现数据隐藏、自定义指令集、防代码Dump，增加逆向分析的难度。
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
          title: "指令集自定义",
          content:
            "将C/C++中的函数所对应的源代码编译成虚拟机字节码，统一的虚拟机入口，防止加固后的代码被反汇编和静态分析，有效C/C++保护代码逻辑。 "
        },
        {
          id: 2,
          imgSrc: require("../../assets/img2.png"),
          title: "指令集随机化",
          content:
            "对源码虚拟化过程中使用多套指令集进行随机调用，使相同源代码每次生成的字节码以及指令都不相同，大大提高加固代码的安全性。"
        },
        {
          id: 3,
          imgSrc: require("../../assets/img3.png"),
          title: "范围颗粒度小",
          content:
            "支持以函数为颗粒进行保护，对需要虚拟化的函数进行标记后，来指定某个函数进行虚拟化，使用户可自主指定保护范围。"
        },
        {
          id: 4,
          imgSrc: require("../../assets/img4.png"),
          title: "工具侵入性小",
          content:
            "使用者通过集成插件形式进行使用，使用者可自行部署，与常规开发工具使用类似，简单操作即可部署集成。"
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
