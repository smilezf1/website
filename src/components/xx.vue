<template>
  <div class="xx">
    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "xx",
  data() {
    return {
      show: true
    };
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 100%;
}
</style>
