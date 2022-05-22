<template>
  <div class="tool-panel">
    <n-button type="warning" @click="reset"> 重置 </n-button>
    <n-button type="success" @click="prevStep" :disabled="step === 1">
      上一步
    </n-button>
    <n-button
      type="success"
      @click="nextStep"
      :disabled="step === store.stepCount"
    >
      下一步
    </n-button>
    <n-slider :min="1" :max="store.stepCount" :on-update:value="slide" />
    <div class="info-panel">
      <div>
        {{ store.curStep.desc }}
        <!-- <span
              v-for="(item, index) in state.sortInfo"
              :key="index"
              :class="{ cur: index === step - 1 }"
            >
              {{ item.desc }}
            </span> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { unref, ref } from "vue";
import { NButton, NSlider } from "naive-ui";
import { useSortStore } from "@/store/sort";
import { IInfo } from "@/types/sort";

const store = useSortStore();

let step = ref<number>(1);
let timer: number | undefined = undefined;
//重置
const reset = () => {
  console.log(123);
};
//下一步
const nextStep = () => {
  clearInterval(timer);
  if (unref(step) < store.sortInfo.length) {
    step.value++;
    store.curStep = (store.sortInfo as IInfo[])[unref(step) - 1];
  }
};
//上一步
const prevStep = () => {
  clearInterval(timer);
  if (unref(step) > 1) {
    step.value--;
    store.curStep = (store.sortInfo as IInfo[])[unref(step) - 1];
  }
};
//滑动滑动条
const slide = (value: number) => {
  if (unref(step) !== value) {
    step.value = value;
    store.curStep = (store.sortInfo as IInfo[])[unref(step) - 1];
  }
};

//信息数组的长度
//const len = (state.sortInfo as IInfo[]).length;
//timer = setInterval(() => {
//  if (unref(step) >= len) {
//    clearInterval(timer);
//    return false;
//  }
//  state.curStep = (state.sortInfo as IInfo[])[unref(step)];
//  step.value++;
//}, store.delay);
</script>
<style lang="scss" scoped></style>
