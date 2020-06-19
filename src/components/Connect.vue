<template>
  <div class="Connect">
    <headerSpace></headerSpace>
    <div class="banner">
      <img src="../assets/connect.jpg" style="height:500px" />
    </div>
    <!-- 联系地址 -->
    <div class="connectAddress">
      <p class="title">公司地址</p>
      <baidu-map
        :center="center"
        :zoom="25"
        id="map"
        ak="er1y12cHwwo0MvygGKGizpduaN4qjkhs"
        @ready="handler"
      >
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-marker
          :position="center"
          :dragging="true"
          animation="BMAP_ANIMATION_BOUNCE"
        >
        </bm-marker>
        <bm-overlay
          pane="labelPane"
          :class="{ sample: true, active }"
          @draw="draw"
        >
          <div class="info">
            <p class="address">
              上海市松江区沈砖公路5555号韵博智谷8709-8711
            </p>
            <span class="triangle"></span>
          </div>
        </bm-overlay>
      </baidu-map>
    </div>
    <!-- 底部 -->
    <footerSpace></footerSpace>
  </div>
</template>
<script>
import headerSpace from "@/components/headerSpace.vue";
import footerSpace from "@/components/footerSpace.vue";
export default {
  name: "Connect",
  components: { headerSpace, footerSpace },
  data() {
    return {
      center: {
        lng: 121.258716,
        lat: 31.097119
      },
      active: false
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(map);
    },
    draw({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(
        new BMap.Point(121.258716, 31.097119)
      );
      el.style.left = pixel.x - 170 + "px";
      el.style.top = pixel.y - 100 + "px";
    }
  }
};
</script>
<style>
.banner img {
  width: 100%;
  height: 400px;
}
/* test */
.connectAddress {
  height: 700px;
}
.connectAddress,
.cooperation {
  font-weight: 400;
  margin: 20px;
  text-align: center;
}
.connectAddress > p {
  margin: 20px 0;
}
.companyDetails {
  width: 40%;
  margin: 0 auto;
}
.companyDetails p {
  text-align: left;
  margin: 10px 0;
}
.connectAddress .title,
.cooperation .title {
  font-size: 34px;
}
.cooperation span {
  display: block;
  font-size: 11px;
  margin-bottom: 10px;
}
.info {
  padding: 0 10px;
}
.info .address {
  margin-bottom: 10px;
}
.info .address,
.info .companyName,
.info .phone {
  font-size: 13px;
}
#map {
  width: 40%;
  height: 400px;
  margin: 130px auto;
}
.sample {
  width: 320px;
  line-height: 40px;
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  font-size: 10px;
  color: #333;
  position: absolute;
  box-sizing: border-box;
}
.info {
  position: relative;
  /* border: 1px solid #ababab; */
  box-shadow: 0 0 10px #0000003b;
}
.info .address {
  font-size: 13px;
}
.info .triangle {
  display: inline-block;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top: 10px solid white;
  position: absolute;
  top: 100%;
  left: 50%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}
</style>
