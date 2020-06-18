<template>
  <div class="footerSpace">
    <div class="container">
      <ul class="left">
        <li v-for="(item, index) in menuList" :key="index">
          <router-link to="/">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="right">
        <div class="rightContent">
          <div>关注我们</div>
          <div><img src="../assets/code.jpg" /></div>
        </div>
      </div>
    </div>
    <div class="bottom">上海蛮犀科技有限公司 版权所有 ©2019-2020 泸ICP</div>
  </div>
</template>
<script>
export default {
  name: "footerSpace",
  data() {
    return {
      menuList: [
        { id: 1, name: "上海蛮犀科技有限公司" },
        { id: 2, name: "联系电话:021-57677921" },
        { id: 3, name: "联系邮箱:service@manxi-safe.com" },
        {
          id: 4,
          name: "市场合作:marketing@manxi-safe.com"
        },
        { id: 5, name: "公司地址:上海市松江区沈砖公路5555号韵博智谷" }
      ]
    };
  }
};
</script>
<style>
.footerSpace {
  background: #2d2c2e;
  color: white;
  padding: 30px;
}
.footerSpace .container {
  min-width: 600px;
  width: 600px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  padding: 20px 0;
  display: flex;
}
.footerSpace .container li {
  margin: 20px 0;
}
.footerSpace .container .left {
  border-right: 0.5px solid #666;
  padding-right: 30px;
  margin-right: 30px;
}
.footerSpace .container .left a {
  color: white;
}
.footerSpace .container .left .select {
  color: white;
}
.footerSpace .right {
  text-align: center;
  position: relative;
}
.footerSpace .rightContent {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
}
.footerSpace .right img {
  width: 150px;
  margin-top: 10px;
}
.footerSpace .bottom {
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: white;
}
</style>
