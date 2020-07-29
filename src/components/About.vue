<template>
  <div class="About">
    <HeaderSpace></HeaderSpace>
    <router-view />
    <FooterSpace></FooterSpace>
    <slideBar></slideBar>
  </div>
</template>
<script>
import HeaderSpace from "@/components/common/headerSpace.vue";
import FooterSpace from "@/components/common/FooterSpace";
import slideBar from "@/components/common/slideBar.vue";
export default {
  name: "About",
  components: { HeaderSpace, FooterSpace, slideBar },
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
  font-size: 34px;
  margin-top: 10px;
  font-weight: normal;
}
.companyProfileContent {
  width: 1200px;
  margin: 0px auto;
  padding: 20px;
  text-align: justify;
}
.companyProfileContent p {
  font-size: 18px;
  line-height: 40px;
  text-indent: 2em;
}
.enterpriseConceptContent {
  width: 80%;
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
