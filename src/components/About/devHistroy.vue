<template>
  <div class="devHistroy">
    <!-- banner -->
    <div class="devHistroyBanner">
      <img src="../../assets/develop.jpg" style="width:100%;height:400px;" />
    </div>
    <!-- 主体内容 -->
    <div class="devHistroyContainer">
      <!-- 发展历程 -->
      <div class="developmentHistory ">
        <h3 class="developmentHistoryTitle">发展历程</h3>
        <div class="developmentHistoryContent history">
          <!-- 发展历程头部 -->
          <h3 class="historyTitle">
            <img
              class="
arrows"
              src="../../assets/history_bg_icon.png"
            />
            <span class="historyYear">2020年</span>
            <img class="historyLine" src="../../assets/left_blue.png" />
            <span class="historyBtn"></span>
          </h3>
          <!-- 发展历程主体部分 -->
          <div class="historyBox">
            <div class="year">
              <div class="yearLeft">
                <span class="historyTime">2020-06</span>
              </div>
              <div class="yearMiddle">
                <img class="historyLine" src="../../assets/right_blue.png" />
                <img
                  class="historySBtn"
                  src="../../assets/circle_gray_small.png"
                />
              </div>
              <div class="yearRight">
                <span class="historyContent">精彩待续</span>
              </div>
            </div>
            <div class="year">
              <div class="yearLeft">
                <span class="historyTime">2020-04</span>
              </div>
              <div class="yearMiddle">
                <img class="historyLine" src="../../assets/right_blue.png" />
                <img
                  class="historySBtn"
                  src="../../assets/circle_gray_small.png"
                />
              </div>
              <div class="yearRight">
                <span class="historyContent">CRCC</span>
              </div>
            </div>
            <div class="year">
              <div class="yearLeft">
                <span class="historyTime">2020-02</span>
              </div>
              <div class="yearMiddle">
                <img class="historyLine" src="../../assets/right_blue.png" />
                <img
                  class="historySBtn"
                  src="../../assets/circle_gray_small.png"
                />
              </div>
              <div class="yearRight">
                <span class="historyContent">CRCC</span>
              </div>
            </div>
            <h3 class="historyTitle">
              <span class="historyYear">2019年</span>
              <img
                class="historyLine"
                src="../../assets/left_blue.png"
                style="margin-left:0px"
              />
              <span class="historyBtn"></span>
            </h3>
            <div class="year">
              <div class="yearLeft">
                <span class="historyTime">2019-12</span>
              </div>
              <div class="yearMiddle">
                <img class="historyLine" src="../../assets/right_blue.png" />
                <img
                  class="historySBtn"
                  src="../../assets/circle_gray_small.png"
                />
              </div>
              <div class="yearRight">
                <span class="historyContent">CRCC</span>
              </div>
            </div>
            <div class="year">
              <div class="yearLeft">
                <span class="historyTime">2019-10</span>
              </div>
              <div class="yearMiddle">
                <img class="historyLine" src="../../assets/right_blue.png" />
                <img
                  class="historySBtn"
                  src="../../assets/circle_gray_small.png"
                />
              </div>
              <div class="yearRight">
                <span class="historyContent">CRCC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "devHistroy",
};
</script>
<style>
.developmentHistoryTitle {
  font-size: 34px;
  margin: 20px 0 40px 0;
  text-align: center;
  font-weight:normal;
}
.history {
  width: 16%;
  margin: 0 auto;
}
.historyTitle {
  display: inline-block;
  position: relative;
  height: 73px;
  vertical-align: middle;
}
.historyTitle .arrows {
  position: absolute;
  top: -17px;
  right: -2px;
}
.historyYear {
  background: #2276da;
  font-size: 24px;
  color: #fff;
  font-weight: normal;
  padding: 0px 10px;
  float: left;
  margin: 20px 5px 0 0px;
}
.historyBtn {
  width: 20px;
  height: 20px;
  display: block;
  background: url("../../assets/circle_gray_big.png") center center;
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translateY(-50%);
}
.historyContent {
  font-size: 16px;
  color: #262626;
  font-weight: normal;
  margin-left: 40px;
}
.historyTime {
  color: #666;
  font-size: 18px;
  display: inline-block;
  width: 102px;
}
.historyBox {
  height: 600px;
}
.historyBox .year {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.historyBox .yearMiddle {
  position: relative;
}
.historyBox .yearMiddle .historySBtn {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
}
.historyBox .historyLine {
  margin-left: 50px;
}
</style>
