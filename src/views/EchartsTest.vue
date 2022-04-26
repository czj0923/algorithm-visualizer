<template>
  <div>
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import * as echarts from "echarts";
import { NSpin } from "naive-ui";
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
