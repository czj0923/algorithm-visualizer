<template>
  <div class="map">
    <div
      class="row"
      :style="{
        height: 600 / state.rowCount + 'px',
      }"
      v-for="(row, index1) in state.mapArr"
      :key="index1"
    >
      <div
        class="block"
        :class="{ obstacle: block === '2' }"
        :style="{
          width: 600 / state.colCount + 'px',
          backgroundColor: state.roadArr[index1][index2] ? '#0f0' : '',
        }"
        v-for="(block, index2) in row"
        :key="index2"
      >
        {{ block === "99" ? "〇" : block === "100" ? "☆" : "" }}
      </div>
    </div>
  </div>
  <n-space>
    <n-button type="primary" @click="generate"> 重新生成 </n-button>
  </n-space>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { initData, nodeType } from "@/types/AStar";
import { NButton, NSpace } from "naive-ui";
import { Stack } from "@/utils/stack";
import { Queue } from "@/utils/queue";

const state = reactive(new initData());

//利用队列来实现bfs
const queue = new Queue();
//存放路径  将二维数组地图映射成为一维数组 对应一维数组下标:colCount*x+y
const comeRoute = new Array(state.rowCount * state.colCount);

//重置map 和hasSearchArr
function resetMap(): void {
  for (let i = 0; i < state.rowCount; i++) {
    state.mapArr[i] = [];
    state.hasSearchArr[i] = [];
    state.roadArr[i] = [];
    for (let j = 0; j < state.colCount; j++) {
      state.mapArr[i][j] = "1";
      state.hasSearchArr[i][j] = false;
      state.roadArr[i][j] = false;
    }
  }
}

//生成随机坐标
function getRandom(): nodeType {
  return [
    Math.round(Math.random() * (state.rowCount - 1)),
    Math.round(Math.random() * (state.colCount - 1)),
  ];
}

//可以前往的坐标
function getInnerPos(x: number, y: number): nodeType[] {
  let aroundPos: Array<nodeType> = [
    [x, y - 1],
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
  ];
  return aroundPos.filter((arr) => {
    return (
      arr[0] >= 0 &&
      arr[0] < state.rowCount &&
      arr[1] >= 0 &&
      arr[1] < state.colCount &&
      state.mapArr[arr[0]][arr[1]] !== "2" &&
      !state.hasSearchArr[arr[0]][arr[1]]
    );
  });
}

const generate = () => {
  //先重置map
  resetMap();
  //生成障碍物
  for (let i = 0; i < state.obstacleCount; i++) {
    let [x, y] = getRandom();
    while (state.mapArr[x][y] === "2") {
      [x, y] = getRandom();
    }

    state.mapArr[x][y] = "2";
  }
  //生成入口
  for (let i = 0; i < state.colCount; i++) {
    //不是障碍物就设置为入口
    if (!(state.mapArr[0][i] == "2")) {
      state.mapArr[0][i] = "99";
      state.entrance = [0, i];
      break;
    }
  }
  //生成出口
  for (let i = state.colCount - 1; i >= 0; i--) {
    //不是障碍物就设置为出口
    if (!(state.mapArr[state.rowCount - 1][i] == "2")) {
      state.mapArr[state.rowCount - 1][i] = "100";
      state.export = [state.rowCount - 1, i];
      break;
    }
  }
};

onMounted(() => {
  //生成障碍物
  generate();

  //开始时把入口放入队列并标记为已访问
  queue.enqueue(state.entrance);
  state.hasSearchArr[state.entrance[0]][state.entrance[1]] = true;
  comeRoute[state.entrance[0] * state.colCount + state.entrance[1]] = null;
  //当队列不为空时
  //let timer = setInterval(() => {
  //  if (!queue.isEmpty()) {
  //    const temp = queue.dequeue() as [number, number];
  //
  //    //如果该点是终点 则结束
  //    if (temp[0] == state.export[0] && temp[1] == state.export[1]) {
  //      //break;
  //      clearInterval(timer);
  //    }
  //
  //    //查找可以前往的点,并入队
  //    const pos = getInnerPos(temp[0], temp[1]);
  //    console.log(pos);
  //
  //    pos.forEach((item) => {
  //      //标记为已查询过
  //      state.hasSearchArr[item[0]][item[1]] = true;
  //      queue.enqueue(item);
  //    });
  //  }
  //}, 100);
  let start_time = new Date().getTime();
  //标记是否有通路
  let hasRoad = false;

  while (!queue.isEmpty()) {
    const temp = queue.dequeue() as nodeType;

    //如果该点是终点 则结束
    if (temp[0] == state.export[0] && temp[1] == state.export[1]) {
      hasRoad = true;
      break;
    }

    //查找可以前往的点,并入队
    const pos = getInnerPos(temp[0], temp[1]);
    //console.log(pos);

    pos.forEach((item) => {
      //标记为已查询过
      state.hasSearchArr[item[0]][item[1]] = true;
      queue.enqueue(item);
      comeRoute[item[0] * state.colCount + item[1]] = [temp[0], temp[1]];
    });
  }

  //从终点开始往回找路径并保存

  let [x, y] = state.export;
  state.roadArr[x][y] = true;

  while (comeRoute[x * state.colCount + y]) {
    let cur_node = comeRoute[x * state.colCount + y];
    x = cur_node[0];
    y = cur_node[1];
    state.roadArr[x][y] = true;
  }
  let end_time = new Date().getTime();
  const spend_time = end_time - start_time;

  if (hasRoad) {
    window.$message.success("找到终点了! 用时:" + spend_time + "ms");
  } else {
    window.$message.error("没有找到路~");
  }
});
</script>

<style scoped lang="scss">
.map {
  width: 600px;
  height: 600px;
  max-height: 100%;
  margin: 0 auto;
  .row {
    display: flex;
  }
}
.block {
  //border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  &.obstacle {
    background-color: rgb(154, 154, 154);
    color: #fff;
  }
}
</style>
