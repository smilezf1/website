<template>
  <div class="Connect">
    <headerSpace></headerSpace>
    <div class="banner">
      <img src="../assets/connect.png" />
    </div>
    <!-- 联系地址 -->
    <div class="connectAddress">
      <p>联系地址</p>
      <div class="address">上海市松江区沈砖公路5555号韵博智谷8709-8711</div>
      <baidu-map
        :center="center"
        :zoom="25"
        @click="getPoint"
        class="map"
        id="map"
      >
        <bm-view id="mapContent" />
      </baidu-map>
    </div>
    <!-- 商务合作 -->
    <div class="cooperation">
      <p>商务合作</p>
      <span>联系电话:021-61730101</span>
      <span>市场合作:marketing@@manxi-safe.com</span>
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
      temp: {
        address: "",
        lat: "",
        lng: ""
      },
      center: {
        lng: 121.258716,
        lat: 31.097119
      },
      location: "厦门市",
      keyword: "" // 地图搜索关键字
    };
  },
  mounted() {},

  methods: {
    getPoint(e) {
      this.temp.lng = e.point.lng;
      this.temp.lat = e.point.lat;
      const geocoder = new BMap.Geocoder();
      geocoder.getLocation(e.point, rs => {
        this.temp.address = rs.address;
      });
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
}
.connectAddress p,
.cooperation p {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  font-size: 18px;
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
#mapContent {
  width:80%;
  height: 250px;
}
</style>
