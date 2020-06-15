<template>
  <div class="headerspace">
    <!-- 导航开始 -->
    <div class="navigation">
      <div class="navigationContent">
        <div class="navigationContentLeft">
          <img src="../assets/logo2.png" />
        </div>
        <ul class="navigationContentMiddle">
          <li>
            <router-link
              to="/"
              @mouseover.native="changeColor(0)"
              :class="{ select: currentIndex == 0 }"
              @mouseout.native="regainColor()"
              >首页</router-link
            >
          </li>
          <li>
            <router-link
              to="/Product"
              @mouseover.native="changeColor(1), reveal($event)"
              :class="{ select: currentIndex == 1 }"
              @mouseout.native="regainColor(), hide($event)"
            >
              安全产品
              <div class="pullDown" style="width:560px">
                <el-row :gutter="18">
                  <el-col :span="6"
                    ><router-link to="/">移动应用安全评测</router-link>
                    <router-link to="/">移动应用评测系统</router-link>
                    <router-link to="/">移动应用合规评测系统</router-link>
                  </el-col>
                  <el-col :span="6">
                    <router-link to="/">移动应用安全防护</router-link>
                    <router-link to="/">移动应用加固系统</router-link>
                    <router-link to="/">移动应用源码加固编译器</router-link>
                    <router-link to="/">移动应用源码虚拟化编译器</router-link>
                  </el-col>
                  <el-col :span="6">
                    <router-link to="/">移动应用安全业务</router-link>
                    <router-link to="/">移动应用秘钥白盒插件</router-link>
                    <router-link to="/">移动应用环境自查插件</router-link>
                    <router-link to="/">移动应用数据加密插件</router-link>
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
              @mouseout.native="regainColor(), hide($event)"
            >
              安全服务
              <div class="pullDown">
                <router-link to="/">移动应用安全咨询</router-link>
                <router-link to="/">移动应用安全渗透</router-link>
              </div>
            </router-link>
          </li>
          <li>
            <router-link
              to="/Project"
              @mouseover.native="changeColor(3), reveal($event)"
              :class="{ select: currentIndex == 3 }"
              @mouseout.native="regainColor(), hide($event)"
              >解决方案</router-link
            >
          </li>
          <li>
            <router-link
              to="/About"
              @mouseover.native="changeColor(4), reveal($event)"
              :class="{ select: currentIndex == 4 }"
              @mouseout.native="regainColor(), hide($event)"
            >
              关于我们
              <div class="pullDown">
                <router-link to="/">公司简介</router-link>
                <router-link to="/">发展历程</router-link>
              </div>
            </router-link>
          </li>
          <li
            @mouseover="changeColor(5)"
            :class="{ select: currentIndex == 5 }"
            @mouseout="regainColor()"
          >
            <router-link to="/Connect">联系我们</router-link>
          </li>
        </ul>
        <ul class="navigationContentRight">
          <li>
            <router-link
              to="/Gain"
              @mouseover.native="changeBgColor()"
              @mouseout.native="removeBgColor()"
              :style="active"
              >获取使用</router-link
            >
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
    changeBgColor() {},
    removeBgColor() {
      this.active = "";
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
    },

    hide(e) {
      $(e.target)
        .children(".pullDown")
        .removeClass("dropDownActive");
      console.log($(e.target));
    }
  }
};
</script>
<style>
.headerspace{
  height: 64px;
}
.navigation {
   height: 64px;
  line-height:60px;
  width: 100%;
  position: fixed;
  line-height: 64px;
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(to bottom, #6dd5ed, #2193b0);
}

.navigationContent {
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  justify-content: space-around;
}
.navigationContentLeft {
  height: 100%;
}
.navigationContentLeft img {
  width: 130px;
  margin-top: -37px;
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
  top: 66px;
  padding: 0 10px;
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
}
.navigationContentMiddle li .pullDown .el-col {
  margin-right: 20px;
}
.navigationContentMiddle li .pullDown a {
  font-size: 13px;
  box-sizing: border-box;
}
.navigationContentMiddle li .dropDownActive {
  max-height: 280px;
  transition: max-height 0.5s ease;
}
.navigationContentMiddle > li,
.navigationContentRight li {
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
}
.navigationContentRight {
  margin-left: 20px;
}
</style>
