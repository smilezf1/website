<template>
  <div class="Banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="bg1">
        <!--  <div class="align-content">
          <h3><a href="javascript:;">让代码更安全,程序更有价值</a></h3>
        </div>
        <div class="align-content1"><img src="../assets/img1.png"></div> -->
      </swiper-slide>
      <swiper-slide class="bg2"></swiper-slide>
      <swiper-slide class="bg3"></swiper-slide>
      <swiper-slide class="bg4"></swiper-slide>
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
        autoplay:false
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
  height: 480px;
}
.bg1 {
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
}
.swiper-pagination-bullet {
  background: #fff;
}
</style>
