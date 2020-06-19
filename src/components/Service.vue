<template>
  <div class="Service">
    <headerSpace></headerSpace>
    <router-view />
    <FooterSpace></FooterSpace>
  </div>
</template>
<script>
import headerSpace from "@/components/headerSpace";
import FooterSpace from "@/components/FooterSpace";
export default {
  name: "Service",
  components: { headerSpace, FooterSpace }
};
</script>
<style>
.percolationTestBanner {
  position: relative;
}
.percolationTestBanner img {
  width: 100%;
  height: 500px;
}
.percolationTestBannerContent {
  position: absolute;
  top: 85px;
  left: 40px;
  color: white;
}
.percolationTestBannerContent h3 {
  font-size: 24px;
  font-weight: normal;
}
.percolationTestBannerContent article {
  font-size: 15px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 25px;
}
/* 服务介绍 */
.serviceIntroduce {
  margin: 30px 0;
}
.businessScope {
  margin: 30px 0;
}
.serviceIntroduce h3,
.businessScope h3 {
  font-size: 34px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: normal;
}
.serviceIntroduce p {
  color: #2b2b2b;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 10px;
  text-indent: 2em;
  line-height: 28px;
  text-align: center;
}
/* 业务范围 */
.businessScopeContent {
  display: flex;
  width: 65%;
  margin: 0 auto;
}
.businessScopeContent li {
  margin: 0 30px;
  padding: 20px;
}
.businessScopeContent li p {
  font-size: 20px;
  color: #333;
  margin: 20px 0;
}
.businessScopeContentTop {
  text-align: center;
}
.businessScopeContentContainer span {
  color: #2b2b2b;
  font-size: 16px;
  text-align: left;
  line-height: 40px;
}
.businessScopeContentContainer {
  text-align: justify;
  text-indent: 2em;
}
</style>
