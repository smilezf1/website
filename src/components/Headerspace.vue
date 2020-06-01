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
            <a href="javascript:;">{{ item.name }}</a>
          </li>
        </ul>
        <ul class="navigationContentRight">
          <li>
            <a href="javascript:;" @mouseover="changeBgColor()" @mouseout="removeBgColor()" :style="active"
              >获取使用</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- 导航结束 -->
  </div>
</template>
<script>
export default {
  name: "Headerspace",
  data() {
    return {
      theme1: "light",
      navData: [
        { id: 1, name: "安全产品" },
        { id: 2, name: "安全服务" },
        { id: 3, name: "解决方案" },
        { id: 4, name: "关于我们" },
        { id: 5, name: "联系我们" }
      ],
      currentIndex: -1,
      active: ""
    };
  },
  methods: {
    changeColor: function(index) {
      this.currentIndex = index;
    },
    regainColor: function() {
      this.currentIndex = -1;
    },
    changeBgColor() {
      this.active = "background-color:#2a62ff; border:1px solid transparent;transition: background-color 0.5s";
    },
    removeBgColor(){
        this.active=""
    }
  }
};
</script>
<style>
.navigation {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 64px;
  background: rgba(0, 0, 0, 0.2);
}

.navigationContent {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.navigationContentLeft {
  height: 100%;
}
.navigationContentLeft img {
  width: 150px;
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
  padding: 0 30px;
  line-height: 64px;
  border-bottom: 3px solid transparent;
}
.navigationContentMiddle .select {
  color: #00b7fa;
  border-bottom: 3px solid #00b7fa;
  transition: border-bottom 1s;
}

.navigationContentMiddle li a {
  color: inherit;
  font-weight: 400;
  font-size: 12px;
  box-sizing: border-box;
}
.navigationContentRight a {
  color: white;
  font-size: 12px;
  padding: 6px 10px;
  border: 1px solid white;
}
.navigationContentRight {
  margin-left: 20px;
}
</style>
