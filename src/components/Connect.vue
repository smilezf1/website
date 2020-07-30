<template>
  <div class="Connect">
    <headerSpace></headerSpace>
    <div class="banner">
      <img src="../assets/y22.jpg" />
      <div class="bannerContent">
        <h3>联系我们</h3>
      </div>
    </div>
    <div class="connectBody">
      <!-- 联系方式 -->
      <div class="contactWay">
        <h1 class="contactWayTitle">
          联系方式
        </h1>
      </div>
      <div class="contactWayContent">
        <div class="contactWayContentTitle">
          <h3>商务合作</h3>
        </div>
        <div class="contactWayContentMainPart">
          <div class="box">
            <img src="../assets/call.png" />
            <div class="txt">
              <h3>电话</h3>
              <p>021-57677921</p>
            </div>
          </div>
          <div class="box">
            <img src="../assets/postbox.png" />
            <div class="txt">
              <h3>邮箱</h3>
              <p>service@manxi-safe.com</p>
            </div>
          </div>
          <div class="box">
            <img src="../assets/contact2.png" />
            <div class="txt">
              <h3>地址</h3>
              <p>上海市松江区沈砖公路5555号韵博智谷8709-8711</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 联系地址 -->
      <div class="connectAddress">
        <div class="connectAddressTitle">
          <h3>联系地址</h3>
        </div>
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
    </div>
    <!-- 底部 -->
    <footerSpace></footerSpace>
    <slideBar></slideBar>
  </div>
</template>
<script>
import headerSpace from "@/components/common/Headerspace.vue";
import footerSpace from "@/components/common/footerSpace.vue";
import slideBar from "@/components/common/slideBar.vue";
export default {
  name: "Connect",
  components: { headerSpace, footerSpace, slideBar },
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
    handler({ BMap, map }) {},
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
.banner {
  position: relative;
}
.bannerContent {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bannerContent h3 {
  font-size: 50px;
  color: white;
  font-weight: normal;
}
.banner img {
  width: 100%;
  height: 700px;
}
.connectBody {
  width: 1200px;
  margin: 0 auto;
}
.contactWayTitle {
  font-size: 36px;
  text-align: center;
  color: #3b3b3b;
  margin-top: 15px;
  font-weight: 500;
}
.contactWayContentTitle,
.connectAddressTitle {
  position: relative;
  margin-top: 20px;
}
.connectAddressTitle {
  margin-top: 40px;
}
.contactWayContentTitle h3,
.connectAddressTitle h3 {
  color: #121212;
  font-size: 30px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
  margin-top: 20px;
  font-weight: normal;
}
.contactWayContentTitle .box,
.connectAddressTitle .box {
  position: absolute;
  bottom: -2px;
  width: 50%;
}
.contactWayContentTitle .box img,
.connectAddressTitle .box img {
  width: 100%;
}
.contactWayContentMainPart {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
.contactWayContentMainPart .box {
  display: flex;
  align-items: center;
}
.contactWayContentMainPart .box h3 {
  color: #3b3b3b;
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 10px;
}
.contactWayContentMainPart .box span {
  font-size: 16px;
  margin-top: 10px;
}
.contactWayContentMainPart .txt p {
  font-size: 16px;
  color: #666;
}
.contactWayContentMainPart img {
  width: 70px;
  padding: 20px;
}
.connectAddress,
.cooperation {
  font-weight: 400;
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
.Connect .info {
  padding: 0 10px;
}
.Connect .info .address {
  margin-bottom: 10px;
}
.Connect .info .address,
.Connect.info .companyName,
.Connect.info .phone {
  font-size: 13px;
}
#map {
  width: 100%;
  height: 400px;
  margin: 100px auto;
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
.conn.info {
  position: relative;
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
