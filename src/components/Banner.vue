<template>
  <div class="Banner">
    <el-carousel trigger="click" height="700px">
      <el-carousel-item
        v-for="item in BannerList"
        :key="item.id"
        :style="{ 'background-image': 'url(' + item.imgSrc + ')' }"
        style="background-size:100% 700px"
      >
        <div class="BannerText">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      BannerList: [
        {
          id: 1,
          imgSrc: require("../assets/banner10.jpg"),
          title: "蛮犀科技,创建智慧安全生活",
          text: "建立APP数据全生命周期安全体系,为企业核心资产保驾护航"
        },
        {
          id: 2,
          imgSrc: require("../assets/banner12.jpg"),
          title: "蛮犀科技,构建智慧安全生活",
          text: "建立APP数据全生命周期安全体系,为企业核心资产保驾护航"
        },
        {
          id: 3,
          imgSrc: require("../assets/banner15.jpg"),
          title: "APP信息安全生态闭环",
          text: "事前预警 事中可防护 事后可追溯"
        },
        {
          id: 4,
          imgSrc: require("../assets/nav4.png"),
          title: "隐私合规专项检查 满足监管要求",
          text: ""
        }
      ]
    };
  }
};
</script>
<style>
.el-carousel__item {
  color: white;
}
.el-carousel__item h3 {
  font-size: 56px;
  font-weight: 700;
}
.el-carousel__item p {
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 35px;
}
.Banner .el-carousel__button {
  width: 80px;
  height: 3px;
  background: rgba(190, 190, 190, 0.5);
  border-radius: 2px;
}
.el-carousel__indicators .is-active .el-carousel__button {
  background: #fff;
}
.Banner .el-carousel__indicators--horizontal {
  bottom: 20px;
}
@keyframes slidein {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(0.5);
  }
  100% {
    transform: scaleX(1);
  }
}
.Banner {
  font-size: 0;
}
.BannerText {
  width: 1200px;
  margin: 0 auto;
}
.Banner .swiper-slide {
  height: auto;
}
.Banner {
  width: 100%;
}
.BannerText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 9999;
}
</style>
