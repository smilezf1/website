<template>
  <div class="companyIntroduce">
    <div class="companyIntroduceBanner">
      <img src="../../assets/develop.jpg" />
    </div>
    <div class="companyIntroduceContainer">
      <!-- 公司简介 -->
      <div class="companyProfile">
        <h3 class="companyProfileTitle">公司简介</h3>
        <div class="companyProfileContent">
          <p v-for="item in briefItem" :key="item.id">
            {{ item.content }}
          </p>
        </div>
      </div>
      <!-- 企业观念 -->
      <div class="enterpriseConcept">
        <h3 class="enterpriseConceptTtitle">企业观念</h3>
        <ul class="enterpriseConceptContent">
          <li v-for="item in navItem" :key="item.id">
            <div class="enterpriseConceptContentTop">
              <img :src="item.imgSrc" />
              <span>{{ item.title }}</span>
            </div>
            <div class="enterpriseConceptContentBottom">
              <p>{{ item.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "companyIntroduce",
  data() {
    return {
      briefItem: [
        {
          id: 1,
          content:
            "上海蛮犀科技有限公司成立于2019年,公司位于上海,蛮犀安全为蛮犀科技主打的首要品牌。蛮犀安全(ManXiSecures)以技术为驱动,致力于为监管机构、企业、个人提供移动应用信息安全产品以及服务,帮助监管机构、企业、个人构建自主可控的安全体系,实现网络空间上的安全、可靠的智慧生活。"
        },
        {
          id: 2,
          content:
            "目前蛮犀安全拥有移动应用安全咨询、移动应用安全评测、移动应用安全加固移动应用等保咨询服务、移动应用个人信息安全评测、移动应用等保整改服务、移动应用安全服务等产品体系,可为用户提供移动信息安全的一体化综合解决方案。"
        }
      ],
      navItem: [
        {
          id: 1,
          imgSrc: require("../../assets/icon.png"),
          title: "愿景",
          content: "全球移动应用安全引领者"
        },
        {
          id: 2,
          imgSrc: require("../../assets/icon1.png"),
          title: "使命",
          content: "保证移动智能生活信息安全"
        },
        {
          id: 3,
          imgSrc: require("../../assets/icon2.png"),
          title: "服务观",
          content: "客户至上"
        },
        {
          id: 4,
          imgSrc: require("../../assets/icon4.png"),
          title: "价值观",
          content: "服务、细致、协同、承担、自信、务实"
        }
      ]
    };
  }
};
</script>
<style>
.companyIntroduceBanner img {
  width: 100%;
  height: 400px;
}
.enterpriseConceptContentTop {
  text-align: center;
}
.enterpriseConcept {
  background: url("../../assets/section-bg.jpg") center;
  padding: 70px 0;
}
.enterpriseConceptTtitle {
  font-size: 34px;
  color: white;
}
.enterpriseConcept li {
  background: white;
  border-radius: 10px;
  color: #2b2b2b;
}
.enterpriseConceptContentTop {
  font-size: 22px;
  font-weight: 700;
}
.enterpriseConceptContentBottom {
  font-size: 18px;
}
</style>
