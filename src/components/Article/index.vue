<template>
  <div class="Article">
    <div class="ArticleBanner">
      <img src="../../assets/img28.jpg" />
      <div class="ArticleBannerContent">
        <h1>蛮犀资讯</h1>
        <article>建立APP数据生命周期安全体系,为企业核心资产保驾护航</article>
      </div>
    </div>
    <div class="ArticleContent">
      <div class="ArticleContentBody">
        <ul>
          <li v-for="(item, index) in newsList" :key="item.informationId">
            <div class="img">
              <img
                :src="
                  `${getBaseUrl}/common/viewFile/${item.informationIconKey}`
                "
              />
            </div>
            <div class="txt">
              <h1
                class="title"
                @mouseover="changeColor(index)"
                @mouseout="recoverColor(index)"
                :class="{ titleSelect: SelectIndex == index }"
              >
                <span @click="more(item.informationId)">
                  {{ item.informationTitle }}</span
                >
              </h1>
              <p class="info">
                <span
                  @click="more(item.informationId)"
                  v-text="toText(item.informationContent)"
                >
                </span>
              </p>
              <p class="bottom">
                <span class="time">
                  <img src="../../assets/time.png" />
                  {{ item.createTime }}</span
                >
                <span class="more" @click="more(item.informationId)">
                  更多
                  <img src="../../assets/more1.png" />
                </span>
              </p>
            </div>
          </li>
        </ul>
        <el-button
          class="loadMore"
          @click="loadMore"
          v-if="this.newsList.length < this.total"
          >加载更多</el-button
        >
        <el-button v-else class="noMore">没有更多了</el-button>
      </div>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import Header from "@/components/common/headerSpace.vue";
import articleApi from "../request/api/article";
export default {
  name: "Article",
  components: {
    Header
  },
  data() {
    return {
      SelectIndex: -1,
      newsList: [],
      curPage: 0,
      limit: 8,
      total: 0
    };
  },
  computed: {
    getBaseUrl() {
      return config.baseUrl;
    }
  },
  created() {
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      this.curPage += 1;
      const params = { current: this.curPage, size: this.limit };
      articleApi
        .articleList(params)
        .then(res => {
          if (res.code == "200") {
            const data = res.result;
            this.newsList = this.newsList.concat(data.records);
            this.total = data.total;
          }
        })
        .catch(err => {
          this.$message({ message: "系统开小差,请重试" });
        });
    },
    //加载更多
    loadMore() {
      this.getArticleList();
    },
    changeColor(index) {
      this.SelectIndex = index;
    },
    recoverColor() {
      this.SelectIndex = -1;
    },
    more(id) {
      this.$router.push({
        path: "article/detail",
        query: { id }
      });
    },
    //将html 格式转化为
    toText(HTML) {
      let input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ")
        .replace(/&nbsp;/g, "");
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
.ArticleContentBody .loadMore,
.ArticleContentBody .noMore {
  width: 100%;
  background: white;
  color: #939393;
  line-height: 24px;
}
.ArticleBannerContent h1 {
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
  font-size: 12px;
  line-height: 25px;
  font-weight: normal !important;
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
