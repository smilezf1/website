<template>
  <div class="Banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="bg1"
        ><img src="../assets/banner1.gif"
      /></swiper-slide>
      <swiper-slide class="bg2"
        ><img src="../assets/banner2.png"
      /></swiper-slide>
      <swiper-slide class="bg3"
        ><img src="../assets/banner3.gif"
      /></swiper-slide>
      <swiper-slide class="bg4"
        ><img src="../assets/banner4.png"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        clickable: true,

        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log(this.swiper);
  }
};
</script>
<style>
.Banner,
.Banner .align-content a {
  color: white;
}
.Banner .swiper-slide {
  height:663px;
}
/* bg1 {
  background: linear-gradient(to right, #211b54, #1c207a);
}
.bg2 {
  background: linear-gradient(#0f092b, #1c092b);
}
.bg3 {
  background: linear-gradient(#17265d, #120a39);
}
.bg4 {
  background: linear-gradient(#012d48, #01081b);
} */
.Banner img {
  width:100%;
}
.swiper-pagination-bullet {
  background: #fff;
}
.swiper-pagination-bullet {
  width: 50px;
  height: 4.5px;
  background-color: rgba(190, 190, 190, 0.5);
  border-radius: 2px;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
