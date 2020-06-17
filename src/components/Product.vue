<template>
  <div class="Product">
    <headerSpace></headerSpace>
    <div class="container">
      <!--  <ul class="leftNav">
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul> -->
      <router-view />
    </div>
    <footerSpace></footerSpace>
  </div>
</template>
<script>
import headerSpace from "@/components/headerSpace";
import footerSpace from "@/components/footerSpace";
export default {
  name: "Procuct",
  components: { headerSpace, footerSpace },
  data() {
    return {
      navList: [
        { id: 1, name: "移动应用评测系统", path: "/Product/Evaluating" },
        {
          id: 2,
          name: "移动应用合规评测系统",
          path: "/Product/ComplianceEvaluating"
        },
        {
          id: 3,
          name: "移动应用加固系统",
          path: "/Product/Reinforce"
        },
        {
          id: 4,
          name: "移动应用源码加固编译器",
          path: "/Product/Code"
        },
        {
          id: 5,
          name: "移动应用源码虚拟化编译器",
          path: "/Product/Virtual"
        },
        {
          id: 6,
          name: "移动应用密钥白盒插件",
          path: "/Product/SecretKey"
        },
        {
          id: 7,
          name: "移动应用环境自查插件",
          path: "/Product/SelfInspection"
        },
        {
          id: 8,
          name: "移动应用数据加密插件",
          path: "/Product/Encryption"
        },
        { id: 9, name: "移动应用安全评测", path: "/Product/SelfInspection" },
        { id: 10, name: "移动应用安全防护", path: "/Product/safetyProtection" },
        { id: 11, name: "移动应用安全业务", path: "/Product/safetyService" }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.Product .leftNav {
  width: 35%;
  border: 1px solid #ebebeb;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.8);
}
.Product .leftNav li {
  margin: 20px 0;
  color: #333;
  font-family: ".Product .leftNav ";
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 0;
}
.productBanner {
  position: relative;
}
.productBanner img {
  width: 100%;
  height: 500px;
}
.productBannerContent {
  position: absolute;
  top: 20px;
  left: 40px;
  color: white;
}
.productTraitContent span {
  line-height: 40px;
}
.productBannerContent h3 {
  font-size: 21px;
  font-weight: 700;
}
.productBannerContent article {
  font-size: 15px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 25px;
}
.productBannerUse {
  display: inline-block;
  margin-top: 15px;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 14px;
}
/* 产品介绍 */
.productIntroduce {
  margin: 20px 0;
}
.produtctTrait {
  margin-top: 20px;
}
.productBox {
  margin: 0 20px;
}
.productIntroduce h3,
.produtctTrait h3 {
  font-size: 26px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
}
.productIntroduce p {
  color: #666;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 10px;
  text-indent: 2em;
  line-height: 28px;
  text-align: center;
}
/* 产品特点 */
.productTraitContent {
  display: flex;
}
.productTraitContent {
  width: 65%;
  margin: 0 auto;
}
.productTraitContent li {
  margin: 0 30px;
  padding: 20px;
}
.productTraitContent li p {
  font-size: 20px;
  color: #333;
  margin: 20px 0;
}
.productTraitContent li span {
  color: #666;
  font-size: 15px;
  text-align: left;
}
.productTraitContentTop {
  text-align: center;
}
.productTraitContentContainer {
  text-align: justify;
  text-indent: 2em;
}
</style>
