<template>
  <div class="Article">
    <Header></Header>
    <div class="ArticleBanner">
      <img src="../assets/article.png" />
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/Headerspace.vue";
export default {
  name: "Article",
  components: {
    Header
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
</style>
