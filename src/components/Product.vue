<template>
  <div class="Product">
    <headerSpace></headerSpace>
    <div class="container">
      <router-view />
    </div>
    <footerSpace></footerSpace>
  </div>
</template>
<script>
import headerSpace from "@/components/common/Headerspace.vue";
import footerSpace from "@/components/common/footerSpace";
export default {
  name: "Procuct",
  components: { headerSpace, footerSpace },
  data() {
    return {};
  }
};
</script>
<style>
.productBanner {
  position: relative;
}
.productBanner img {
  width: 100%;
 /*  height: 500px; */
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
}
.productBannerContent article {
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 35px;
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
}
.productBannerContent .getUseSelect {
  background: #6aa3ea;
  border: none;
  transition: all 1.5s ease;
}
/* 产品介绍 */
.productIntroduce {
  margin: 30px 0;
}
.produtctTrait {
  margin-top: 20px;
}
.productBox {
  margin: 0 20px;
}
.productIntroduce h3,
.produtctTrait h3 {
  font-size: 34px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 700;
}
.productIntroduce p {
  color: #2b2b2b;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 10px;
  line-height: 28px;
  width: 1200px;
  margin: 20px auto;
}
/* 产品特点 */
.productTraitContent {
  display: flex;
}
.productTraitContent {
  width: 1200px;
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
