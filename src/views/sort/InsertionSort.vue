<template>
  <n-grid
    x-gap="12"
    y-gap="12"
    cols="xs:1 l:2"
    responsive="screen"
    class="sort-page"
  >
    <n-gi>
      <div class="panel">
        <transition-group name="flip-list">
          <div
            class="bar"
            :class="{ switch: item.status == 1, finish: item.status == 2 }"
            v-for="item in state.curStep.arr"
            :key="item.value"
            :style="{ height: (450 / store.length) * item.value + 'px' }"
          >
            <span class="num">{{ item.value }}</span>
          </div>
        </transition-group>
      </div>
    </n-gi>
    <n-gi>
      <div class="tool-panel">
        <n-button type="warning" @click="reset"> 重置 </n-button>
        <n-button type="warning" @click="prevStep"> 上一步 </n-button>
        <n-button type="warning" @click="nextStep"> 下一步 </n-button>
        <n-slider :min="1" :max="state.stepCount" :on-update:value="slide" />
        <div class="info-panel">
          <div>
            <span
              v-for="(item, index) in state.sortInfo"
              :key="index"
              :class="{ cur: index === step - 1 }"
            >
              {{ item.desc }}
            </span>
          </div>
        </div>
      </div></n-gi
    >
  </n-grid>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, unref } from "vue";
import { shuffle } from "@/utils/shuffle";
import { insertionSort } from "@/utils/SortingAlgorithm";
import { IState, ISortItem, IInfo } from "@/types/sort";
import { useSortStore } from "@/store/sort";
import { NGrid, NGi, NButton, NSlider } from "naive-ui";

const store = useSortStore();

const state: IState = reactive({
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
  stepCount: 0, //总步数
});

let step = ref<number>(0);
let timer: number | undefined = undefined;

//重置
const reset = () => {
  console.log(123);
};
//下一步
const nextStep = () => {
  clearInterval(timer);
  if (unref(step) < state.sortInfo.length) {
    step.value++;
    state.curStep = (state.sortInfo as IInfo[])[unref(step) - 1];
  }
};
//上一步
const prevStep = () => {
  clearInterval(timer);
  if (unref(step) > 1) {
    step.value--;
    state.curStep = (state.sortInfo as IInfo[])[unref(step) - 1];
  }
};
//滑动滑动条
const slide = (value: number) => {
  if (unref(step) !== value) {
    step.value = value;
    state.curStep = (state.sortInfo as IInfo[])[unref(step) - 1];
  }
};
onMounted(() => {
  for (let i = 1; i <= store.length; i++) {
    let obj: ISortItem = {
      value: i,
      status: 0,
    };
    state.arr.push(obj);
  }
  shuffle(state.arr);

  state.sortInfo = insertionSort(state.arr);
  //信息数组的长度
  const len = (state.sortInfo as IInfo[]).length;
  timer = setInterval(() => {
    if (unref(step) >= len) {
      clearInterval(timer);
      return false;
    }
    state.curStep = (state.sortInfo as IInfo[])[unref(step)];
    step.value++;
  }, 1500);
});
</script>
<style scoped lang="scss"></style>
