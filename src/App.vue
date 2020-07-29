<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default {
  name: "App",
  provide() {
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
  height: 100%;
  min-width: 1900px;
  /* overflow-x: auto;
  overflow-y: auto; */
}
#app {
  height: 100%;
}
</style>
