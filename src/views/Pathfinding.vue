<template>
  <div class="path-finding">
    <n-grid x-gap="12" cols="xs:1 l:2" responsive="screen">
      <n-gi>
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
              <ApertureSharp v-if="block === '99'" />
              <DiamondOutline v-else-if="block === '100'" />
            </div>
          </div>
        </div>
      </n-gi>
      <n-gi>
        <n-card title="统计信息">
          <n-statistic label="搜索时间">
            {{ statisticalData.spendTime }}
            <template #suffix> ms </template>
          </n-statistic>
          <n-statistic label="单位距离">
            {{ statisticalData.distance }}
            <template #suffix> 单位 </template>
          </n-statistic>
        </n-card>
        <div class="set-panel">
          <n-grid x-gap="12" :cols="2">
            <n-gi>
              <n-card title="地图" hoverable>
                <n-form
                  ref="mapFormRef"
                  :label-width="80"
                  :model="mapData"
                  label-placement="left"
                  size="small"
                  ><n-form-item label="行数" path="rowCount">
                    <n-input-number
                      v-model:value="mapData.rowCount"
                      placeholder="最大值"
                      :min="10"
                      :max="200"
                    />
                  </n-form-item>
                  <n-form-item label="列数" path="colCount">
                    <n-input-number
                      v-model:value="mapData.colCount"
                      placeholder="最大值"
                      :min="10"
                      :max="200"
                    /> </n-form-item
                  ><n-form-item label="障碍物数" path="obstacleNum">
                    <n-input-number
                      v-model:value="mapData.obstacleNum"
                      placeholder="最大值"
                      :min="10"
                      :max="10000"
                    />
                  </n-form-item>
                  <n-form-item>
                    <n-button type="primary" @click="reGenerateMap">
                      重新生成地图
                    </n-button>
                  </n-form-item>
                </n-form>
              </n-card>
            </n-gi>
            <n-gi>
              <n-card title="设置" hoverable>
                <n-form
                  ref="formRef"
                  :label-width="80"
                  label-placement="left"
                  size="small"
                >
                  <n-form-item label="使用算法">
                    <n-radio-group
                      name="radiogroup"
                      :on-update:value="findPath"
                      default-value="dfs"
                    >
                      <n-space>
                        <n-radio
                          v-for="item in typeArr"
                          :key="item.key"
                          :value="item.key"
                          :disabled="item.key == 'astar'"
                        >
                          {{ item.name }}
                        </n-radio>
                      </n-space>
                    </n-radio-group>
                  </n-form-item>
                </n-form>
              </n-card>
            </n-gi>
          </n-grid>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref } from "vue";
import { initData, posType, blockType } from "@/types/PathFinding";
import {
  NButton,
  FormInst,
  NForm,
  NFormItem,
  NInputNumber,
  NRadioGroup,
  NSpace,
  NRadio,
  NCard,
  NGrid,
  NGi,
  NStatistic,
} from "naive-ui";
import { Stack } from "@/utils/stack";
import { Queue } from "@/utils/queue";
import { DiamondOutline, ApertureSharp } from "@vicons/ionicons5";

const state = reactive(new initData());

const formRef = ref<FormInst | null>(null);

const typeArr = [
  {
    name: "广度优先(BFS)",
    key: "bfs",
  },
  {
    name: "深度优先(DFS)",
    key: "dfs",
  },
  {
    name: "A*",
    key: "astar",
  },
];

const mapData = reactive({
  rowCount: 200,
  colCount: 200,
  obstacleNum: 10000,
});

const statisticalData = reactive({
  spendTime: 0,
  distance: 0,
});

//生成随机坐标
function getRandom(rowCount: number, colCount: number): posType {
  return [
    Math.round(Math.random() * (rowCount - 1)),
    Math.round(Math.random() * (colCount - 1)),
  ];
}

//获取可以前往的坐标
function getInnerPos(
  mapArr: Array<Array<blockType>>,
  x: number,
  y: number,
  rowCount: number,
  colCount: number,
  hasSearchArr: Array<Array<boolean>>
): posType[] {
  let aroundPos: Array<posType> = [
    [x, y - 1],
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
  ];
  return aroundPos.filter((arr) => {
    return (
      arr[0] >= 0 &&
      arr[0] < rowCount &&
      arr[1] >= 0 &&
      arr[1] < colCount &&
      mapArr[arr[0]][arr[1]] !== "2" &&
      !hasSearchArr[arr[0]][arr[1]]
    );
  });
}

//广度优先搜索
const bfs = (
  mapArr: Array<Array<blockType>>,
  entrance: posType,
  exit: posType,
  rowCount: number,
  colCount: number
): {
  hasRoad: boolean;
  distance: number;
  roadArr: Array<Array<boolean>>;
} => {
  //利用队列来实现bfs
  const queue = new Queue();
  //开始时把入口放入队列并标记为已访问
  queue.enqueue(entrance);

  //存放路径  将二维数组地图映射成为一维数组 对应一维数组下标:colCount*x+y
  const comeRoute = new Array(state.rowCount * state.colCount);
  //初始化已搜索过的节点
  let hasSearchArr: Array<Array<boolean>> = [];
  //距离
  let distance = 0;
  for (let i = 0; i < rowCount; i++) {
    hasSearchArr[i] = [];
    for (let j = 0; j < colCount; j++) {
      hasSearchArr[i][j] = false;
    }
  }
  hasSearchArr[entrance[0]][entrance[1]] = true;

  //标记是否有道路
  let hasRoad = false;

  comeRoute[entrance[0] * colCount + entrance[1]] = null;

  while (!queue.isEmpty()) {
    const temp = queue.dequeue() as posType;
    //如果该点是终点 则结束
    if (temp[0] == exit[0] && temp[1] == exit[1]) {
      //标记是否有通路
      hasRoad = true;
      break;
    }

    //查找可以前往的点,并入队
    const pos = getInnerPos(
      mapArr,
      temp[0],
      temp[1],
      rowCount,
      colCount,
      hasSearchArr
    );

    pos.forEach((item) => {
      //标记为已查询过
      hasSearchArr[item[0]][item[1]] = true;
      queue.enqueue(item);
      comeRoute[item[0] * colCount + item[1]] = [temp[0], temp[1]];
    });
  }

  let roadArr: Array<Array<boolean>> = [];
  for (let i = 0; i < rowCount; i++) {
    roadArr[i] = [];
    for (let j = 0; j < colCount; j++) {
      roadArr[i][j] = false;
    }
  }

  //从终点开始往回找路径并保存
  let [x, y] = exit;
  roadArr[x][y] = true;

  while (comeRoute[x * state.colCount + y]) {
    distance++;
    let cur_node = comeRoute[x * state.colCount + y];
    x = cur_node[0];
    y = cur_node[1];
    roadArr[x][y] = true;
  }

  return {
    hasRoad,
    distance,
    roadArr,
  };
};

//深度优先搜索
const dfs = (
  mapArr: Array<Array<blockType>>,
  entrance: posType,
  exit: posType,
  rowCount: number,
  colCount: number
): {
  hasRoad: boolean;
  distance: number;
  roadArr: Array<Array<boolean>>;
} => {
  //利用栈来实现dfs
  const stack = new Stack();
  //开始时把入口入栈并标记为已访问
  stack.push(entrance);

  //存放路径  将二维数组地图映射成为一维数组 对应一维数组下标:colCount*x+y
  const comeRoute = new Array(state.rowCount * state.colCount);
  //距离
  let distance = 0;

  let hasSearchArr: Array<Array<boolean>> = [];
  for (let i = 0; i < rowCount; i++) {
    hasSearchArr[i] = [];
    for (let j = 0; j < colCount; j++) {
      hasSearchArr[i][j] = false;
    }
  }
  hasSearchArr[entrance[0]][entrance[1]] = true;
  //标记是否有道路
  let hasRoad = false;

  while (!stack.isEmpty()) {
    const temp = stack.pop() as posType;
    //如果该点是终点 则结束
    if (temp[0] == exit[0] && temp[1] == exit[1]) {
      //标记是否有通路
      hasRoad = true;
      break;
    }
    //查找可以前往的点,并入栈
    const pos = getInnerPos(
      mapArr,
      temp[0],
      temp[1],
      rowCount,
      colCount,
      hasSearchArr
    );

    pos.forEach((item) => {
      //标记为已查询过
      hasSearchArr[item[0]][item[1]] = true;
      stack.push(item);
      comeRoute[item[0] * colCount + item[1]] = [temp[0], temp[1]];
    });
  }
  let roadArr: Array<Array<boolean>> = [];
  for (let i = 0; i < rowCount; i++) {
    roadArr[i] = [];
    for (let j = 0; j < colCount; j++) {
      roadArr[i][j] = false;
    }
  }

  //从终点开始往回找路径并保存
  let [x, y] = exit;
  roadArr[x][y] = true;

  while (comeRoute[x * state.colCount + y]) {
    distance++;
    let cur_node = comeRoute[x * state.colCount + y];
    x = cur_node[0];
    y = cur_node[1];
    roadArr[x][y] = true;
  }

  return { hasRoad, distance, roadArr };
};

//生成地图
const generateMap = (
  rowCount: number,
  colCount: number,
  obstacleNum: number
): {
  mapArr: Array<Array<blockType>>;
  roadArr: Array<Array<boolean>>;
  entrance: posType;
  exit: posType;
} => {
  //先重置map
  let mapArr: Array<Array<blockType>> = [];
  let roadArr: Array<Array<boolean>> = [];
  let entrance: posType = [0, 0];
  let exit: posType = [0, 0];

  for (let i = 0; i < rowCount; i++) {
    mapArr[i] = [];
    roadArr[i] = [];
    for (let j = 0; j < colCount; j++) {
      mapArr[i][j] = "1";
      roadArr[i][j] = false;
    }
  }

  //生成障碍物
  for (let i = 0; i < obstacleNum; i++) {
    let [x, y] = getRandom(rowCount, colCount);
    while (mapArr[x][y] === "2") {
      [x, y] = getRandom(rowCount, colCount);
    }

    mapArr[x][y] = "2";
  }
  //生成入口
  for (let i = 0; i < colCount; i++) {
    //不是障碍物就设置为入口
    if (!(mapArr[0][i] == "2")) {
      mapArr[0][i] = "99";
      entrance = [0, i];
      break;
    }
  }
  //生成出口
  for (let i = colCount - 1; i >= 0; i--) {
    //不是障碍物就设置为出口
    if (!(mapArr[rowCount - 1][i] == "2")) {
      mapArr[rowCount - 1][i] = "100";
      exit = [rowCount - 1, i];
      break;
    }
  }

  return {
    mapArr,
    roadArr,
    entrance,
    exit,
  };
};

//重新生成
const reGenerateMap = () => {
  const { mapArr, roadArr, entrance, exit } = generateMap(
    mapData.rowCount,
    mapData.colCount,
    mapData.obstacleNum
  );
  state.rowCount = mapData.rowCount;
  state.colCount = mapData.colCount;
  state.obstacleNum = mapData.obstacleNum;
  state.mapArr = mapArr;
  state.roadArr = roadArr;
  state.entrance = entrance;
  state.exit = exit;
};

//当切换选择时重新搜索路径
const findPath = (value: string) => {
  let start_time = new Date().getTime();
  let data: {
    hasRoad: boolean;
    distance: number;
    roadArr: boolean[][];
  } = {
    hasRoad: false,
    distance: 0,
    roadArr: [],
  };
  if (value === "bfs") {
    data = bfs(
      state.mapArr,
      state.entrance,
      state.exit,
      state.rowCount,
      state.colCount
    );
  } else if (value === "dfs") {
    data = dfs(
      state.mapArr,
      state.entrance,
      state.exit,
      state.rowCount,
      state.colCount
    );
  }

  state.roadArr = data.roadArr;

  let end_time = new Date().getTime();
  statisticalData.spendTime = end_time - start_time;
  statisticalData.distance = data.distance;

  if (data.hasRoad) {
    window.$message.success(`找到终点了! 用时:${statisticalData.spendTime} ms`);
  } else {
    window.$message.error("没有找到路~");
  }
};

onMounted(() => {
  //生成障碍物和出入口
  const { mapArr, roadArr, entrance, exit } = generateMap(
    state.rowCount,
    state.colCount,
    state.obstacleNum
  );
  state.mapArr = mapArr;
  state.roadArr = roadArr;
  state.entrance = entrance;
  state.exit = exit;

  let start_time = new Date().getTime();
  let {
    hasRoad,
    distance,
    roadArr: roadArray,
  } = dfs(
    state.mapArr,
    state.entrance,
    state.exit,
    state.rowCount,
    state.colCount
  );
  let end_time = new Date().getTime();
  statisticalData.spendTime = end_time - start_time;
  statisticalData.distance = distance;
  state.roadArr = roadArray;

  if (hasRoad) {
    window.$message.success(
      "找到终点了! 用时:" + statisticalData.spendTime + "ms"
    );
  } else {
    window.$message.error("没有找到路~");
  }
});
</script>

<style scoped lang="scss">
.path-finding {
  display: flex;
}
.map {
  width: 600px;
  height: 600px;
  max-height: 100%;
  margin-right: 20px;
  .row {
    display: flex;
  }
}
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: #d2edff;
  &.obstacle {
    background-color: rgb(255, 96, 96);
    color: #fff;
  }
}
.set-panel {
  flex: 1;
}
</style>
