<template>
  <div class="devHistroy">
    <Headerspace></Headerspace>
    <!-- banner -->
    <div class="devHistroyBanner">
      <img src="../../assets/about.png" style="width:100%" />
    </div>
    <!-- 主体内容 -->
    <div class="devHistroyContainer">
      <!-- 发展历程 -->
      <div class="developmentHistory ">
        <h3 class="developmentHistoryTitle">发展历程</h3>
        <div class="developmentHistoryContent">
          <div id="c1" style="display:inline-block"></div>
        </div>
      </div>
    </div>
    <!-- 尾部内容 -->
  </div>
</template>
<script>
import Headerspace from "@/components/Headerspace.vue";
import Footerspace from "@/components/Footerspace.vue";
import { Chart } from "@antv/g2";
export default {
  name: "devHistroy",
  components: { Headerspace, Footerspace },
  data() {
    return {
      item: [
        { genre: "2019-09", sold: 275 },
        { genre: "2019-12", sold: 115 },
        { genre: "2020-02", sold: 120 },
        { genre: "2020-04", sold: 350 },
        { genre: "2020-06", sold: 150 }
      ]
    };
  },
  mounted() {
    const chart = new Chart({
      container: "c1",
      width: 600,
      height: 300,
      padding: [50, 20]
    });
    chart.scale("genre", {
      item: this.item
    });
    chart.scale("sold", {
      nice: true
    });
    chart.legend(false);
    chart.axis("sold", false);
    chart.line().position("genre*sold");
    chart
      .point()
      .position("genre*sold")
      .size("genre", val => {
        console.log(val);
        if (this.item.indexOf(val) >= 0) {
          return 3;
        }
        return 0;
      })
      .label("genre*sold", (genre, sold) => {
        if (this.item.indexOf(genre) >= 0) {
          return {
            content: sold,
            style: {
              fontWeight: 300
            }
          };
        }
        return null;
      })
      .style({ lineWidth: 2 });

    chart.annotation().line({
      top: true,
      start: ["2019-09", 115],
      end: ["2020-06", 275],
      style: {
        stroke: "#595959",
        lineWidth: 1,
        lineDash: [3, 3]
      },
      text: {
        position: "start",
        style: {
          fill: "#8c8c8c",
          fontSize: 12,
          fontWeight: 300
        },
        offsetY: -5
      }
    });
    chart.render();
  }
};
</script>
<style>
.developmentHistoryContent {
  text-align: center;
}
.developmentHistoryTitle {
  font-size: 22px;
  text-align: center;
  margin: 20px 0;
}
</style>
