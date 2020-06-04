<template>
  <div class="headerspace">
    <!-- 导航开始 -->
    <div class="navigation">
      <div class="navigationContent">
        <div class="navigationContentLeft">
          <img src="../assets/logo2.png" />
        </div>
        <ul class="navigationContentMiddle">
          <li
            @mouseover="changeColor(0)"
            :class="{ select: currentIndex == 0 }"
            @mouseout="regainColor()"
          >
            <router-link to="/" enter-active-class="animate__bounce"
              >首页</router-link
            >
          </li>
          <li
            @mouseover="changeColor(1)"
            :class="{ select: currentIndex == 1 }"
            @mouseout="regainColor()"
          >
            <router-link to="/Product">安全产品</router-link>
            <div class="pullDown">
              <router-link to="/">移动应用安全评测</router-link>
              <router-link to="/">移动应用评测系统</router-link>
              <router-link to="/">移动应用合规评测系统</router-link>
              <router-link to="/">移动应用安全防护</router-link>
              <router-link to="/">移动应用加固系统</router-link>
              <router-link to="/">移动应用源码加固编译器</router-link>
              <router-link to="/">移动应用源码虚拟化编译器</router-link>
              <router-link to="/">移动应用安全业务</router-link>
              <router-link to="/">移动应用秘钥白盒插件</router-link>
              <router-link to="/">移动应用环境自查插件</router-link>
              <router-link to="/">移动应用数据加密插件</router-link>
            </div>
          </li>
          <li
            @mouseover="changeColor(2)"
            :class="{ select: currentIndex == 2 }"
            @mouseout="regainColor()"
          >
            <router-link to="/Service">安全服务</router-link>
            <div class="pullDown">
              <router-link to="/">移动应用安全咨询</router-link>
              <router-link to="/">移动应用安全渗透</router-link>
            </div>
          </li>
          <li
            @mouseover="changeColor(3)"
            :class="{ select: currentIndex == 3 }"
            @mouseout="regainColor()"
          >
            <router-link to="/Project">解决方案</router-link>
          </li>
          <li
            @mouseover="changeColor(4)"
            :class="{ select: currentIndex == 4 }"
            @mouseout="regainColor()"
          >
            <router-link to="/About">关于我们</router-link>
            <div class="pullDown" style="display:none">
              <router-link to="/">公司简介</router-link>
              <router-link to="/">发展历程</router-link>
            </div>
          </li>
          <li
            @mouseover="changeColor(5)"
            :class="{ select: currentIndex == 5 }"
            @mouseout="regainColor()"
          >
            <router-link to="/Connect">联系我们</router-link>
          </li>
        </ul>
        <div class="navigationContentRight">
          <router-link
            to="/Gain"
            @mouseover.native="changeBgColor()"
            @mouseout.native="removeBgColor()"
            :style="active"
            >获取使用</router-link
          >
        </div>
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
      console.log(index);
      this.currentIndex = index;
    },
    regainColor: function() {
      this.currentIndex = -1;
    },
    changeBgColor() {
      console.log;
      this.active =
        "background-color:#2a62ff; border:1px solid transparent;transition: background-color 0.5s  linear";
    },
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
        $(".navigation").css(
          "background",
          "#1a1c24",
          "transition",
          "all 0.3s linear"
        );
      } else {
        $(".navigation").css("background", "");
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.headerspace {
  height: 45px;
}
.navigation {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 45px;
  background: #333;
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
  margin-top: -44px;
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
  top: 100%;
  left: 0;
  z-index: 2;
  background: rgba(20, 22, 28, 0.8);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 0;
  overflow: hidden;
}
.navigationContentMiddle li .pullDown a {
  display: block;
}
.navigationContentMiddle li,
.navigationContentRight li {
  color: #fff;
  padding: 0 30px;
  line-height: 45px;
  border-bottom: 1px solid transparent;
}
.navigationContentMiddle .select > a {
  color: #00b7fa;
  transition: border-bottom 1s linear;
}
.navigationContentMiddle .select {
  border-bottom: 2px solid #00b7fa;
}

.navigationContentMiddle li a {
  color: inherit;
  font-size: 11px;
  box-sizing: border-box;
}
.navigationContentRight a {
  color: white;
  font-size: 10px;
  padding: 6px 10px;
  border: 1px solid white;
}
.navigationContentRight {
  margin-left: 20px;
}
</style>
