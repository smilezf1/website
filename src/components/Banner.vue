<template>
  <div class="Banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="bg1"
        ><img src="../assets/slideshow1.png"
      /></swiper-slide>
      <swiper-slide class="bg2"
        ><img src="../assets/slideshow4.png"
      /></swiper-slide>
      <swiper-slide class="bg3"
        ><img src="../assets/slideshow5.png"
      /></swiper-slide>
      <swiper-slide class="bg4"
        ><img src="../assets/banner5.png"
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
.Banner .swiper-slide {
  height: auto;
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
.Banner {
  width: 100%;
}
.Banner img {
  width: 100%;
  height: 500px;
}
.swiper-pagination-bullet {
  width: 80px !important;
  height: 4px !important ;
  background: rgba(190, 190, 190, 0.5) !important;
  border-radius: 2px !important;
}
.swiper-pagination-bullet-active {
  background: #fff !important;
  /* animation: 6s linear 1s slidein; */
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 40px !important;
}
</style>
