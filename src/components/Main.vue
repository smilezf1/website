<template>
  <div class="main">
    <div class="securityProduct">
      <div class="securiptProductTop">
        <div class="securipTproductTopLeft">
          <span>蛮犀资讯 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;《工业和信息部337号令》解读</span>
        </div>
        <div class="securipTproductTopRight">
          <a href="javascript" class="more">更多>></a>
        </div>
      </div>
      <div class="securiptProductContainer">
        <h3>安全产品</h3>
    
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main"
};
</script>
<style>
.securipTproductTopLeft {
  float: left;
}
.securipTproductTopRight {
  float: right;
}
.securiptProductTop:after {
  content: "";
  display: block;
  clear: both;
}
.securiptProductTop {
  margin-top: 10px;
  padding: 10px;
  font-size: 10px;
  background: #f8f8f8;
  color: #333;
}
.securipTproductTopRight .more {
  color: #333;
}
.securiptProductContainer h3{
  font-size:20px;
  color:#333;
  text-align:center;
  margin-top:5px;
  font-weight:500;
}
.main{
  height:1000px;
}
</style>
