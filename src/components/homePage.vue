<template>
  <div class="homePage">
    <!-- 安全产品 -->
    <div class="securityProduct">
      <div class="securiptProductTop">
        <div class="securipTproductTopLeft">
          <span
            >蛮犀资讯
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;《工业和信息化部337号令》解读</span
          >
        </div>
        <div class="securipTproductTopRight">
          <router-link class="more" to="/">更多>></router-link>
        </div>
      </div>
      <div class="securiptProductContainer">
        <h3>安全产品</h3>
        <div class="container">
          <ul v-for="(item, index) in securityProductList" :key="index">
            <li>
              <i class="el-icon-mobile-phone" style="font-size:50px"></i
              ><span>{{ item[0].name }}</span>
            </li>
            <li v-for="(item, index) in item" :key="index">
              <router-link class="left" to="/">{{ item.name }}</router-link>
              <router-link class="right" to="/">查看详情>></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="solution">
      <h3>解决方案</h3>
      <div class="container">
        <ul>
          <li v-for="(item, index) in solutionList" :key="index">
            <img :src="item.imgSrc" /><span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 荣誉资质 -->
    <div class="honor">
      <h3>荣誉资质</h3>
      <div class="container">
        <ul>
          <el-row>
            <img src="../assets/honor_02.png" title="中华人民共和国公安部"/>
            <img src="../assets/honor_03.png" title="湖北省公安厅"/>
            <img src="../assets/honor_04.png" title="深圳市公安局"/>
            <img src="../assets/honor_05.png" title="武汉市公安局"/>
            <img src="../assets/honor_06.png" title="南宁市公安局"
          /></el-row>
          <el-row>
            <img src="../assets/honor_08.png" title="国家信息中心"/>
            <img src="../assets/honor_09.png" title="国家互联网应急中心"/>
            <img src="../assets/honor_10.png" title="公安部第三研究所"/>
            <img src="../assets/honor_11.png" title="深圳市信息安全评测中心"/>
            <img src="../assets/honor_12.png" title="深圳市电子教务资源中心"
          /></el-row>
          <el-row>
            <img src="../assets/honor_13.png" title="国家信息中心"/>
            <img src="../assets/honor_14.png" title="广东省国家税务局"/>
            <img src="../assets/honor_15.png" title="国家超级计算深圳中心"/>
            <img src="../assets/honor_16.png" title="深圳市南山区人民政府"/>
            <img src="../assets/honor_17.png" title="中国信息安全测评中心"
          /></el-row>
        </ul>
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
        [
          { id: 0, name: "移动应用安全评测" },
          { id: 1, name: "移动应用漏洞评测" },
          { id: 2, name: "移动应用合规评测" },
          { id: 3, name: "移动应用个人信息安全评测" },
          { id: 4, name: "移动应用持续监督" }
        ],
        [
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
        ],
        [
          { id: 0, name: "移动应用安全业务" },
          { id: 1, name: "通信数据保护" },
          { id: 2, name: "程序密钥保护" },
          { id: 3, name: "业务落地数据保护" },
          { id: 4, name: "设备环境自查" }
        ]
      ],
      solutionList: [
        { id: 1, name: "金融", imgSrc: require("../assets/solution1.jpg") },
        { id: 2, name: "政府", imgSrc: require("../assets/solution2.jpg") },
        { id: 3, name: "企业", imgSrc: require("../assets/solution2.jpg") }
      ]
    };
  },
  mounted() {
    console.log(this.securityProductList);
  }
};
</script>
<style>
/* 安全产品 */
.securipTproductTopLeft {
  float: left;
}
.securipTproductTopRight {
  float: right;
}
.securiptProductTop:after {
  content: "";
  display: block;
  clear: both;
}
.securiptProductTop {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background: #f8f8f8;
  color: #7c7c7c;
  font-weight: 600;
}
.securipTproductTopRight .more {
  color: inherit;
}
.securiptProductContainer h3,
.solution h3,
.honor h3 {
  font-size: 25px;
  color: #333;
  text-align: center;
  margin-top: 5px;
  font-weight: 500;
}
.securiptProductContainer {
  margin-top: 30px;
}
.securiptProductContainer .container {
  padding: 5px 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
}
.honor .container img {
  width: 220px;
}
.securiptProductContainer ul {
  width:400px;
  padding: 20px;
  box-shadow:0px 0px 10px #00000030;
  box-sizing:border-box;
}
.securiptProductContainer ul li {
  margin: 30px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.securiptProductContainer ul li .left {
  margin-right: 30px;
}
.securiptProductContainer ul li:not(:first-child) {
  display: flex;
  justify-content: space-between;
}
.el-icon-mobile-phone {
  color: #1989fa;
  margin-right: 5px;
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
  color: white;
  position: relative;
}
.solution .container ul li img {
  width: 400px;
}
.solution .container ul li span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 500;
}
/* 荣誉资质 */
.honor {
  padding: 20px;
}
.honor .container {
  width: 1200px;
  margin: 20px auto;
  text-align: center;
}
.honor img {
  margin-right: 5px;
}
</style>
