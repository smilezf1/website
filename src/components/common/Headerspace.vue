<template>
  <div class="headerspace">
    <!-- 导航开始 -->
    <transition name="slide-fade">
      <div class="navigation" :class="{ minNavigation: navigationBg == 1 }">
        <div class="navigationContent">
          <!-- 导航左部分 -->
          <div class="navigationContentLeft">
            <img src="../../assets/logo3.png" />
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
              >
                {{ item.name }}
                <transition name="slide-fade">
                  <div
                    class="pullDown"
                    v-if="item.child"
                    v-show="item.child.show"
                    :class="{ pullDownSpecial: index == 1 }"
                  >
                    <div class="pullDownContent">
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
                      >
                        {{ item_child.content }}
                      </router-link>
                    </div>
                  </div>
                </transition>
              </router-link>
            </li>
          </ul>
          <!-- 导航右边 -->
          <ul class="navigationContentRight">
            <li>
              <router-link
                to="/Gain"
                :class="{ getUseSelect: getUseIndex == 1 }"
                @mouseover.native="getUse()"
                @mouseout.native="recovergetUse()"
                >获取使用</router-link
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
import $ from "jquery";
export default {
  name: "headerSpace",
  data() {
    return {
      navData: [
        { id: 0, name: "首页", link: "/", child: null },
        {
          id: 1,
          name: "安全产品",
          link: "/Product",
          child: {
            show: false,
            childContent: [
              /*  { content: "移动应用安全评测", src: "/Product/safetyEvaluation" }, */
              { content: "移动应用评测系统", src: "/Product/Evaluating" }, //1
              {
                content: "移动应用合规评测系统",
                src: "/Product/ComplianceEvaluating"
              }, //1
              /*   { content: "移动应用安全防护", src: "/Product/safetyProtection" }, */
              { content: "移动应用加固系统", src: "/Product/Reinforce" }, //1
              { content: "移动应用源码加固编译器", src: "/Product/Code" }, //1
              { content: "移动应用源码虚拟化编译器", src: "/Product/Virtual" }, //1
              /*  { content: "移动应用安全业务", src: "/Product/Insurance" }, */
              { content: "移动应用秘钥白盒插件", src: "/Product/SecretKey" } //1
              /*   {
                content: "移动应用环境自查插件",
                src: "/Product/SelfInspection"
              },
              { content: "移动应用数据加密插件", src: "/Product/Encryption" } */
            ]
          }
        },
        {
          id: 2,
          name: "安全服务",
          link: "/Service",
          child: {
            show: false,
            childContent: [
              {
                content: "移动应用安全咨询",
                src: "/Service/securityConsulting"
              },
              { content: "移动应用安全渗透", src: "/Service/percolationTest" }
            ]
          }
        },
        /*  { id: 3, name: "解决方案", link: "/Project", child: null }, */
        {
          id: 4,
          name: "关于我们",
          link: "/About",
          child: {
            show: false,
            childContent: [
              { content: "公司简介", src: "/About/companyIntroduce" },
              { content: "发展历程", src: "/About/devHistroy" }
            ]
          }
        },
        { id: 5, name: "联系我们", link: "/Connect", child: null }
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
    //解决Vue路由跳转到新页面时,默认不在最顶部
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  },
  methods: {
    handleScroll() {
      let scrollTop =
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
      let child = this.navData[index].child;
      if (child) {
        child.show = true;
      }
    },
    hiddenDropDown(index) {
      let child = this.navData[index].child;
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
  transform: translateY(20px);
  opacity: 0;
}
.item_child_select {
  color: #6aa3ea !important;
}
.item_select {
  /*  color: #6aa3ea !important; */
  border-bottom: 2px solid white !important;
}
.headerspace {
  width: 100%;
  height: 84px;
  z-index: 2;
  min-width: 1900px;
  position: absolute;
  left: 0;
  top: 0;
}
.navigation {
  height: 84px;
  line-height: 84px;
  width: 100%;
  background: transparent;
  transition: background 0.3s ease;
}
.minNavigation {
  background: #1a1c24;
  /*  background: rgba(0, 0, 0, 0.7); */
  /* background: #6aa3ea; */
  transition: background 0.3s ease;
}
.navigationContent {
  width: 1200px;
  max-width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
}
.navigationContentLeft {
  width: 130px;
  height: 84px;
  position: relative;
}
.navigationContentLeft img {
  width: 130px;
  position: absolute;
  top: -25px;
}
.navigationContentMiddle,
.navigationContentRight {
  display: flex;
  height: 100%;
}
.navigationContentMiddle li .pullDown {
  position: absolute;
  padding: 0 20px;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  /* background-color: #272b2e; */
  background: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: absolute;
  width: 1200px;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  /*  background: url("../../assets/dropdown_bg.png") repeat; */
  /*  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.15s ease-out;  */
}
.pullDownSpecial {
  padding: 20px;
  flex-flow: wrap !important;
  flex-direction: row !important;
  text-align: left;
  max-height: 500px;
}
.pullDownSpecial a {
  display: inline-block;
  width: 30% !important;
  padding-right: 20px;
}
.navigationContentMiddle .pullDownContent {
  width: 1200px;
  margin: 0 auto;
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
  line-height: 64px;
  font-size: 13px;
  margin-right: 5px;
  width: 100%;
  color: #383838;
  white-space: nowrap;
}
.navigationContentMiddle li .dropDownActive {
  max-height: 456px;
  transition: max-height 0.5s ease;
}
.navigationContentMiddle > li {
  color: #fff;
  margin: 0px 40px;
}
.navigationContentMiddle > li > a {
  margin: 0 20px;
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
  font-size: 18px;
  box-sizing: border-box;
  width: 100%;
  /*   position: relative; */
  border-bottom: 2px solid transparent;
  text-align: center;
}
.navigationContentRight a {
  display: inline-block;
  line-height: 40px;
  width: 95px;
  text-align: center;
  color: white;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 5px;
  /*  font-family: "黑体"; */
  background: transparent;
  transition: background 1.5s ease;
  padding: 0 10px;
  box-sizing: border-box;
}
.navigationContentRight .getUseSelect {
  background: #6aa3ea;
  border: none;
  transition: all 1.5s ease;
}
.navigationContentRight {
  margin-left: 20px;
}
</style>
