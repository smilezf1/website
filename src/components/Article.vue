<template>
  <div class="Article">
    <Header></Header>
    <div class="ArticleBanner">
      <img src="../assets/article.png" />
    </div>
    <div class="ArticleContent">
      <div class="ArticleContentBody">
        <ul>
          <li v-for="item in listItem" :key="item.id">
            <div class="img">
              <img :src="item.imgSrc" />
            </div>
            <div class="txt">
              <h3 class="title">{{ item.title }}</h3>
              <p class="info">{{ item.content }}</p>
              <p class="bottom">
                <span class="time">{{ item.time }}</span>
                <router-link to="/" class="more">更多</router-link>
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
  data() {
    return {
      listItem: [
        {
          id: 1,
          imgSrc: require("../assets/article1.jpg"),
          title: "315晚会曝光SDK窃秘隐私，个人信息安全刻不容缓",
          time: "2020/07/20",
          content:
            "近几年，个人信息安全成为广大网民关注的焦点伴随着2018年欧盟GDPR的正式实施，我国的个人信息保护法相继出台。今年正式颁布的《民法典》中特别强调了“收集、处理个人信息”需要“获得个人信息主体的授权同意”，并不得过度处理”。今年6月20日，全国人大常委会年度立法工作计划公布，在初次审议的29个法律案中，就包含“个人信息保护法”和“数据安全法”。随着网络安全的法律法规的完善，加上国家对民众对网络安全与信息保护意识的大力投入，所以现在关注315晚会的朋友也越来越多也越来越群众化。"
        },
        {
          id: 2,
          imgSrc: require("../assets/article2.png"),
          title: "伟大历程,初心不变|热烈庆祝中国共产党建党99周年",
          time: "2020/07/01",
          content: "。。。"
        },
        {
          id: 3,
          imgSrc: require("../assets/article3.png"),
          title: "好酒沈醉佳节,十分酒,一分歌。",
          time: "2020/06/25",
          content: "。。。"
        },
        {
          id: 4,
          imgSrc: require("../assets/article4.png"),
          title: "重磅发布|APP违法违规收集使用个人信息专项治理报告(2019)",
          time: "2020/06/05",
          content:
            "2019年1月，中央网信办、工业和信息化部、公安部、市场监管总局四部门联合发布《关于开展APP违法违规收集使用个人信息专项治理的公告》，在全国范围组织开展APP违法违规收集使用个人信息专项治理，并成立APP违法违规收集使用个人信息专项治理工作组。一年来，专项治理工作成效显著，《APP违法违规收集使用个人信息行为认定方法》《个人信息安全规范》等标准规范相继出台完善，用户规模大、与生活关系密切、问题反映集中的千余款APP经深度评估后进行了有效整改，无隐私政策、强制索权、无注销渠道等问题明显改善，APP运营者履行个人信息保护责任义务的能力和水平明显提升，全社会关注和重视个人信息安全的氛围基本形成。"
        }
      ]
    };
  }
};
</script>
<style>
.Article .navigation {
  background: transparent;
}
.ArticleBanner img {
  width: 100%;
}
.ArticleContentBody {
  width: 1200px;
  height: 700px;
  margin: 30px auto;
}
.ArticleContentBody ul {
  margin-top: 10px;
}
.ArticleContent ul li {
  display: flex;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px #0000001a;
}
.ArticleContent ul .txt {
  width: 100%;
  padding: 10px 20px;
  text-align: justify;
  cursor: pointer;
}
.ArticleContent ul .txt .title {
  font-size: 22px;
  margin-bottom: 5px;
}
.ArticleContent .txt .info {
  line-height: 20px;
}
.ArticleContent .txt .bottom {
  color: #a3a3a3;
  font-size: 12px;
  line-height: 30px;
}
.ArticleContent .txt .bottom .time {
  float: left;
}
.ArticleContent .txt .bottom .more {
  float: right;
  color: #a3a3a3;
}
.ArticleContent .img {
  font-size: 0;
}
.ArticleContent .img img {
  width: 250px;
  height: 166px;
}
</style>
