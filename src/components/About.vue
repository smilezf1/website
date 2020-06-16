<template>
  <div class="About">
    <HeaderSpace></HeaderSpace>
    <!-- banner -->
    <div class="AboutBanner">
      <img src="../assets/about.png" style="width:100%" />
    </div>
    <!-- 主体内容 -->
    <div class="AboutContainer">
      <!-- 公司简介 -->
      <div class="companyProfile">
        <h3 class="companyProfileTitle">公司简介</h3>
        <div class="companyProfileContent">
          <p>
            上海蛮犀科技有限公司成立于2019年,公司位于上海,蛮犀安全为蛮犀科技主打的首要品牌。蛮犀安全(ManXiSecures)以技术为驱动,致力于为监管机构、企业、个人提供移动应用信息安全产品以及服务,帮助监管机构、企业、个人构建自主可控的安全体系,实现网络空间上的安全、可靠的智慧生活。
          </p>
          <p>
            目前蛮犀安全拥有移动应用安全咨询、移动应用安全评测、移动应用安全加固移动应用等保咨询服务、移动应用个人信息安全评测、移动应用等保整改服务、移动应用安全服务等产品体系,可为用户提供移动信息安全的一体化综合解决方案。
          </p>
        </div>
      </div>
      <!-- 企业观念 -->
      <div class="enterpriseConcept">
        <h3 class="enterpriseConceptTtitle">企业观念</h3>
        <ul class="enterpriseConceptContent">
          <li>
            <i
              class="el-icon-mobile-phone"
              style="font-size:50px;color:#4EBAD4"
            ></i>
            <span>愿景</span>
            <p>全球移动应用安全引领者</p>
          </li>
          <li>
            <i
              class="el-icon-mobile-phone"
              style="font-size:50px;color:#4EBAD4"
            ></i>
            <span>使命</span>
            <p>保证移动智能生活信息安全</p>
          </li>
          <li>
            <i
              class="el-icon-mobile-phone"
              style="font-size:50px;color:#4EBAD4"
            ></i>
            <span>服务观</span>
            <p>客户至上</p>
          </li>
          <li>
            <div class="top">
              <i
                class="el-icon-mobile-phone"
                style="font-size:50px;color:#4EBAD4"
              ></i>
              <span>价值观</span>
            </div>
            <p>服务、细致、协同、承担、自信、务实</p>
          </li>
        </ul>
      </div>
    </div>
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
  font-size: 22px;
  margin-top: 10px;
}
.companyProfileContent {
  width: 70%;
  margin: 10px auto;
  border: 1px dashed #b9b9b9;
  padding: 20px;
  text-align: justify;
}
.companyProfileContent p {
  font-size: 16px;
  line-height: 30px;
}
.enterpriseConcept {
  margin: 30px 0;
}
.enterpriseConceptContent {
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.enterpriseConceptContent li {
  border: 1px dashed #b9b9b9;
  width: 40%;
  box-sizing: border-box;
  margin: 20px;
  font-size: 16px;
  padding: 20px;
}
.enterpriseConceptContent li p {
  margin-top: 10px;
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
