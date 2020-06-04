<template>
  <div class="Product">
    <headerSpace></headerSpace>
    <div class="container">
      <ul class="leftNav">
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
      <router-view />
    </div>
    <footerSpace></footerSpace>
  </div>
</template>
<script>
import headerSpace from "@/components/headerSpace";
import footerSpace from '@/components/footerSpace'
export default {
  name: "Procuct",
  components: { headerSpace,footerSpace },
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
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.container {
  width: 70%;
  margin: 10px 20px;
  display: flex;
  margin: 20px auto;
}
.Product .leftNav {
  width:35%;
  border: 1px solid #ebebeb;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.8);
}
.Product .leftNav li {
  margin: 20px 0;
  color: #333;
  font-size: 12px;
  font-family: ".Product .leftNav ";
  text-align: center;
  font-weight: 500;
}
.productContent {
  width:75%;
  margin-left: 20px;
}
.productBanner {
  position: relative;
}
.productBanner img{
  width:100%;
}
.productBannerContent {
  position: absolute;
  top: 20px;
  left: 10px;
  color: white;
}
.productTraitContent span{
  line-height:29px;
}
.productBannerContent h3 {
  font-size: 21px;
  font-weight: 500;
}
.productBannerContent article {
  font-size: 11px;
  margin-top: 10px;
  letter-spacing: 1px;
}
.productBannerUse {
  display: inline-block;
  margin-top: 15px;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  padding: 4px 6px;
  font-size: 11px;
}
/* 产品介绍 */
.productIntroduce{
  margin:20px 0;
}
.produtctTrait{
  margin-top:20px;
}
.productIntroduce h3,.produtctTrait h3{
  font-size:20px;
  color:#333;
  font-weight:400;
}
.productIntroduce p{
  color:#666;
  font-size:10px;
  letter-spacing:1px;
  margin-top:10px;
  text-indent:2em;
  line-height:15px;  
}
/* 产品特点 */
.productTraitContent{
  display:flex; 
}
.productTraitContent{
  margin-top:10px;
}
.productTraitContent li{
  text-align:center;
  margin-right:30px;
}
.productTraitContent li p{
  font-size:12px;
  color:#333;
  margin-bottom:6px;
}
.productTraitContent li span{
  color:#666;
  font-size:10px;
}
</style>
