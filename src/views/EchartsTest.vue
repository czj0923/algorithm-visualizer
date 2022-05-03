<template>
  <div>
    <div id="main" style="width: 100%; min-height: 500px"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import * as echarts from "echarts";
import { NSpin, NButton } from "naive-ui";
type EChartsOption = echarts.EChartsOption;

onMounted(() => {
  var myChart = echarts.init(document.getElementById("main") as HTMLElement);

  const data: number[] = [];
  for (let i = 0; i < 50; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  let option: EChartsOption = {
    xAxis: {
      type: "category",
      animationDuration: 300,
      animationDurationUpdate: 300,
      //max: 4, // only the largest 3 bars will be displayed
    },
    yAxis: {
      max: "dataMax",
    },
    series: [
      {
        //realtimeSort: true,
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
    animationDurationUpdate: 3000,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
  };
  function run() {
    for (let i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
    myChart.setOption({
      series: [
        {
          //type: "bar",
          data,
        },
      ],
    });
  }
  //setTimeout(function () {
  //  run();
  //}, 0);
  //setInterval(function () {
  //  run();
  //}, 3000);

  option && myChart.setOption(option);
});
</script>
<style scoped lang="scss"></style>
