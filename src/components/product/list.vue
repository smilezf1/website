<template>
  <div class="Product">
    <headerSpace></headerSpace>
    <div class="container">
      <router-view />
    </div>
    <footerSpace></footerSpace>
    <slideBar></slideBar>
  </div>
</template>
<script>
import headerSpace from "@/components/common/headerSpace.vue";
import footerSpace from "@/components/common/footerSpace";
import slideBar from "@/components/common/slideBar";
export default {
  name: "Procuct",
  components: { headerSpace, footerSpace, slideBar }
};
</script>
<style>
.productBanner {
  position: relative;
}
.productBanner img {
  width: 100%;
  height: 700px;
}
.productBannerContent {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.productTraitContent span {
  line-height: 40px;
}
.productBannerContent h3 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: URW Chancery L, cursive;
}
.productBannerContent article {
  font-size: 18px;
  line-height: 35px;
  font-family: URW Chancery L, cursive;
  margin: 10px 0 0 10px;
}
.productBannerUse {
  display: inline-block;
  margin-top: 15px;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 16px;
  background: transparent;
  transition: background 1.5s ease;
  margin-left: 10px;
}
.productBannerContent .getUseSelect {
  background: #6aa3ea;
  border: 1px solid transparent;
  transition: all 1.5s ease;
}
/* 产品介绍 */
.productIntroduce {
  width: 1200px;
  margin: 0px auto;
}
.produtctTrait {
  background: url("../../assets/banner2.jpg") 100% / cover repeat-x;
  padding: 10px 0px 40px 0px;
}
.productIntroduce h3,
.produtctTrait h3 {
  font-size: 34px;
  color: #3b3b3b;
  text-align: center;
  font-weight: normal;
  padding: 20px;
  font-family: URW Chancery L, cursive;
}
.produtctTrait h3 {
  color: white;
}
.productIntroduce p {
  color: #2b2b2b;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 10px;
  line-height: 30px;
  width: 1200px;
  margin: 20px auto;
}
/* 产品特点 */
.productTraitContent {
  display: flex;
}
.productTraitContent {
  width: 1200px;
  margin: 20px auto;
}
.productTraitContent li {
  margin: 0 15px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  width: 30%;
}
.productTraitContent li p {
  font-size: 20px;
  color: #333;
  margin: 20px 0;
}
.productTraitContent li span {
  color: #2b2b2b;
  font-size: 16px;
  text-align: left;
}
.productTraitContentTop {
  text-align: center;
}
.productTraitContentTop img {
  width: 150px;
  height: 116px;
}
.productTraitContentContainer {
  text-align: justify;
  text-indent: 2em;
}
</style>
