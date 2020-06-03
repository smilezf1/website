<template>
  <div class="About">
    <headerSpace></headerSpace>
    <div class="About-top">
      <img src="../assets/about.png" style="width:100%" />
    </div>
    <div class="About-content">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/"
              ><img src="../assets/intro.png" /><span
                >公司简介</span
              ></router-link
            >
          </li>
          <li>
            <router-link to="/"
              ><img src="../assets/course.png" /><span
                >发展历程</span
              ></router-link
            >
          </li>
        </ul>
      </div>
      <!-- 公司简介-->
    </div>
  </div>
</template>
<script>
import headerSpace from "@/components/headerSpace.vue";
export default {
  name: "About",
  components: { headerSpace },
  data() {
    return {
      aboutList: [{ id: 1, title: "公司简介", imgSrc: "" }]
    };
  }
};
</script>
<style>
.About-content {
  width: 80%;
  margin: 20px auto;
}
.About-content .nav {
  width: 8%;
  border: 1px solid #ebebeb;
}
.About-content .nav ul {
  padding: 10px;
}
.About-content .nav li {
  margin: 10px 0;
  padding: 10px 0;
  text-align: center;
}
.About-content .nav :not(:last-child){
border-bottom:1px solid #ebebeb;
}
.About-content .nav a {
  color: #666;
  font-size: 11px;
}
.About-content .nav img {
  width: 18px;
  vertical-align: middle;
  margin-right:5px;
}
</style>
