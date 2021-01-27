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
  </div>
</template>
<script>
import headerSpace from "@/components/common/headerSpace.vue";
import articleApi from "../request/api/article";
export default {
  name: "articleDetail",
  components: { headerSpace },
  data() {
    return {
      id: 0,
      time: null,
      title: "",
      content: "",
      newsList: null
    };
  },
  created() {
    const id = this.$route.query.id;
    /*  this.getArticleDetial(this.$store.state.newsList, id); */
    this.getArticleDetailById(id);
  },
  methods: {
    /* getArticleDetial(array, id) {
      array.forEach(v => {
        if (v.informationId == id) {
          this.time = v.createTime;
          this.title = v.informationTitle;
          this.content = v.informationContent;
        }
      });
    } */
    getArticleDetailById(id) {
      articleApi.searchArticleById(id).then(res => {
        if (res.code == "200") {
          const data = res.result;
          this.time = data.createTime;
          this.title = data.informationTitle;
          this.content = data.informationContent;
        }
      });
    }
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
}
.newsContentBody {
  padding-bottom: 20px;
  margin-top: 20px;
  font-size: 16px;
  line-height: 32px;
  color: #3d464d;
  text-align: justify;
  min-height: 700px;
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
