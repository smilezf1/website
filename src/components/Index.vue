<template>
  <div class="index">
    <headerSpace></headerSpace>
    <Banner></Banner>
    <homePage></homePage>
    <footerSpace></footerSpace>
    <slideBar></slideBar>
  </div>
</template>
<script>
import headerSpace from "@/components/common/headerSpace.vue";
import Banner from "@/components/Banner.vue";
import homePage from "@/components/homePage.vue";
import footerSpace from "@/components/common/Footerspace.vue";
import slideBar from "@/components/common/slideBar.vue";
export default {
  name: "Index",
  components: { headerSpace, Banner, homePage, footerSpace, slideBar }
};
</script>
<style>
.index {
  width: 100%;
}
</style>
