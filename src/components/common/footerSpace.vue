<template>
  <div class="footerSpace">
    <div class="container">
      <div class="containerBox">
        <div class="left">
          <ul class="row1" v-for="(item, index) in menuList" :key="item.id">
            <h3>{{ item.title }}</h3>
            <li v-for="(subItem, subIndex) in item.child" :key="subItem.id">
              <router-link
                :to="subItem.src"
                :class="{ select: subIndex == subActive && index == active }"
                @mouseover.native="changeColor(subIndex, index)"
                @mouseout.native="recoverColor(subIndex, index)"
                >{{ subItem.name }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="rightContent">
            <div>关注我们</div>
            <div><img src="../../assets/code.jpg" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <router-link to="/"
        >上海蛮犀科技有限公司 版权所有 ©2019-2020 泸ICP</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "footerSpace",
  data() {
    return {
      menuList: [
        {
          id: 0,
          title: "安全产品",
          child: [
            {
              name: "移动应用安全评测",
              src: "/Product/safetyEvaluation"
            },
            { name: "移动应用评测系统", src: "/Product/Evaluating" },
            {
              name: "移动应用安全防护",
              src: "/Product/safetyProtection"
            },
            { name: "移动应用加固系统", src: "/Product/Reinforce" },
            { name: "移动应用安全业务", src: "/Product/Insurance" }
          ]
        },
        {
          id: 1,
          title: "安全服务",
          child: [
            {
              id: 1,
              name: "移动应用安全咨询",
              src: "/Service/securityConsulting"
            },
            {
              id: 2,
              name: "移动应用安全渗透",
              src: "/Service/percolationTest"
            }
          ]
        },
        {
          id: 2,
          title: "关于我们",
          child: [
            { name: "公司简介", src: "/About/companyIntroduce" },
            { name: "发展历程", src: "/About/devHistroy" }
          ]
        },
        {
          id: 3,
          title: "联系我们",
          child: [
            { name: "联系电话:021-57677921", src: "/" },
            { name: "联系邮箱:service@manxi-safe.com", src: "/" },
            { name: "市场合作:marketing@manxi-safe.com", src: "/" }
          ]
        }
      ],
      subActive: -1,
      active: -1
    };
  },
  methods: {
    changeColor(subIndex, index) {
      this.subActive = subIndex;
      this.active = index;
    },
    recoverColor(subIndex, index) {
      this.subActive = -1;
      this.active = -1;
    }
  },
  mounted() {
    /* 解决vue跳转到新页面时,默认在页面最底部 而不是最顶部的解决 */
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>
<style>
.footerSpace {
  background: #2d2c2e;
  color: white;
  padding: 20px 0;
}
.footerSpace .container {
  width: 80%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  padding: 20px 0;
  text-align: center;
}
.footerSpace .containerBox {
  display: inline-block;
}
.footerSpace .containerBox:after {
  display: block;
  content: "";
  clear: both;
}
.footerSpace .containerBox .left {
  float: left;
}
.footerSpace .containerBox .left .select {
  color: white !important;
}
.footerSpace .containerBox .right {
  float: right;
}
.footerSpace .container li {
  margin: 20px 0;
}
.footerSpace .container .left {
  border-right: 0.5px solid #666;
  padding-right: 30px;
  margin-right: 30px;
  display: flex;
}
.footerSpace .container .left .row1 {
  margin: 0 20px;
  text-align: left;
}
.footerSpace .container .left h3 {
  font-size: 14px;
}
.footerSpace .container .left a {
  color: #6d6e7e;
  font-size: 12px;
}
.footerSpace .container .left .select {
  color: white;
}
.footerSpace .right img {
  width: 150px;
  margin-top: 10px;
}
.footerSpace .bottom {
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
}
.footerSpace .bottom a {
  color: #6d6e7e;
}
</style>
