<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
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
}
#app{
  height:100%;
}
</style>
