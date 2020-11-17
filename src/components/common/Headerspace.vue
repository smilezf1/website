<template>
  <div class="headerspace">
    <!-- 导航开始 -->
    <transition name="slide-fade">
      <div class="navigation">
        <div class="navigationContent">
          <!-- 导航左部分 -->
          <div class="navigationContentLeft">
            <img src="../../assets/logo.png" />
          </div>
          <!-- 导航中间部分 -->
          <ul class="navigationContentMiddle">
            <li
              v-for="(item, index) in navData"
              :key="index"
              @mouseover="showDropDown(index)"
              @mouseout="hiddenDropDown(index)"
            >
              <router-link
                :to="item.link"
                @mouseover.native="changeColor(index)"
                @mouseout.native="recoverColor()"
                :class="{ item_select: item_SelectIndex == index }"
                @click="jumpSecurityManagePlat(item.name)"
              >
                {{ item.name }}
                <transition name="slide-fade">
                  <div
                    class="pullDown"
                    v-if="item.child"
                    v-show="item.child.show"
                    :class="{ pullDownSpecial: index == 1 }"
                  >
                    <router-link
                      v-for="(item_child, item_child_index) in item.child
                        .childContent"
                      :key="item_child_index"
                      :to="item_child.src"
                      @mouseover.native="changeChildColor(item_child_index)"
                      @mouseout.native="recoverChildColor()"
                      :class="{
                        item_child_select:
                          item_child_SelectIndex == item_child_index
                      }"
                      >{{ item_child.content }}</router-link
                    >
                  </div>
                </transition>
              </router-link>
            </li>
          </ul>
          <!-- 导航右边 -->
          <ul class="navigationContentRight">
            <li>
              <span
                :class="{ getUseSelect: getUseIndex == 1 }"
                class="securityManagePlat"
                @mouseover="getUse()"
                @mouseout="recovergetUse()"
                @click="jumpSecurityManagePlat"
                >移动应用安全管理平台</span
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <!-- 导航结束 -->
  </div>
</template>
<script>
export default {
  name: "headerSpace",
  data() {
    return {
      navData: [
        { id: 0, name: "首页", link: "/index", child: null },
        {
          id: 1,
          name: "安全产品",
          link: "/Product",
          child: {
            show: false,
            childContent: [
              { content: "移动应用评测系统", src: "/product/evaluating" },
              {
                content: "移动应用合规评测系统",
                src: "/Product/ComplianceEvaluating"
              },
              { content: "移动应用加固系统", src: "/product/reinforce" },
              { content: "移动应用源码加固编译器", src: "/product/code" },
              { content: "移动应用源码虚拟化编译器", src: "/product/virtual" },
              { content: "移动应用密钥白盒插件", src: "/product/secretKey" }
            ]
          }
        },
        {
          id: 2,
          name: "安全服务",
          link: "/service",
          child: {
            show: false,
            childContent: [
              {
                content: "移动应用安全咨询",
                src: "/service/securityConsulting"
              },
              { content: "移动应用安全渗透", src: "/service/percolationTest" }
            ]
          }
        },
        {
          id: 4,
          name: "关于我们",
          link: "/About",
          child: {
            show: false,
            childContent: [
              { content: "公司简介", src: "/about/companyIntroduce" },
              { content: "发展历程", src: "/about/devHistroy" }
            ]
          }
        },
        { id: 5, name: "联系我们", link: "/connect", child: null }
      ],

      currentIndex: 0,
      active: "",
      i: 0,
      showIndex: "",
      item_child_SelectIndex: -1,
      item_SelectIndex: -1,
      navigationBg: 0,
      getUseIndex: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true); //监听滚轮事件
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.i = scrollTop;
      if (scrollTop >= 40) {
        this.navigationBg = 1;
      } else {
        this.navigationBg = 0;
      }
    },
    showDropDown(index) {
      const child = this.navData[index].child;
      if (child) {
        child.show = true;
      }
    },
    hiddenDropDown(index) {
      const child = this.navData[index].child;
      if (child) {
        child.show = false;
      }
    },
    changeChildColor(index) {
      this.item_child_SelectIndex = index;
    },
    recoverChildColor() {
      this.item_child_SelectIndex = -1;
    },
    changeColor(index) {
      this.item_SelectIndex = index;
    },
    recoverColor() {
      this.item_SelectIndex = -1;
    },
    getUse() {
      this.getUseIndex = 1;
    },
    recovergetUse() {
      this.getUseIndex = 0;
    },
    jumpSecurityManagePlat() {
      window.open("https://www.manxi-inc.com/manxi-platform-web/", "_blank");
    }
  }
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.pullDownSpecial {
  width: 600px !important;
  flex-flow: wrap !important;
  flex-direction: row !important;
  text-align: left;
}
.pullDownSpecial a {
  display: inline-block;
  width: 30% !important;
}
.item_child_select {
  color: #6aa3ea !important;
}
.item_select {
  color: #6aa3ea !important;
  border-bottom: 2px solid white !important;
}
.headerspace {
  width: 100%;
  position: relative;
}
.navigation {
  position: absolute;
  z-index: 99;
  height: 84px;
  line-height: 84px;
  width: 100%;
  background: transparent;
  transition: background 0.3s ease;
}
.navigationContent {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
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
  width: 100%;
  position: absolute;
  padding: 0 10px;
  top: 84px;
  left: 0;
  z-index: 2;
  background: white;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1),
    0 0 12px rgba(215, 215, 215, 0.7);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
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
  margin-right: 5px;
  width: 100%;
  color: #333;
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
  transition: all 1s ease;
}
.navigationContentMiddle .select {
  border-bottom: 2px solid white;
}
.navigationContentMiddle li > a {
  color: inherit;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  border-bottom: 2px solid transparent;
}
.navigationContentRight span {
  color: white;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  background: transparent;
  transition: background 1.5s ease;
  cursor: pointer;
}
.navigationContentRight .securityManagePlat {
  border: 1px solid white;
}
.navigationContentRight .getUseSelect {
  background: #6aa3ea;
  border: 1px solid transparent;
  transition: all 1.5s ease;
}
</style>
