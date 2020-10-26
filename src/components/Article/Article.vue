<template>
  <div class="Article">
    <Header></Header>
    <div class="ArticleBanner">
      <img src="../../assets/img28.jpg" />
      <div class="ArticleBannerContent">
        <h3>蛮犀资讯</h3>
        <article>建立APP数据生命周期安全体系,为企业核心资产保驾护航</article>
      </div>
    </div>
    <div class="ArticleContent">
      <div class="ArticleContentBody">
        <ul>
          <li v-for="(item, index) in listItem" :key="item.id">
            <div class="img">
              <img :src="item.imgSrc" />
            </div>
            <div class="txt">
              <h3
                class="title"
                @mouseover="changeColor(index)"
                @mouseout="recoverColor(index)"
                :class="{ titleSelect: SelectIndex == index }"
              >
                <span
                  @click="more(item.id, item.time, item.title, item.content)"
                >
                  {{ item.title }}</span
                >
              </h3>
              <p class="info">
                <span
                  @click="more(item.id, item.time, item.title, item.content)"
                  v-html="item.content"
                >
                </span>
              </p>
              <p class="bottom">
                <span class="time">
                  <img src="../../assets/time.png" />
                  {{ item.time }}</span
                >
                <span
                  class="more"
                  @click="more(item.id, item.time, item.title, item.content)"
                >
                  更多
                  <img src="../../assets/more1.png" />
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
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
  },
  inject: ["articleListItem"],
  data() {
    return {
      SelectIndex: -1,
      listItem: []
    };
  },
  created() {
    this.listItem = this.articleListItem;
  },
  methods: {
    changeColor(index) {
      this.SelectIndex = index;
    },
    recoverColor() {
      this.SelectIndex = -1;
    },
    more(id, time, title, content) {
      this.$router.push({
        path: "/Article/detail",
        query: { id, time, title, content }
      });
    }
  }
};
</script>
<style>
.Article .navigation {
  background: transparent;
}
.ArticleBanner {
  position: relative;
}
.ArticleBanner img {
  width: 100%;
  height: 700px;
}
.ArticleContentBody {
  width: 1200px;
  margin: 30px auto;
}
.ArticleContentBody ul {
  margin-top: 10px;
}
.ArticleBannerContent {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.ArticleBannerContent h3 {
  font-size: 56px;
  font-family: URW Chancery L, cursive;
}
.ArticleBannerContent article {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 35px;
  margin: 10px 0 0 10px;
  font-family: URW Chancery L, cursive;
}
.ArticleContent ul li {
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}
.ArticleContent ul .txt {
  width: 70%;
  padding: 10px 20px;
  text-align: justify;
}
.ArticleContent ul .txt .title {
  font-size: 22px;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: normal;
  color: #212121;
}
.ArticleContent ul .txt .titleSelect {
  text-decoration: underline;
}
.ArticleContent .txt .info {
  cursor: pointer;
  color: #707070;
  line-height: 25px;
  padding-right: 12px;
  height: 70px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.ArticleContent ul .txt .info .ellipsis {
  position: absolute;
  right: 0;
  bottom: 0;
}
.ArticleContent .txt .bottom {
  color: #a3a3a3;
  font-size: 12px;
  line-height: 30px;
  margin-top: 10px;
}
.ArticleContent .txt .bottom::after {
  display: block;
  content: "";
  clear: both;
}
.ArticleContent .txt .bottom .time {
  float: left;
}
.ArticleContent .txt .bottom .time img {
  margin-right: 5px;
}
.ArticleContent .txt .bottom .more {
  float: right;
  color: #a3a3a3;
  cursor: pointer;
}
.ArticleContent .txt .bottom .time,
.ArticleContent .txt .bottom .more {
  display: flex;
  align-items: center;
}
.ArticleContent .txt .bottom .more img {
  width: 16px;
  margin-left: 5px;
}
.ArticleContent .img {
  font-size: 0;
}
.ArticleContent .img img {
  width: 250px;
  height: 166px;
  border-radius: 6px;
}
</style>
