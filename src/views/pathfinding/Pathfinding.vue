<template>
  <n-grid :x-gap="12" cols="xs:1 l:2" responsive="screen" class="path-finding">
    <n-gi>
      <div class="map-wrapper">
        <n-spin :show="otherState.loading">
          <n-tabs type="line" animated>
            <n-tab-pane name="CanvasMap" tab="Canvas地图">
              <CanvasMap
                :rowCount="state.rowCount"
                :colCount="state.colCount"
                :mapArr="state.mapArr"
                :roadArr="state.roadArr"
              />
            </n-tab-pane>
            <n-tab-pane name="DomMap" tab="Dom地图">
              <DomMap
                :rowCount="state.rowCount"
                :colCount="state.colCount"
                :mapArr="state.mapArr"
                :roadArr="state.roadArr"
              />
            </n-tab-pane>
          </n-tabs>
        </n-spin>
      </div>
    </n-gi>
    <n-gi>
      <n-grid x-gap="12" y-gap="12" :cols="2">
        <n-gi :span="2">
          <n-card>
            <template #header>
              <n-icon>
                <InformationCircleOutline />
              </n-icon>
              <span>统计信息</span></template
            >
            <n-space>
              <!-- <n-tag type="info"> {{state}} </n-tag> -->
              <n-statistic label="搜索时间">
                {{ statisticalData.spendTime }}
                <template #suffix> ms</template>
              </n-statistic>
              <n-statistic label="单位距离">
                {{ statisticalData.distance }}
                <template #suffix> 步</template>
              </n-statistic>
            </n-space>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card hoverable>
            <template #header>
              <n-icon>
                <MapOutline />
              </n-icon>
              <span>地图</span>
            </template>
            <n-form
              ref="mapFormRef"
              :label-width="80"
              :model="state"
              label-placement="left"
              size="small"
              ><n-form-item label="行数" path="rowCount">
                <n-input-number
                  v-model:value="state.rowCount"
                  placeholder="最大值"
                  :min="10"
                  :max="200"
                />
              </n-form-item>
              <n-form-item label="列数" path="colCount">
                <n-input-number
                  v-model:value="state.colCount"
                  placeholder="最大值"
                  :min="10"
                  :max="200"
                /> </n-form-item
              ><n-form-item label="障碍物数" path="obstacleNum">
                <n-input-number
                  v-model:value="state.obstacleNum"
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
          <n-card hoverable>
            <template #header>
              <n-icon>
                <SettingsOutline />
              </n-icon>
              <span>设置</span>
            </template>
            <n-form
              ref="formRef"
              :label-width="80"
              label-placement="left"
              size="small"
            >
              <n-form-item label="使用算法">
                <n-radio-group
                  name="radiogroup"
                  v-model:value="statisticalData.type"
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
              <n-form-item>
                <n-button type="primary" @click="findPath"> 开始搜索 </n-button>
              </n-form-item>
            </n-form>
          </n-card>
        </n-gi>
      </n-grid>
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref } from "vue";
import { IState, posType, blockType } from "@/types/PathFinding";
import bfs from "./js/bfs";
import dfs from "./js/dfs";
import { getRandom } from "./js/index";
import DomMap from "./DomMap.vue";
import CanvasMap from "./CanvasMap.vue";
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
  NIcon,
  NSpin,
  NTabs,
  NTabPane,
} from "naive-ui";

import {
  SettingsOutline,
  MapOutline,
  InformationCircleOutline,
} from "@vicons/ionicons5";

const state: IState = reactive({
  mapArr: [], //1.空白 2.障碍物 99.入口 100.出口
  hasSearchArr: [],
  roadArr: [],
  rowCount: 200,
  colCount: 200,
  obstacleNum: 10000,

  entrance: [0, 0], //入口
  exit: [0, 0], //出口
});

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
    name: "A*(AStar)",
    key: "astar",
  },
];

const statisticalData = reactive({
  spendTime: 0,
  distance: 0,
  type: "dfs",
});

const otherState = reactive({
  loading: false,
});

//生成地图
const generateMap = (
  rowCount: number,
  colCount: number,
  obstacleNum: number
): {
  mapArr: blockType[][];
  roadArr: boolean[][];
  entrance: posType;
  exit: posType;
} => {
  //先重置map
  let mapArr: blockType[][] = [];
  let roadArr: boolean[][] = [];
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
    state.rowCount,
    state.colCount,
    state.obstacleNum
  );
  state.mapArr = mapArr;
  state.roadArr = roadArr;
  state.entrance = entrance;
  state.exit = exit;
};

//当切换选择时重新搜索路径
const findPath = () => {
  window.$loading.start();
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
  if (statisticalData.type === "bfs") {
    data = bfs(
      state.mapArr,
      state.entrance,
      state.exit,
      state.rowCount,
      state.colCount
    );
  } else if (statisticalData.type === "dfs") {
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
  setTimeout(() => {
    window.$loading.finish();
  }, 0);
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

  let { rowCount, colCount, obstacleNum } = state;
  state.rowCount = rowCount;
  state.colCount = colCount;
  state.obstacleNum = obstacleNum;

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
:deep(.n-card > .n-card-header) {
  .n-card-header__main {
    display: flex;
    align-items: center;
    i {
      margin-right: 8px;
    }
  }
}
.path-finding {
}

.set-panel {
  flex: 1;
}
</style>
