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
            :class="{ select: currentIndex == index }"
            v-for="(item, index) in navData"
            :key="item.id"
            @mouseover="changeColor(index)"
            @mouseout="regainColor()"
          >
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
        <ul class="navigationContentRight">
          <li>
            <router-link
              to="/"
              @mouseover="changeBgColor()"
              @mouseout="removeBgColor()"
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
justify-content:space-around;
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
  border-bottom: 2px solid transparent;
}
.navigationContentMiddle .select {
  color: #00b7fa;
  border-bottom: 2px solid #00b7fa;
  transition: border-bottom 1s linear;
}

.navigationContentMiddle li a {
  color: inherit;
  font-weight: 400;
  font-size: 12px;
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
