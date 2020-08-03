<template>
  <div class="Service">
    <headerSpace></headerSpace>
    <router-view />
    <FooterSpace></FooterSpace>
    <slideBar></slideBar>
  </div>
</template>
<script>
import headerSpace from "@/components/common/headerSpace.vue";
import FooterSpace from "@/components/common/FooterSpace";
import slideBar from "@/components/common/slideBar.vue";
export default {
  name: "Service",
  components: { headerSpace, FooterSpace, slideBar }
};
</script>
<style>
.percolationTestBanner {
  position: relative;
}
.percolationTestBanner img {
  width: 100%;
  height: 700px;
}
.percolationTestBannerContent {
  width: 1200px;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: white;
}
.percolationTestBannerContent h3 {
  font-size: 56px;
  font-weight: 700;
}
.percolationTestBannerContent article {
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 35px;
}
/* 服务介绍 */
.serviceIntroduce {
  width: 1200px;
  margin: 0 auto;
}
.businessScope {
  margin-top: 30px;
  padding: 10px 0px 30px 0;
  background: url("../assets/x10.jpg") 100% / cover repeat-x;
}
.serviceIntroduce h3,
.businessScope h3 {
  font-size: 34px;
  color: #3b3b3b;
  text-align: center;
  margin: 20px 0 40px 0;
  font-weight: normal;
}
.businessScope h3 {
  color: white;
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
  width: 1200px;
  margin: 0px auto;
  display: flex;
}
.businessScopeContent li {
  margin: 0 30px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  width: 30%;
}
.businessScopeContent li p {
  font-size: 20px;
  color: #333;
  margin: 20px 0;
}
.businessScopeContentTop {
  text-align: center;
}
.businessScopeContentTop img {
  width: 150px;
  height: 116px;
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
