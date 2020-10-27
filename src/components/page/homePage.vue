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
                <p :key="text.number">
                  <router-link
                    :to="{
                      path: 'Article',
                      query: {
                        id: text.id,
                        time: text.time,
                        title: text.title,
                        content: text.content
                      }
                    }"
                    @mouseover.native="stopRoll()"
                    @mouseout.native="beginRoll()"
                    >{{ text.title }}</router-link
                  >
                </p>
              </transition>
            </div>
          </div>
          <div class="securipTproductTopRight ">
            <router-link to="/article" class="more">
              <span> More</span>
              <img src="../../assets/more.png" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="securiptProductContainer">
        <h3>安全产品</h3>
        <div class="container">
          <ul
            v-for="(item, index) in securityProductList"
            :key="index"
            class="securityProductList"
          >
            <img :src="item.imgSrc" class="decorate" />
            <li v-for="(item, index) in item.subs" :key="index">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 荣誉资质 -->
    <div class="partner">
      <h3>合作伙伴</h3>
      <div class="container">
        <ul>
          <el-row>
            <img src="../../assets/partner7.png" title="完美世界游戏" />
            <img
              src="../../assets/partner2.png"
              title="上海纽盾科技股份有限公司"
            />
            <img src="../../assets/partner3.png" title="观安" />
            <img src="../../assets/partner9.png" title="盛趣游戏" />
            <img src="../../assets/partner5.png" title="国家互联网应急中心" />
          </el-row>
          <el-row>
            <img src="../../assets/partner6.png" title="山东省公安厅" />
            <img src="../../assets/partner1.png" title="漏洞银行" />
            <img
              src="../../assets/partner8.png"
              title="上海市网络技术综合应用研究所"
            />
            <img
              src="../../assets/partner4.png"
              title="上海市网络与信息安全应急管理事务中心"
            />
            <img src="../../assets/partner10.png" title="信安在线" />
          </el-row>
        </ul>
      </div>
    </div>
    <!-- 宣传 -->
    <div class="publicity">
      <div class="publicityContent">
        <!-- 漩涡效果 -->
        <svg
          width="813"
          height="144"
          xmlns="http://www.w3.org/2000/svg"
          class="vortex animate-scale"
        >
          <g stroke="#fff" stroke-width="1.5" opacity=".2" fill="none">
            <path
              d="M401.427 172.105c55.94 0 101.288-45.348 101.288-101.288S457.367-30.471 401.427-30.471 300.139 14.877 300.139 70.817s45.348 101.288 101.288 101.288z"
              opacity=".8"
            />
            <path
              d="M400.524 134.246c34.533 0 62.527-27.994 62.527-62.527S435.057 9.192 400.524 9.192s-62.527 27.994-62.527 62.527 27.994 62.527 62.527 62.527z"
              opacity=".9"
            />
            <path
              d="M400.399 97.015c13.902 0 25.171-11.27 25.171-25.171 0-13.902-11.27-25.171-25.171-25.171-13.902 0-25.171 11.27-25.171 25.171 0 13.902 11.27 25.171 25.171 25.171z"
            />
            <path
              d="M402.012 214.26c78.898 0 142.857-63.959 142.857-142.857S480.91-71.454 402.012-71.454 259.155-7.495 259.155 71.403 323.114 214.26 402.012 214.26z"
              opacity=".7"
            />
            <path
              d="M402.611 300.004c126.261 0 228.615-102.355 228.615-228.615 0-126.261-102.355-228.615-228.615-228.615-126.261 0-228.615 102.355-228.615 228.615 0 126.261 102.355 228.615 228.615 228.615z"
              opacity=".5"
            />
            <path
              d="M403.664 341.898c149.98 0 271.562-121.583 271.562-271.562 0-149.98-121.583-271.563-271.562-271.563-149.98 0-271.562 121.583-271.562 271.563s121.583 271.562 271.562 271.562z"
              opacity=".4"
            />
            <path
              d="M404.816 385.914c174.925 0 316.73-141.805 316.73-316.73s-141.805-316.73-316.73-316.73-316.73 141.805-316.73 316.73 141.805 316.73 316.73 316.73z"
              opacity=".3"
            />
            <path
              d="M406.426 428.519c199.345 0 360.945-161.601 360.945-360.945 0-199.345-161.601-360.945-360.945-360.945-199.345 0-360.945 161.601-360.945 360.945 0 199.345 161.601 360.945 360.945 360.945z"
            />
            <path
              d="M406.943 472.293c223.806 0 405.236-181.43 405.236-405.236 0-223.806-181.43-405.236-405.236-405.236-223.806 0-405.236 181.43-405.236 405.236 0 223.806 181.43 405.236 405.236 405.236z"
              opacity=".1"
            />
            <path
              d="M402.598 257c102.503 0 185.598-83.095 185.598-185.598 0-102.503-83.095-185.598-185.598-185.598C300.095-114.196 217-31.101 217 71.402 217 173.905 300.095 257 402.598 257z"
              opacity=".6"
            />
          </g>
        </svg>
        <div
          class="publicityContentColumn"
          v-for="(item, index) in publicityList"
          :key="index"
        >
          <h3 class="publicityContentColumnNumber">
            {{ item.num }}
          </h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homePage",
  data() {
    return {
      securityProductList: [
        {
          imgSrc: require("../../assets/img1.png"),
          subs: [
            { id: 0, name: "移动应用安全评测" },
            { id: 1, name: "移动应用漏洞评测" },
            { id: 2, name: "移动应用合规评测" },
            { id: 3, name: "移动应用个人信息安全评测" },
            { id: 4, name: "移动应用持续监督" }
          ]
        },
        {
          imgSrc: require("../../assets/img2.png"),
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
          imgSrc: require("../../assets/img3.png"),
          subs: [
            { id: 0, name: "移动应用安全业务" },
            { id: 1, name: "通信数据保护" },
            { id: 2, name: "程序密钥保护" },
            { id: 3, name: "业务落地数据保护" },
            { id: 4, name: "设备环境自查" }
          ]
        }
      ],
      newsList: [],
      publicityList: [
        { num: "100%", text: "事前预警，事中防护，事后追溯" },
        { num: "10万+", text: "移动应用评测与整改" },
        { num: "1000+", text: "服务的客户" }
      ],
      number: 0,
      timer: null,
      selectIndex: -1,
      selectSecuriptProductIndex: -1,
      showIcon: false
    };
  },
  inject: ["articleListItem"],
  computed: {
    text() {
      return {
        number: this.number,
        id: this.newsList[this.number].id,
        title: this.newsList[this.number].title,
        time: this.newsList[this.number].time,
        content: this.newsList[this.number].content
      };
    }
  },
  created() {
    this.newsList = this.articleListItem;
  },
  mounted() {
    this.startMove();
  },
  methods: {
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
    }
  }
};
</script>
<style>
/* 安全产品 */
.securiptProductTop {
  width: 100%;
  background: linear-gradient(180deg, #24c6dc, #514a9d);
  color: white;
  padding: 15px 0;
  box-sizing: border-box;
  box-sizing: border-box;
}
.newsTitle {
  display: inline-block;
  font-size: 18px;
  font-family: URW Chancery L, cursive;
}
.newsItem {
  width: 400px;
  height: 100%;
  overflow: hidden;
  position: relative;
  bottom: -4px;
  display: inline-block;
  box-sizing: border-box;
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
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.securipTproductTopRight .more img {
  width: 18px;
  margin-left: 5px;
}
.securiptProductContainer h3,
.solution h3,
.partner h3 {
  font-size: 34px;
  color: #3b3b3b;
  text-align: center;
  margin: 20px 0;
  font-weight: normal;
  font-family: URW Chancery L, cursive;
}
.securiptProductContainer {
  background: url("../../assets/banner2.jpg") 100% / cover repeat-x;
  padding: 20px 0;
}
.securiptProductContainer h3 {
  color: white;
  font-family: URW Chancery L, cursive;
}

.securiptProductContainer .container {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.securiptProductContainer .container a {
  font-size: 18px;
}
.securiptProductContainer ul {
  width: 280px;
  padding: 20px 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background: white;
}
.securityProductList {
  /* cursor: pointer;
  transition: transform 0.3s; */
}
.securityProductList:hover {
  /* transform: scale(1.02);
  box-shadow: 0px 0px 10px #00000055; */
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
  font-size: 18px;
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
.securiptProductContainer .container img {
  width: 150px;
  height: 116px;
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
  cursor: pointer;
}
.partner .container .el-row {
  margin: 40px 0;
  padding: 10px 0;
}
/* 宣传 */
.publicity {
  height: 300px;
  background: linear-gradient(270deg, #4940ac 0%, #00a38e 100%);
  display: flex;
  align-items: center;
  text-align: center;
}
.publicityContent {
  width: 1200px;
  position: relative;
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
  font-size: 16px;
  margin-top: 10px;
}
.publicityContentColumn h3 {
  font-family: URW Chancery L, cursive;
}
.publicityContent .vortex {
  height: 120px;
  position: absolute;
  top: -40px;
  left: 25%;
  visibility: hidden;
}
@keyframes animation-scale {
  0% {
    transform-origin: center center;
    transform: scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform-origin: center center;
    transform: scale(2);
    opacity: 0;
  }
}
.publicityContent .animate-scale {
  animation: animation-scale 3s 0.2s linear both infinite;
  visibility: visible;
}
</style>
