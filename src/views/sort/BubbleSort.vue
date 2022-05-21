<template>
  <div class="panel">
    <transition-group name="flip-list">
      <div
        class="bar"
        v-for="item in state.curStep.arr"
        :key="item.value"
        :class="{ switch: item.status == 1, finish: item.status == 2 }"
        :style="{ height: (450 / state.length) * item.value + 'px' }"
      >
        <span class="num">{{ item.value }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref, unref } from "vue";
import { shuffle } from "@/utils/shuffle";
import { IState, ISortItem, IInfo } from "@/types/sort";
import test from "@/utils/SortingAlgorithm/test";

const state: IState = reactive({
  length: 10,
  arr: [],
  sortInfo: [
    {
      arr: [],
      desc: "",
    },
  ],
  curStep: {
    arr: [],
    desc: "",
  },
});

let index = ref<number>(0);
let timer: number | undefined = undefined;

onMounted(() => {
  for (let i = 1; i <= state.length; i++) {
    let obj: ISortItem = {
      value: i,
      status: 0,
    };
    state.arr.push(obj);
  }
  shuffle(state.arr);
  state.sortInfo = test(state.arr);
  //信息数组的长度
  const len = (state.sortInfo as IInfo[]).length;
  timer = setInterval(() => {
    console.log(unref(index), len);

    if (unref(index) >= len) {
      clearInterval(timer);
      return false;
    }
    state.curStep = (state.sortInfo as IInfo[])[unref(index)];
    console.log(state.curStep.arr);
    index.value++;
  }, 2000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
<style scoped lang="scss"></style>
