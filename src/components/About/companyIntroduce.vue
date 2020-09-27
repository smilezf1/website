<template>
  <div class="companyIntroduce">
    <div class="companyIntroduceBanner">
      <img src="../../assets/banner11.jpg" />
      <div class="companyIntroduceBannerContent">
        <h3>蛮犀科技,创建智慧安全生活</h3>
      </div>
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
            "上海蛮犀科技有限公司是一家致力于信息安全研究的创新技术型高科技企业。公司的主要核心骨干人员主要来源于行业领先的移动互联、泛物联网、5G等主流技术领域的高新技术顶尖人才。蛮犀科技通过十多年的技术积累，在漏洞挖掘、应用加固、隐私合规、威胁情报、服务端防护等领域取得了丰硕的成果。一方面我们和北上广深等全国十余家检测机构及监管单位合作，为他们提供APP安全及隐私方面的合规检查报告，另一方面我们同时为政府、互联网、金融、医疗等企业的APP提供安全防护工具及“云、管、端”的信息安全解决方案,为企业数据安全及隐私保驾护航。"
        },
        {
          id: 2,
          content:
            "随着5G商用时代的倒来以及网络安全及数据保护立法的迅猛发展，未来记载在终端上的数据会越来越庞大，对于APP以及个人信息的安全的诉求也会越来越高，建立一套以APP为切入的数据全生命周期安全解决方案必是保障企业持续性发展的重要环节，蛮犀科技将坚持恒者行远，思者常新，在移动互联网络安全领域，蛮犀科技在拥抱未来的技术发展道路上必将会成为行业的创新型领军企业。"
        }
      ],
      navItem: [
        {
          id: 1,
          imgSrc: require("../../assets/x-icon1.png"),
          title: "愿景",
          content: "全球移动应用安全引领者"
        },
        {
          id: 2,
          imgSrc: require("../../assets/x-icon2.png"),
          title: "使命",
          content: "保证移动智能生活信息安全"
        },
        {
          id: 3,
          imgSrc: require("../../assets/x-icon3.png"),
          title: "服务观",
          content: "客户至上"
        },
        {
          id: 4,
          imgSrc: require("../../assets/x-icon4.png"),
          title: "价值观",
          content: "服务、细致、协同、承担、自信、务实"
        }
      ]
    };
  }
};
</script>
<style>
.companyIntroduceBanner {
  position: relative;
}
.companyIntroduceBanner img {
  width: 100%;
  height: 700px;
}
.companyProfileContent .title {
  font-size: 22px;
  background: url("../../assets/bg.png") no-repeat 100%;
}
.companyIntroduceBannerContent {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.companyIntroduceBannerContent h3 {
  font-size: 56px;
  font-weight:700;
  font-family: URW Chancery L, cursive;
}

.companyProfileContentTitle > div {
  position: absolute;
  bottom: -2px;
  width: 50%;
}
.companyProfileContentTitle > div img {
  width: 100%;
}
.companyIntroduceBannerContent article {
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 35px;
}
.enterpriseConceptContentTop {
  text-align: center;
}
.enterpriseConcept {
  background: url("../../assets/banner2.jpg") 100% / cover repeat-x;
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
