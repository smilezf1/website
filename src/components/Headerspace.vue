<template>
  <div class="headerspace">
    <!-- 导航开始 -->
    <div class="navigation">
      <div class="navigationContent">
        <div class="navigationContentLeft">
          <img src="../assets/logo2.png" />
        </div>
        <!--  <ul class="navigationContentMiddle">
          <li
            :class="{ select: currentIndex == index }"
            v-for="(item, index) in navData"
            :key="item.id"
            @mouseover="changeColor(index)"
            @mouseout="regainColor()"
          >
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>-->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">安全产品</template>
            <el-menu-item index="2-1">移动应用安全评测</el-menu-item>
            <el-menu-item index="2-2">移动应用评测系统</el-menu-item>
            <el-menu-item index="2-1">移动应用合规评测系统</el-menu-item>
            <el-menu-item index="2-2">移动应用安全防护</el-menu-item>
            <el-menu-item index="2-1">移动应用加固系统</el-menu-item>
            <el-menu-item index="2-2">移动应用源码加固编译器</el-menu-item>
            <el-menu-item index="2-1">移动应用源码虚拟化编译器</el-menu-item>
            <el-menu-item index="2-2">移动应用安全业务</el-menu-item>
            <el-menu-item index="2-1">移动应用秘钥白盒插件</el-menu-item>
            <el-menu-item index="2-2">移动应用环境自查插件</el-menu-item>
            <el-menu-item index="2-1">移动应用数据加密插件</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">安全服务</template>
            <el-menu-item index="3-1">移动应用安全咨询</el-menu-item>
            <el-menu-item index="3-2">移动应用安全渗透</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">关于我们</template>
            <el-menu-item index="4-1">公司简介</el-menu-item>
            <el-menu-item index="4-2">发展历程</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">
            <router-link to="/">联系我们</router-link>
          </el-menu-item>
        </el-menu>

        <ul class="navigationContentRight">
          <li>
            <router-link
              to="/"
              @mouseover="changeBgColor()"
              @mouseout="removeBgColor()"
              :style="active"
            >获取使用</router-link>
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
      currentIndex: -1,
      active: "",
      i: 0,
      activeIndex: "1"
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
    changeBgColor() {
      this.active =
        "background-color:#2a62ff; border:1px solid transparent;transition: background-color 0.5s";
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
.navigationContentMiddle li,
.navigationContentRight li {
  color: #fff;
  margin: 0 30px;
  line-height: 45px;
  border-bottom: 1px solid transparent;
}
.navigationContentMiddle .select {
  color: #00b7fa;
  border-bottom: 1px solid #00b7fa;
  transition: border-bottom 1s linear;
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
