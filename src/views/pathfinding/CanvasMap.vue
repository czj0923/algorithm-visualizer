<template>
  <canvas class="map" id="canvasMap" width="600" height="600"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, defineProps, watch } from "vue";
import { blockType } from "@/types/PathFinding";
const props = defineProps<{
  rowCount: number;
  colCount: number;
  mapArr: blockType[][];
  roadArr: boolean[][];
}>();

onMounted(() => {
  const canvas = document.getElementById("canvasMap") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  //绘制地图
  const drawMap = () => {
    if (!props.mapArr.length) {
      return false;
    }

    //先清空地图
    ctx.fillStyle = "#d2edff";
    ctx.fillRect(0, 0, 600, 600);

    let width = 600 / props.colCount;
    let height = 600 / props.rowCount;
    for (let i = 0; i < props.rowCount; i++) {
      for (let j = 0; j < props.colCount; j++) {
        //绘制地图
        if (props.mapArr[i][j] === "2") {
          ctx.fillStyle = "rgb(255, 96, 96)";
        } else {
          ctx.fillStyle = "transparent";
        }
        if (props.roadArr[i][j]) {
          ctx.fillStyle = "#0f0";
        }
        ctx.fillRect(j * width, i * height, width, height);
      }
    }
  };
  //标记是否在进行绘制，防止重复绘制
  let flag = true;
  watch(
    [() => props.mapArr, () => props.roadArr],
    () => {
      if (flag) {
        flag = false;
        drawMap();
        flag = true;
      }
    },
    {
      immediate: true,
    }
  );
});
</script>
<style scoped lang="scss"></style>
