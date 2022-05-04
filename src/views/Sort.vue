<template>
  <div>
    <div id="main" style="width: 100%; min-height: 500px"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import * as echarts from "echarts";
import { shuffle } from "@/utils/index";
import bubbleSort from "@/utils/SortingAlgorithm/bubbleSort";
type EChartsOption = echarts.EChartsOption;

onMounted(() => {
  const myChart = echarts.init(document.getElementById("main") as HTMLElement);

  let data: number[] = [];
  for (let i = 1; i <= 50; i++) {
    data.push(i);
  }
  data = shuffle(data);
  console.log(data);

  data = bubbleSort(data);
  console.log(data);

  let option: EChartsOption = {
    xAxis: {
      type: "category",
    },
    yAxis: {
      max: "dataMax",
    },
    series: [
      {
        name: "X",
        type: "bar",
        data: data,
        label: {
          show: true,
          position: "top",
          valueAnimation: true,
        },
      },
    ],
    legend: {
      show: true,
    },
    animationDuration: 0,
    animationDurationUpdate: 500,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
  };

  function run() {
    data = shuffle(data);
    myChart.setOption({
      series: [
        {
          data,
        },
      ],
    });
  }
  //setInterval(() => {
  //  run();
  //}, 1000);

  option && myChart.setOption(option);
});
</script>
<style scoped lang="scss"></style>
