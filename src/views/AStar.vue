<template>
  <div class="map">
    <div class="row" v-for="(row, index1) in state.mapArr" :key="index1">
      <div
        class="block"
        :class="{ obstacle: block === '2' }"
        v-for="(block, index2) in row"
        :key="index2"
      >
        {{ block }}
      </div>
    </div>
  </div>
  <n-space>
    <n-button type="primary" @click="generate"> 生成 </n-button>
  </n-space>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { initData } from "@/types/AStar";
import { NButton, NSpace } from "naive-ui";

const state = reactive(new initData());

//重置map
function resetMap() {
  for (let i = 0; i < state.rowCount; i++) {
    state.mapArr[i] = [];
    for (let j = 0; j < state.colCount; j++) {
      state.mapArr[i][j] = "1";
    }
  }
}
resetMap();
const generate = () => {
  //先重置map
  resetMap();
  for (let i = 0; i < state.obstacleCount; i++) {
    let x = Math.round(Math.random() * (state.rowCount - 1));
    let y = Math.round(Math.random() * (state.colCount - 1));
    while (state.mapArr[x][y] === "2") {
      x = Math.round(Math.random() * (state.rowCount - 1));
      y = Math.round(Math.random() * (state.colCount - 1));
    }

    state.mapArr[x][y] = "2";
  }
};

onMounted(() => {
  generate();
});
</script>

<style scoped lang="scss">
.map {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  .row {
    display: flex;
  }
}
.block {
  width: 40px;
  height: 40px;
  border: 1px solid #999;
  &.obstacle {
    background-color: #000;
    color: #fff;
  }
}
</style>
