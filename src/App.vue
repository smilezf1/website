<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default {
  name: "App",
  provide() {
    //父组件通过provide来提供变量,在子组件中通过inject来注入变量
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true //控制试图是否显示的变量
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭
      this.$nextTick(() => {
        this.isRouterAlive = true; //再打开
      });
    }
  },
  watch: {
    $route(to, from) {
      //监听路由是否发生变化
      if (to.path) {
        //跳转到哪个页面都进行刷新
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
  height: 100%;
  min-width: 1900px;
  /* overflow-x: auto;
  overflow-y: auto; */
}
#app {
  height: 100%;
}
</style>
