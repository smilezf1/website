<template>
  <div class="Article">
    <Header></Header>
    <div class="ArticleBanner">
      <img src="../assets/article.png" />
    </div>
    <div class="ArticleContent">
      <ARTicle>内容</ARTicle>
    </div>
    <slideBar></slideBar>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/common/headerSpace.vue";
import slideBar from "@/components/common/slideBar.vue";
import Footer from "@/components/common/footerSpace.vue";
export default {
  name: "Article",
  components: {
    Header,
    slideBar,
    Footer
  }
};
</script>
<style>
.Article .navigation {
  background: #1a1c24;
}
.ArticleBanner {
  padding-top: 84px;
}
.ArticleBanner img {
  width: 100%;
}
.ArticleContent {
  width: 1200px;
  height: 700px;
  margin: 0 auto;
  border: 1px solid red;
}
</style>
