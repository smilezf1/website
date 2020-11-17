<template>
  <div class="home">
    <headerSpace></headerSpace>
    <router-view></router-view>
    <footerSpace></footerSpace>
    <slideBar></slideBar>
  </div>
</template>
<script>
import headerSpace from "@/components/common/headerSpace.vue";
import homePage from "@/components/page/homePage.vue";
import footerSpace from "@/components/common/Footerspace.vue";
import slideBar from "@/components/common/slideBar.vue";
export default {
  name: "home",
  components: { headerSpace, homePage, footerSpace, slideBar },
};
</script>
<style>
.home {
  width: 100%;
}
</style>
