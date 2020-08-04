<template>
  <div class="devHistroy">
    <!-- banner -->
    <div class="devHistroyBanner">
      <img src="../../assets/banner4.jpg" />
      <div class="devHistoryBannerContent">
        <h3>发展历程</h3>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="devHistroyContainer">
      <!-- 发展历程 -->
      <div class="developmentHistory ">
        <!-- <h3 class="developmentHistoryTitle">发展历程</h3> -->
        <div class="developmentHistoryContent history">
          <!-- 线条 -->
          <div class="line"></div>
          <ul class="item">
            <div class="left">
              <h3>2020年</h3>
              <span class="dot"></span>
            </div>
            <div class="right">
              <ul>
                <li>
                  <i></i>
                  <span>8月</span>
                  精彩待续......
                </li>
                <li>
                  <i></i>
                  <span>7月</span>
                  成功签约完美世界，助力游戏应用安全
                </li>
                <li>
                  <i></i>
                  <span>6月</span>
                  协助浙江省通管局App侵害用户权益专项整治工作
                </li>
                <li>
                  <i></i>
                  <span>5月</span>
                  携手山东网信办App侵害用户权益专项治理工作
                </li>
                <li></li>
                <li>
                  <i></i>
                  <span>5月</span>
                  支撑济南网安App个人信息安全检查工作
                </li>
                <li>
                  <i></i>
                  <span>4月</span>
                  成为工业互联网联盟、网络空间安全、信息安全等协会核心会员单位
                </li>
                <li>
                  <i></i>
                  <span>3月</span>
                  发布具备四道“防火墙”保护的移动应用安全加固平台 V5.0.0
                </li>
                <li>
                  <i></i>
                  <span>2月</span>
                  蛮犀安全移动应用评测系统落地山东网安
                </li>
              </ul>
            </div>
          </ul>
          <ul class="item">
            <div class="left">
              <h3>2019年</h3>
              <span class="dot"></span>
            </div>
            <div class="right">
              <ul>
                <li>
                  <i></i>
                  <span>12月</span>
                  发布首个具备暴力测试的安全评测系统 V5.0.0
                </li>
                <li>
                  <i></i>
                  <span>11月</span>
                  获得近千万种子轮投资
                </li>
                <li>
                  <i></i>
                  <span>10月</span>
                  蛮犀科技成立
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "devHistroy"
};
</script>
<style>
.developmentHistoryTitle {
  font-size: 34px;
  margin: 20px 0 40px 0;
  text-align: center;
  font-weight: normal;
  color: #3b3b3b;
}
.devHistroyBanner {
  position: relative;
}
.devHistroyBanner img {
  width: 100%;
  height: 700px;
}
.devHistoryBannerContent {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.devHistoryBannerContent h3 {
  font-size: 50px;
  font-weight: normal;
}
.developmentHistoryContent {
  margin: 20px 0;
}
.developmentHistoryContent .line {
  position: absolute;
  width: 1px;
  height: 100%;
  background: rgba(220, 222, 224, 1);
  left: 135px;
}
.developmentHistoryContent .item {
  position: relative;
  margin-bottom: 70px;
}
.developmentHistoryContent::after {
  content: "";
  display: block;
  clear: both;
}
.developmentHistoryContent .left {
  float: left;
}
.developmentHistoryContent .right {
  margin-left: 140px;
}
.developmentHistoryContent .right > ul {
  padding-left: 10px;
}
.developmentHistoryContent .right > ul > li {
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  margin: 30px 0;
}
.developmentHistoryContent .right ul > li span {
  color: #737373;
  font-size: 18px;
  margin: 0 20px;
}
.developmentHistoryContent .left h3 {
  font-size: 32px;
  color: rgba(51, 51, 51, 1);
  font-family: "Microsoft YaHei", "Arial", "Helvetica", "sans-serif";
}
.developmentHistoryContent .left .dot {
  width: 9px;
  height: 9px;
  border: 1px solid rgba(220, 222, 224, 1);
  border-radius: 50%;
  position: absolute;
  top: 0px;
  background: #fff;
  left: 130px;
}
.developmentHistoryContent .right > ul > li i {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: rgba(150, 155, 163, 1);
  border-radius: 50%;
  margin: 3px;
}
.developmentHistoryContentTitle > div {
  position: absolute;
  bottom: -2px;
  width: 50%;
}
.developmentHistoryContentTitle > div img {
  width: 100%;
}
.history {
  width: 800px;
  margin: 40px auto;
  position: relative;
}
.historyTitle {
  display: inline-block;
  position: relative;
  height: 73px;
  vertical-align: middle;
}
</style>
