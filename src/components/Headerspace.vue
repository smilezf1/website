<template>
  <div class="headerspace">
    <!-- 导航开始 -->
    <div class="navigation">
      <div class="navigationContent">
        <!-- 导航左部分 -->
        <div class="navigationContentLeft">
          <img src="../assets/logo2.png" />
        </div>
        <!-- 导航中间部分 -->
        <ul class="navigationContentMiddle">
          <li>
            <router-link
              to="/"
              @mouseover.native="changeColor(0)"
              :class="{ select: currentIndex == 0 }"
              @mouseout.self="regainColor()"
              >首页</router-link
            >
          </li>
          <li>
            <router-link
              to="/Product"
              @mouseover.native="changeColor(1), reveal($event)"
              :class="{ select: currentIndex == 1 }"
              @mouseout.self="regainColor()"
            >
              安全产品
              <div
                class="pullDown"
                style="width:600px"
                @mouseout="hide($event)"
              >
                <el-row :gutter="24">
                  <el-col :span="10"
                    ><router-link to="/Product/safetyEvaluation"
                      >移动应用安全评测</router-link
                    >
                    <router-link to="/Product/Evaluating"
                      >移动应用评测系统</router-link
                    >
                    <router-link to="/Product/ComplianceEvaluating"
                      >移动应用合规评测系统</router-link
                    >
                  </el-col>
                  <el-col :span="10">
                    <router-link to="/Product/safetyProtection"
                      >移动应用安全防护</router-link
                    >
                    <router-link to="/Product/Reinforce"
                      >移动应用加固系统</router-link
                    >
                    <router-link to="/Product/Code"
                      >移动应用源码加固编译器</router-link
                    >
                    <router-link to="/Product/Virtual"
                      >移动应用源码虚拟化编译器</router-link
                    >
                  </el-col>
                  <el-col :span="10">
                    <router-link to="/Product/safetyService"
                      >移动应用安全业务</router-link
                    >
                    <router-link to="/Product/SecretKey"
                      >移动应用秘钥白盒插件</router-link
                    >
                    <router-link to="/Product/SelfInspection"
                      >移动应用环境自查插件</router-link
                    >
                    <router-link to="/Product/Encryption"
                      >移动应用数据加密插件</router-link
                    >
                  </el-col>
                </el-row>
              </div>
            </router-link>
          </li>
          <li>
            <router-link
              to="/Service"
              @mouseover.native="changeColor(2), reveal($event)"
              :class="{ select: currentIndex == 2 }"
              @mouseout.self="regainColor()"
            >
              安全服务
              <div class="pullDown" @mouseout="hide($event)">
                <router-link to="/Service/securityConsulting"
                  >移动应用安全咨询</router-link
                >
                <router-link to="/Service/percolationTest"
                  >移动应用安全渗透</router-link
                >
              </div>
            </router-link>
          </li>
          <li>
            <router-link
              to="/Project"
              @mouseover.native="changeColor(3), reveal($event)"
              :class="{ select: currentIndex == 3 }"
              @mouseout.self="regainColor()"
              >解决方案</router-link
            >
          </li>
          <li>
            <router-link
              to="/About"
              @mouseover.native="changeColor(4), reveal($event)"
              :class="{ select: currentIndex == 4 }"
              @mouseout.self="regainColor(), hide($event)"
            >
              关于我们
              <div class="pullDown">
                <router-link to="/About/companyIntroduce">公司简介</router-link>
                <router-link to="/About/devHistroy">发展历程</router-link>
              </div>
            </router-link>
          </li>
          <li
            @mouseover="changeColor(5)"
            :class="{ select: currentIndex == 5 }"
            @mouseout.self="regainColor()"
          >
            <router-link to="/Connect">联系我们</router-link>
          </li>
        </ul>
        <!-- 导航右边 -->
        <ul class="navigationContentRight">
          <li
            @mouseover="changeColor(6)"
            :class="{ select: currentIndex == 6 }"
            @mouseout.self="regainColor()"
          >
            <router-link to="/Gain">获取使用</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 导航结束 -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "headerSpace",
  data() {
    return {
      theme1: "light",
      navData: [
        { id: 0, name: "首页", link: "/" },
        { id: 1, name: "安全产品", link: "/Product" },
        { id: 2, name: "安全服务", link: "/Service" },
        { id: 3, name: "解决方案", link: "/Project" },
        { id: 4, name: "关于我们", link: "/About" },
        { id: 5, name: "联系我们", link: "/Connect" }
      ],
      currentIndex: 0,
      active: "",
      i: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true); //监听滚轮滚动事件
  },
  methods: {
    changeColor: function(index) {
      this.currentIndex = index;
    },
    regainColor: function() {
      this.currentIndex = -1;
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = screenTop;
      if (scroll >= 620) {
        $(".navigation").css("transition", "all 0.3s linear");
      } else {
        $(".navigation").css("background", "");
      }
    },
    reveal(e) {
      $(e.target)
        .children(".pullDown")
        .addClass("dropDownActive");
      $(e.target)
        .parent("li")
        .siblings()
        .children("a")
        .children(".pullDown")
        .removeClass("dropDownActive");
    },
    hide(e) {
      /*  $(e.target)
        .parents("li")
        .children("a")
        .children(".pullDown")
        .removeClass("dropDownActive"); */
      $(e.target).removeClass("dropDownActive");
    }
  }
};
</script>
<style>
.headerspace {
  height: 64px;
}
.navigation {
  height: 64px;
  line-height: 64px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(to bottom, #6dd5ed, #2193b0);
}
.navigationContent {
  width: 60%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  justify-content: space-around;
}
.navigationContentLeft {
  width: 130px;
  height: 100%;
  position: relative;
}
.navigationContentLeft img {
  width: 130px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.navigationContentMiddle,
.navigationContentRight {
  display: flex;
  height: 100%;
  align-items: center;
}
.navigationContentMiddle li {
  position: relative;
}
.navigationContentMiddle li .pullDown {
  position: absolute;
  padding: 0 10px;
  top: 66px;
  left: 0;
  z-index: 2;
  background: #fff;
  color: #333;
  box-shadow: 0 0 4px #999;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
  text-align: center;
}
.navigationContentMiddle li .pullDown .el-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.navigationContentMiddle li .pullDown .el-col {
  display: flex;
  flex-direction: column;
}
.navigationContentMiddle li .pullDown a {
  font-size: 13px;
}
.navigationContentMiddle li .dropDownActive {
  max-height: 456px;
  transition: max-height 0.5s ease;
}
.navigationContentMiddle > li {
  color: #fff;
  margin-right: 20px;
}
.navigationContentMiddle > li > a {
  padding: 0 30px;
  display: inline-block;
  height: 100%;
  box-sizing: border-box;
}
.navigationContentMiddle .select {
  border-bottom: 2px solid white;
}
.navigationContentMiddle li a {
  color: inherit;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  border-bottom: 2px solid transparent;
}
.navigationContentRight a {
  color: white;
  font-size: 16px;
  padding: 10px 15px;
  border: 1px solid white;
  border-radius: 5px;
}
.navigationContentRight {
  margin-left: 20px;
}
</style>
