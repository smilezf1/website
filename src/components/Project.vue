<template>
  <div class="Project">
    <headerSpace></headerSpace>
    <!--banner  -->
    <div class="projectBanner">
      <img src="../assets/develop.jpg" />
    </div>
    <!-- 主体内容 -->
    <div class="ProjectContent">
      解决方案页面
    </div>
    <!-- 尾部 -->
    <Footerspace></Footerspace>
  </div>
</template>
<script>
import headerSpace from "@/components/headerSpace";
import Footerspace from "@/components/Footerspace";
export default {
  name: "Project",
  components: { headerSpace, Footerspace }
};
</script>
<style>
.projectBanner img {
  width: 100%;
  height: 400px;
}
.ProjectContent {
  height: 700px;
  font-size: 22px;
}
</style>
