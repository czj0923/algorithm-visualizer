<template>
  <canvas class="map" id="canvasMap" width="600" height="600"></canvas>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import bfs from "./js/bfs";
import dfs from "./js/dfs";

onMounted(() => {
  const canvas = document.getElementById("canvasMap") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  var posX = 20,
    posY = 100;

  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 60; j++) {
      if (i % 2 != j % 2) {
        ctx.fillStyle = "green";
      } else {
        ctx.fillStyle = "red";
      }
      ctx.fillRect(i * 10, j * 10, 10, 10);
    }
  }
});
</script>
<style scoped lang="scss"></style>
