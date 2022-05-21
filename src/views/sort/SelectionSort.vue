<template>
  <div class="panel">
    <transition-group name="flip-list">
      <div
        class="bar"
        :class="{
          switch: item.status == 1,
          finish: item.status == 2,
          min: item.status == 3,
        }"
        v-for="item in state.arr"
        :key="item.value"
        :style="{ height: (450 / state.length) * item.value + 'px' }"
      >
        <span class="num">{{ item.value }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { shuffle } from "@/utils/shuffle";
import { selectionSort } from "@/utils/SortingAlgorithm";
import { IState, ISortItem } from "@/types/sort";

const state: IState = reactive({
  length: 10,
  arr: [],
});

onMounted(() => {
  for (let i = 1; i <= state.length; i++) {
    let obj: ISortItem = {
      value: i,
      status: 0,
    };
    state.arr.push(obj);
  }
  shuffle(state.arr);
  selectionSort(state.arr);
});
</script>
<style scoped lang="scss"></style>
