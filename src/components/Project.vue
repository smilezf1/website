<template>
  <div class="Project">
    <headerSpace></headerSpace>
    <!--banner  -->
    <div class="projectBanner">
    </div>
    <!-- 主体内容 -->
    <div class="ProjectContent">
      <!-- 实现完善的功能 测试 -->
      <div class="function">
        <h3 class="title">实现完善的功能</h3>
        <ul>
          <li v-for="item in functionNavItem" :key="item.id">
           <!--  <img src="../assets/icon.png" /> -->
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 尾部 -->
    <Footerspace></Footerspace>
  </div>
</template>
<script>
import headerSpace from "@/components/common/headerSpace.vue";
import Footerspace from "@/components/common/Footerspace";
export default {
  name: "Project",
  components: { headerSpace, Footerspace },
  data() {
    return {
      functionNavItem: [
        {
          id: 1,
          content: "直接以移动业务为中心实现等级保护"
        },
        {
          id: 2,
          content: "端、管、云一体化安全集成、运维和管理"
        },
        { id: 3, content: "数字化安全工作空间实现便捷、安全的服务体验" }
      ]
    };
  }
};
</script>
<style>
.projectBanner img {
  width: 100%;
  height: 400px;
}
.ProjectContent {
  /* 高度测试 */
  font-size: 22px;
}
.function {
  height: 100%;
  padding: 40px 0;
  margin: 20px 0;
}
.function .title {
  color: white;
  text-align: center;
  font-size: 34px;
}
.function ul {
  display: flex;
  width: 70%;
  margin: 20px auto;
  justify-content: space-around;
  padding: 60px 0;
}
.function ul li {
  background: white;
  border-radius: 10px;
  text-align: center;
  padding: 50px 20px;
}
.function ul li p {
  font-size: 18px;
  color: #2b2b2b;
}
</style>
