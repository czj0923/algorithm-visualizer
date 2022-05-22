<template>
  <div class="panel">
    <transition-group name="flip-list">
      <div
        class="bar"
        v-for="item in store.curStep.arr"
        :key="item.value"
        :class="{ switch: item.status == 1, finish: item.status == 2 }"
        :style="{ height: (450 / store.length) * item.value + 'px' }"
      >
        <span class="num">{{ item.value }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { shuffle } from "@/utils/shuffle";
import { IState, ISortItem, IInfo } from "@/types/sort";
import { bubbleSort } from "@/utils/SortingAlgorithm";
import { useSortStore } from "@/store/sort";

const store = useSortStore();
const state: IState = reactive({
  arr: [],
});

onMounted(() => {
  for (let i = 1; i <= store.length; i++) {
    let obj: ISortItem = {
      value: i,
      status: 0,
    };
    state.arr.push(obj);
  }
  shuffle(state.arr);
  let info = bubbleSort(state.arr);
  store.sortInfo = info;
  store.stepCount = info.length;
  store.curStep = (store.sortInfo as IInfo[])[0];
});
</script>
<style scoped lang="scss"></style>
