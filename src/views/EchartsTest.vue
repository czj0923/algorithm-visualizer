<template>
  <div>
    <div id="main" style="width: 600px; height: 400px"></div>
    <div v-for="(item, index1) in state.arr" :key="index1">
      --------------
      <div v-for="(item2, index2) in item" :key="index2">{{ item2 }}</div>
    </div>
    <n-button @click="test">测试</n-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import * as echarts from "echarts";
import { NSpin, NButton } from "naive-ui";

const state: {
  arr: Array<Array<string>>;
} = reactive({
  arr: [],
});
for (let i = 0; i < 10; i++) {
  state.arr[i] = [];
  for (let j = 0; j < 10; j++) {
    state.arr[i][j] = "1";
  }
}

const test = () => {
  state.arr[5][5] = "reuteuritei";
};
onMounted(() => {
  var myChart = echarts.init(document.getElementById("main") as HTMLElement);

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  myChart.setOption(option);
});
</script>
<style scoped lang="scss"></style>
