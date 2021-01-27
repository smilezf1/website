<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
import articleApi from "../src/components/request/api/article";
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
      articleListItem: this.articleListItem
    };
  },
  data() {
    return {
      isRouterAlive: true,
      articleListItem: null
    };
  },
  created() {
    //页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //页面刷新时将vuex里的信息存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  },
  watch: {
    $route(to, from) {
      if (to.path) {
        this.reload();
      }
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}
html,
body {
  /* height: 100%; 导致scrollTop一直为0 */
  max-height: 100%;
  min-width: 1240px;
}
#app {
  height: 100%;
  overflow-y: auto;
}
</style>
