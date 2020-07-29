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
            <div class="rightContentBox">
              <div class="wx">
                <img src="../../assets/code.jpg" />
                <p><img src="../../assets/wx.png" />微信公众号</p>
              </div>
              <div class="wb">
                <img src="../../assets/wbCode.png" />
                <p><img src="../../assets/wb.png" />官方微博</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>
        上海蛮犀科技有限公司 版权所有 ©2019-2020沪ICP备19047152号
        &nbsp;&nbsp;<img src="../../assets/icp.png" />&nbsp;&nbsp;沪公网安备&nbsp;&nbsp;
        31011702007362号
      </p>
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
  width: 1200px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  padding: 20px 0;
}
.footerSpace .containerBox {
  display: flex;
  justify-content: space-around;
}
.footerSpace .containerBox .left .select {
  color: white !important;
}
.footerSpace .container li {
  margin: 20px 0;
}
.rightContent {
  font-size: 16px;
  font-weight: 700;
}
.rightContentBox {
  display: flex;
  justify-content: space-between;
}
.rightContentBox p {
  font-size: 14px;
  font-weight: normal;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.rightContentBox p img {
  width: 25px;
  margin-right: 10px;
}
.rightContentBox .wx,
.rightContentBox .wb {
  display: flex;
  flex-direction: column;
}
.footerSpace .container .left {
  border-right: 0.5px solid #666;
  padding-right: 30px;
  margin-right: 30px;
  display: flex;
}
.footerSpace .container .left .row1 {
  text-align: left;
  margin-right: 40px;
}
.footerSpace .container .left h3 {
  font-size: 16px;
}
.footerSpace .container .left a {
  color: #6d6e7e;
  font-size: 12px;
}
.footerSpace .container .left .select {
  color: white;
}
.footerSpace .right .wx > img,
.footerSpace .right .wb > img {
  width: 120px;
  margin-top: 10px;
  margin-right: 20px;
}
.footerSpace .bottom {
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
}
.footerSpace .bottom p {
  color: #6d6e7e;
}
.footerSpace .bottom p:first-child {
  margin-bottom: 10px;
}
</style>
