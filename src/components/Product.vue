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
import headerSpace from "@/components/headerSpace";
import footerSpace from "@/components/footerSpace";
export default {
  name: "Procuct",
  components: { headerSpace, footerSpace },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.productBanner {
  position: relative;
}
.productBanner img {
  width: 100%;
  height: 500px;
}
.productBannerContent {
  position: absolute;
  top: 85px;
  left: 40px;
  color: white;
}
.productTraitContent span {
  line-height: 40px;
}
.productBannerContent h3 {
  font-size: 24px;
  font-weight: 700;
}
.productBannerContent article {
  font-size: 18px;
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
  font-size: 16px;
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
  font-weight: 500;
}
.productIntroduce p {
  color: #2b2b2b;
  font-size: 18px;
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
  color: #2b2b2b;
  font-size: 16px;
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
