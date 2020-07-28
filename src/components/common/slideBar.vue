<template>
  <div class="slideBar" v-show="showSlideBar">
    <div class="slideBarContent">
      <router-link
        to="/"
        v-for="(item, index) in listItem"
        :key="item.id"
        @mouseover.native="revealToolTip(index)"
        @mouseout.native="hideToolTip(index)"
        @click.native="backTop(index)"
      >
        <img :src="item.imgSrc" />
        <span>{{ item.name }}</span>
        <template v-if="item.name !== '顶部'">
          <transition name="slide-fade">
            <p class="tooltip" v-show="item.showToolTip">
              <span v-if="item.data">{{ item.data }}</span>
              <span class="triangle"></span>
            </p>
          </transition>
        </template>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "slideBar",
  data() {
    return {
      listItem: [
        {
          id: 1,
          name: "电话",
          imgSrc: require("../../assets/phone.png"),
          data: "021-57677921",
          showToolTip: false
        },
        {
          id: 2,
          name: "邮箱",
          imgSrc: require("../../assets/email.png"),
          data: "service@manxi-safe.com",
          showToolTip: false
        },
        {
          id: 3,
          name: "顶部",
          imgSrc: require("../../assets/backtothetop.svg")
        }
      ],
      showSlideBar: false,
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollBackTop, true); //监听滚动条
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollBackTop); //移除滚动条监听
  },
  methods: {
    backTop(index) {
      if (index === 2) {
        const that = this;
        let timer = setInterval(() => {
          let speed = Math.floor(-that.scrollTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop =
            that.scrollTop + speed;
          console.log(document.documentElement.scrollTop);
          if (that.scrollTop === 0) {
            clearInterval(timer);
          }
        }, 20);
      }
    },
    //计算距离顶部的高度
    scrollBackTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      console.log(scrollTop);
      if (scrollTop > 150) {
        that.showSlideBar = true;
      } else {
        that.showSlideBar = false;
      }
    },
    revealToolTip(index) {
      this.listItem[index].showToolTip = true;
    },
    hideToolTip(index) {
      this.listItem[index].showToolTip = false;
    }
  }
};
</script>
<style>
.slideBar {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.slideBarContent {
  width: 40px;
  height: 100px;
  position: relative;
}
.slideBarContent a {
  display: inline-block;
  width: 70px;
  height: 70px;
  background: #00b7fa;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}
.slideBarContent a img {
  width: 25px;
}
.slideBarContent a span {
  font-size: 14px;
  margin-top: 5px;
  white-space: nowrap;
}
.slideBarContent a p {
  position: absolute;
  padding: 10px;
  right: 120%;
  box-shadow: 0 0 10px #00000045;
  color: #333;
  z-index: 99;
  background: white;
}
.slideBarContent a p .triangle {
  position: absolute;
  left: 100%;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left-color: white;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
</style>
