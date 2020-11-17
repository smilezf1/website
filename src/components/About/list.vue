<template>
  <div class="About">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "About",
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
  color: #3b3b3b;
  font-family: URW Chancery L, cursive;
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
  color: #333;
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
</style>
