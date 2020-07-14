<template>
  <div>
    <h2>文字停顿滚动</h2>
    <div class="text-container">
      <transition class="inner-container2" name="slide" mode="out-in">
        <p class="text2" :key="text.id">{{ text.val }}</p>
      </transition>
    </div>
  </div>
</template>
<script>
const totalDuration = 2000;
export default {
  name: "demo11",
  props: [],
  data() {
    return {
      arr: [
        "1 不是被郭德纲发现的，也不是一开始就收为徒弟。",
        "2 现在雅阁这个状态像极了新A4L上市那段日子。",
        "3 低配太寒碜，各种需要加装，中配定价过高，又没啥特色",
        "4 然后各种机油门、经销商造反什么的幺蛾子。",
        "5 看五月销量，建议参考A4，打8折吧。",
        "1 不是被郭德纲发现的，也不是一开始就收为徒弟。"
      ],
      number: 0
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.arr[this.number]
      };
    }
  },
  mounted() {
    this.startMove();
  },
  methods: {
    startMove() {
      let timer = setTimeout(() => {
        if (this.number === 5) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, totalDuration);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 20px 0;
}
.text-container {
  width: 500px;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  overflow: hidden;
  border: 1px solid red;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
.slide-leave-to {
  transform: translateY(-20px);
}
.slide-enter {
  transform: translateY(20px);
}
</style>
