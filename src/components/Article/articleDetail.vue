<template>
  <div class="articleDetail">
    <headerSpace></headerSpace>
    <div class="articleDetailBody">
      <div class="articleDetailBodyBox">
        <div class="newsContent">
          <div class="newsContentTitle">
            <p>{{ title }}</p>
            <span>【蛮犀资讯】{{ time }}</span>
          </div>
          <div class="newsContentBody" v-html="content"></div>
        </div>
      </div>
    </div>
    <slideBar></slideBar>
    <footerSpace></footerSpace>
  </div>
</template>
<script>
import headerSpace from "@/components/common/headerSpace.vue";
import footerSpace from "@/components/common/footerSpace.vue";
import slideBar from "@/components/common/slideBar.vue";
export default {
  name: "articleDetail",
  components: { headerSpace, footerSpace, slideBar },
  data() {
    return {
      id: 0,
      time: null,
      title: "",
      content: ""
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.time = this.$route.query.time;
    this.title = this.$route.query.title;
    this.content = this.$route.query.content;
  }
};
</script>
<style>
.articleDetail .headerspace {
  width: 100%;
}
.articleDetail .headerspace .navigation {
  background: #1a1c24;
}
.articleDetail .headerspace .navigationContent {
  background: #1a1c24;
}
.articleDetailBodyBox {
  width: 1200px;
  margin: 0 auto;
  padding-top: 84px;
}
.articleDetailBodyBox .newsContent {
  margin-top: 20px;
}
.articleDetailBodyBox .newsContentTitle {
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.articleDetailBodyBox .newsContentTitle span {
  color: #666666;
  line-height: 24px;
  display: inline-block;
  margin-top: 30px;
  font-size: 14px;
}
.newsContentTitle p {
  font-size: 24px;
  color: #000;
  /* display: block !important; */
}
.newsContentBody {
  padding-bottom: 20px;
  margin-top: 20px;
  font-size: 16px;
  line-height: 32px;
  color: #3d464d;
  text-align: justify;
  min-height: 700px;
  white-space: pre-line;
}
.newsContentBody h3 {
  display: block !important;
}
.newsContentBody p {
  display: block !important;
}
.newsContentBody img {
  width: 70%;
  display: block;
  margin: 0 auto;
}
.newsContentBody > p {
  color: #0070c0;
  font-size: 18px;
  margin-bottom: 5px;
}
.newsContentBody img {
  margin-top: 5px;
}
</style>
