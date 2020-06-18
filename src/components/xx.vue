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
          <li
            v-for="(item, index) in navData"
            :key="index"
            @mouseover="showDropDown(index)"
            @mouseout="hiddenDropDown(index)"
          >
            <router-link :to="item.link">
              {{ item.name }}
              <div
                class="pullDown"
                v-if="item.child"
                v-show="item.child.show"
                :class="{ xx: index == 1 }"
              >
                <router-link
                  v-for="(item_child, item_child_index) in item.child
                    .childContent"
                  :key="item_child_index"
                  :to="item_child.src"
                  @mouseover.native="changeColor(item_child_index)"
                  :class="{
                    item_child_select:
                      item_child_SelectIndex == item_child_index
                  }"
                  >{{ item_child.content }}</router-link
                >
              </div>
            </router-link>
          </li>
        </ul>
        <!-- 导航右边 -->
        <ul class="navigationContentRight">
          <li>
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
        { id: 0, name: "首页", link: "/", child: null },
        {
          id: 1,
          name: "安全产品",
          link: "/Product",
          child: {
            show: true,
            childContent: [
              { content: "移动应用安全评测", src: "/Product/safetyEvaluation" },
              { content: "移动应用评测系统", src: "/Product/Evaluating" },
              {
                content: "移动应用合规评测系统",
                src: "/Product/ComplianceEvaluating"
              },
              { content: "移动应用安全防护", src: "/Product/safetyProtection" },
              { content: "移动应用加固系统", sr: "/Product/Reinforce" },
              { content: "移动应用源码加固编译器", src: "/Product/Code" },
              { content: "移动应用源码虚拟化编译器", src: "/Product/Virtual" },
              { content: "移动应用安全业务", src: "/Product/safetyService" },
              { content: "移动应用秘钥白盒插件", src: "/Product/SecretKey" },
              {
                content: "移动应用环境自查插件",
                src: "/Product/SelfInspection"
              },
              { content: "移动应用数据加密插件", src: "/Product/Encryption" }
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
        { id: 3, name: "解决方案", link: "/Project", child: null },
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
      item_child_SelectIndex: -1
    };
  },
  methods: {
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
    changeColor(index) {
      this.item_child_SelectIndex = index;
      console.log(index);
    }
  }
};
</script>
<style>
.xx {
  width: 600px;
  flex-flow:wrap !important;
  flex-direction:row !important;
}
.xx a {
  display: inline-block;
  width: 30% !important;
}
.item_child_select {
  color: #6aa3ea;
}
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
  background: #282d3a;
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
  flex-direction: column;
  flex-wrap: nowrap;
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
.navigationContentMiddle li > a {
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
