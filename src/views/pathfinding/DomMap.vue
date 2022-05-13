<template>
  <div class="map">
    <div
      class="row"
      :style="{
        height: 600 / rowCount + 'px',
      }"
      v-for="(row, index1) in mapArr"
      :key="index1"
    >
      <div
        class="block"
        :class="{ obstacle: block === '2' }"
        :style="{
          width: 600 / colCount + 'px',
          backgroundColor: roadArr[index1][index2] ? '#0f0' : '',
        }"
        v-for="(block, index2) in row"
        :key="index2"
      >
        <ApertureSharp v-if="block === '99'" />
        <DiamondOutline v-else-if="block === '100'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { blockType } from "@/types/PathFinding";
import { DiamondOutline, ApertureSharp } from "@vicons/ionicons5";

const props = defineProps<{
  rowCount: number;
  colCount: number;
  mapArr: blockType[][];
  roadArr: boolean[][];
}>();
</script>
<style scoped lang="scss">
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
</style>
