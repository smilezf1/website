<template>
  <div class="About">
    <HeaderSpace></HeaderSpace>
    <router-view />
    <!-- 尾部内容 -->
    <FooterSpace></FooterSpace>
  </div>
</template>
<script>
import HeaderSpace from "@/components/headerSpace.vue";
import FooterSpace from "@/components/FooterSpace";
export default {
  name: "About",
  components: { HeaderSpace, FooterSpace },
  data() {
    return {
      aboutList: [{ id: 1, title: "公司简介", imgSrc: "" }]
    };
  }
};
</script>
<style>
.companyProfile {
  margin: 20px 0;
}
.companyProfileTitle,
.enterpriseConceptTtitle {
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
  font-weight: normal;
}
.companyProfileContent {
  width: 60%;
  margin: 10px auto;
  padding: 20px;
  text-align: justify;
}
.companyProfileContent p {
  font-size: 16px;
  line-height: 40px;
}
.enterpriseConcept {
  margin: 30px 0;
}
.enterpriseConceptContent {
  width: 60%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.enterpriseConceptContent li {
  box-sizing: border-box;
  margin: 20px;
  font-size: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0px 0px 5px #0000002b;
}
.enterpriseConceptContent li p {
  margin-top: 20px;
}
.enterpriseConceptContentTop {
  display: flex;
  justify-content: center;
  align-items: center;
}
.enterpriseConceptContentTop span {
  margin-left: 10px;
}
/* .About-content {
  width: 80%;
  margin: 20px auto;
}
.About-content .nav {
  width: 12%;
  border: 1px solid #ebebeb;
}
.About-content .nav ul {
  padding: 10px;
}
.About-content .nav li {
  margin: 10px 0;
  padding: 10px 0;
  text-align: center;
}
.About-content .nav li:not(:last-child) {
  border-bottom: 1px solid #ebebeb;
}
.About-content .nav a {
  color: #666;
  font-size: 11px;
}
.About-content .nav img {
  width: 18px;
  vertical-align: middle;
  margin-right: 5px;
} */
</style>
