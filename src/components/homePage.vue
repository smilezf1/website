<template>
  <div class="homePage">
    <!-- 安全产品 -->
    <div class="securityProduct">
      <div class="securiptProductTop">
        <div class="securiptProductTopContent">
          <div class="securipTproductTopLeft">
            <p class="newsTitle">
              蛮犀资讯 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            </p>
            <div class="newsItem">
              <transition class="newsItemContent" name="slide" mode="out-in">
                <p :key="text.id">
                  <router-link
                    to="/Article"
                    @mouseover.native="stopRoll()"
                    @mouseout.native="beginRoll()"
                    >{{ text.val }}</router-link
                  >
                </p>
              </transition>
            </div>
          </div>
          <div class="securipTproductTopRight newsBtn">
            <router-link to="/" @click.native="prev()"
              ><img src="../assets/newsPrev.png"
            /></router-link>
            <router-link to="/" @click.native="next()">
              <img src="../assets/newsNext.png"
            /></router-link>
          </div>
        </div>
      </div>
      <div class="securiptProductContainer">
        <h3>安全产品</h3>
        <div class="container">
          <ul v-for="(item, index) in securityProductList" :key="index">
            <img :src="item.imgSrc" class="decorate" />
            <li v-for="(item, index) in item.subs" :key="index">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 解决方案 -->
    <!--  <div class="solution">
      <h3>解决方案</h3>
      <div class="container">
        <ul>
          <li v-for="(item, index) in solutionList" :key="index">
            <img
              :src="item.imgSrc"
              @mouseover="zoom($event)"
              @mouseout="recover($event)"
            /><span>{{ item.name }}</span>
          </li
        </ul>
      </div>
    </div> -->
    <!-- 荣誉资质 -->
    <div class="partner">
      <h3>合作伙伴</h3>
      <div class="container">
        <ul>
          <el-row>
            <img src="../assets/partner1.png" title="漏洞银行" />
            <img
              src="../assets/partner2.png"
              title="上海纽盾科技股份有限公司"
            />
            <img src="../assets/partner3.png" title="观安" />
            <img
              src="../assets/partner4.png"
              title="上海市网络与信息安全应急管理事务中心"
            />
            <img src="../assets/partner5.png" title="国家互联网应急中心" />
          </el-row>
          <el-row>
            <img src="../assets/partner6.png" title="山东省公安厅" />
            <img src="../assets/partner7.png" title="完美世界游戏" />
            <img
              src="../assets/partner8.png"
              title="上海市网络技术综合应用研究所"
            />
            <img src="../assets/partner9.png" title="盛趣游戏" />
            <img src="../assets/partner10.png" title="信安在线" />
          </el-row>
        </ul>
      </div>
    </div>
    <!-- 宣传 -->
    <div class="publicity">
      <div class="publicityContent">
        <div class="publicityContentColumn">
          <h3 class="publicityContentColumnNumber">100%</h3>
          <p>覆盖企业移动化生命周期</p>
        </div>
        <div class="publicityContentColumn">
          <h3 class="publicityContentColumnNumber">10万+</h3>
          <p>管理移动设备</p>
        </div>
        <div class="publicityContentColumn">
          <h3 class="publicityContentColumnNumber">2000+</h3>
          <p>服务的客户</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "homePage",
  data() {
    return {
      securityProductList: [
        {
          imgSrc: require("../assets/icon.png"),
          subs: [
            { id: 0, name: "移动应用安全评测" },
            { id: 1, name: "移动应用漏洞评测" },
            { id: 2, name: "移动应用合规评测" },
            { id: 3, name: "移动应用个人信息安全评测" },
            { id: 4, name: "移动应用持续监督" }
          ]
        },
        {
          imgSrc: require("../assets/icon1.png"),
          subs: [
            { id: 0, name: "移动应用安全防护" },
            { id: 1, name: "应用程序安全加固" },
            {
              id: 2,
              name: "应用代码源保护"
            },
            {
              id: 3,
              name: "应用数据资源保护"
            },
            {
              id: 4,
              name: "用户交互信息保护"
            }
          ]
        },
        {
          imgSrc: require("../assets/icon2.png"),
          subs: [
            { id: 0, name: "移动应用安全业务" },
            { id: 1, name: "通信数据保护" },
            { id: 2, name: "程序密钥保护" },
            { id: 3, name: "业务落地数据保护" },
            { id: 4, name: "设备环境自查" }
          ]
        }
      ],
      solutionList: [
        { id: 1, name: "金融", imgSrc: require("../assets/solution1.jpg") },
        { id: 2, name: "政府", imgSrc: require("../assets/solution2.jpg") },
        { id: 3, name: "企业", imgSrc: require("../assets/solution2.jpg") }
      ],
      newsList: [
        "APP违法违规收集使用个人信息专项治理报告",
        "好酒沈醉酬佳节，十分酒，一分歌。",
        "伟大历程，初心不忘 | 热烈庆祝中国共产党建党99周年",
        "APP违法违规收集使用个人信息专项治理报告"
      ],
      number: 0,
      timer: null
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.newsList[this.number]
      };
    }
  },
  mounted() {
    this.startMove();
  },
  methods: {
    zoom(e) {
      $(e.target).css({ width: "500px", transition: "width 0.5s" });
    },
    recover(e) {
      $(e.target).css({ width: "" });
    },
    startMove() {
      this.timer = setTimeout(() => {
        if (this.number === 3) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 4000);
    },
    stopRoll() {
      clearTimeout(this.timer);
    },
    beginRoll() {
      this.startMove();
    },
    prev() {
      clearTimeout(this.timer);
      if (this.number === 0) {
        this.number = 2;
      } else {
        this.number -= 1;
      }
    },
    next() {
      clearTimeout(this.timer);
      if (this.number === 3) {
        this.number = 0;
      } else {
        this.number += 1;
      }
    }
  }
};
</script>
<style>
/* 安全产品 */
.securiptProductTop {
  width: 100%;
  background: #6aa3ea;
  color: white;
  padding: 10px 0;
  box-sizing: border-box;
  box-sizing: border-box;
}
.newsTitle {
  display: inline-block;
  font-size: 18px;
}
.newsItem {
  width: 350px;
  height: 100%;
  overflow: hidden;
  position: relative;
  bottom: -4px;
  display: inline-block;
  box-sizing: border-box;
}
.newsBtn {
  display: flex;
  flex-direction: column;
}
.newsBtn a {
  margin-bottom: 5px;
}
.newsItem a {
  color: white;
}
.newsItem p {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
.slide-leave-to {
  transform: translateY(-20px);
}
.slide-enter {
  transform: translateY(20px);
}
.securiptProductTopContent {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.securipTproductTopRight .more {
  color: inherit;
}
.securiptProductContainer h3,
.solution h3,
.partner h3 {
  font-size: 34px;
  color: #2b2b2b;
  text-align: center;
  margin: 20px 0;
  font-weight: 700;
}
.securiptProductContainer {
  background: url("../assets/section-bg.jpg") center;
  padding: 20px 0;
}
.securiptProductContainer h3 {
  color: white;
}
.securiptProductContainer .container {
  width: 1200px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.securiptProductContainer .container a {
  font-size: 18px;
}
.securiptProductContainer ul {
  width: 320px;
  padding: 20px;
  /* box-shadow: 0px 0px 10px #00000030; */
  box-sizing: border-box;
  border-radius: 10px;
  background: white;
}
.securiptProductContainer ul .decorate {
  display: block;
  margin: 0 auto;
}
.securiptProductContainer ul li {
  margin: 30px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.securiptProductContainer ul li > span {
  color: #2b2b2b;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 22px;
  margin: 0 auto;
}
.securiptProductContainer ul li:not(:first-child) {
  display: flex;
  justify-content: space-between;
}
.el-icon-mobile-phone {
  color: rgb(78, 186, 212);
  margin-right: 5px;
}
.securiptProductContainer a {
  margin: 0 auto;
}
/* 解决方案 */
.solution {
  margin-top: 40px;
}
.solution .container ul {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.solution .container ul li {
  width: 400px;
  height: 615px;
  color: white;
  position: relative;
  overflow: hidden;
}
.solution .container ul li img {
  width: 400px;
  cursor: pointer;
}
.solution .container ul li span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-weight: 500;
}
/* 荣誉资质 */
.partner {
  padding: 20px;
}
.partner .container {
  width: 1200px;
  margin: 20px auto;
  text-align: center;
}
.partner img {
  margin-right: 10px;
}
.partner .container .el-row {
  margin: 40px 0;
  padding: 10px 0;
}
/* 宣传 */
.publicity {
  height: 300px;
  background-image: url("../assets/data_bg.svg");
  background-size: cover;
  background-position: bottom center;
  display: flex;
  align-items: center;
  text-align: center;
}
.publicityContent {
  width: 1200px;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.publicityContentColumnNumber {
  font-size: 48px;
  font-weight: 500;
}
.publicityContentColumn > p {
  color: #00f0ff;
  font-size: 16px;
  margin-top: 10px;
}
</style>
