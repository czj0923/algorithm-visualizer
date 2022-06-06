<template>
  <n-grid cols="1 s:3 m:4 l:5 xl:6" responsive="screen" x-gap="10" y-gap="10">
    <n-grid-item v-for="item in state.cardArr" :key="item.name">
      <div class="card" :style="bgColor()" @click="goTo(item.link)">
        <p class="name">{{ item.name }}</p>
        <p class="desc">{{ item.desc }}</p>
        <div class="more">
          <span>前往</span><img src="@/assets/images/right-arrow.png" />
        </div>
      </div>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
import router from "@/router";
import { reactive } from "vue";
import { randomRgbColor } from "@/utils";
const state = reactive({
  cardArr: [
    {
      name: "深度优先搜索(DFS)",
      desc: "深度优先搜索",
      img: "",
      link: "pathfinding",
    },
    {
      name: "广度优先搜索(BFS)",
      desc: "广度优先搜索",
      img: "",
      link: "pathfinding",
    },
    {
      name: "冒泡排序",
      desc: "冒泡排序",
      img: "",
      link: "bubble",
    },
    {
      name: "选择排序",
      desc: "选择排序",
      img: "",
      link: "selection",
    },
    {
      name: "插入排序",
      desc: "插入排序",
      img: "",
      link: "insertion",
    },
    {
      name: "计数排序",
      desc: "计数排序",
      img: "",
      link: "counting",
    },
  ],
});

//生成随机渐变色
const bgColor = (): { background: string } => {
  const rgb1 = randomRgbColor();
  const rgb2 = randomRgbColor();

  return { background: `linear-gradient(to bottom right,${rgb1}, ${rgb2})` };
};

//前往详情
const goTo = (link: string) => {
  router.push({ name: link });
};
</script>
<style scoped lang="scss">
.card {
  padding: 20px;
  color: #fff;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease;
  height: 260px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
    .more img {
      margin-left: 16px;
    }
  }
  .name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .desc {
    line-height: 27px;
  }
  .more {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    align-items: center;

    img {
      margin-left: 6px;
      transition: all 0.2s linear;
      width: 24px;
      height: 12px;
    }
  }
}
</style>
