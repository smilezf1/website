<template>
  <div class="Connect">
    <headerSpace></headerSpace>
    <div class="banner">
      <img src="../assets/connect.png" />
    </div>
    <!-- 联系地址 -->
    <div class="connectAddress">
      <p>公司地址</p>
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
            <span class="address"
              >上海市松江区沈砖公路5555号韵博智谷8709-8711</span
            >
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
      el.style.left = pixel.x - 155 + "px";
      el.style.top = pixel.y - 95 + "px";
    }
  }
};
</script>
<style>
.banner img {
  width: 100%;
}
.connectAddress,
.cooperation {
  font-weight: 400;
  margin: 20px;
  text-align: center;
}
.connectAddress p,
.cooperation p {
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size:22px;
}
.cooperation span {
  display: block;
  font-size: 11px;
  margin-bottom: 10px;
}
.connectAddress .address {
  font-size: 13px;
  margin-bottom: 10px;
}
#map {
  width: 50%;
  height: 400px;
  margin: 0 auto;
}
.sample {
  width:300px;
  height: 40px;
  line-height: 40px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 10px;
  color: #333;
  position: absolute;
}
.info {
  position: relative;
}
.info .address {
  font-size: 10px;
}
.info .triangle {
  display: inline-block;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid white;
  position: absolute;
  top: 100%;
  left: 50%;
  box-shadow:0 0 1px rgba(0, 0, 0,0.1);
}
</style>
