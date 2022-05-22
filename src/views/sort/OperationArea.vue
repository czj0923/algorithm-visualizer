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
    <n-slider :min="1" :max="store.stepCount" v-model:value="step" />
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
import { unref, ref, watch } from "vue";
import { NButton, NSlider } from "naive-ui";
import { useSortStore } from "@/store/sort";
import { IInfo } from "@/types/sort";
import { useRoute } from "vue-router";

const store = useSortStore();
const route = useRoute();

let step = ref<number>(1);
let timer: number | undefined = undefined;

//路由发生变化时重置step
watch(route, () => {
  step.value = 1;
});

//监听滑动条变化
watch(step, (newValue) => {
  step.value = newValue;
  store.curStep = store.sortInfo[unref(step) - 1];
});

//重置
const reset = () => {
  step.value = 0;
  store.curStep = store.sortInfo[0];
};
//下一步
const nextStep = () => {
  clearInterval(timer);
  if (unref(step) < store.sortInfo.length) {
    step.value++;
    store.curStep = store.sortInfo[unref(step) - 1];
  }
};
//上一步
const prevStep = () => {
  clearInterval(timer);
  if (unref(step) > 1) {
    step.value--;
    store.curStep = store.sortInfo[unref(step) - 1];
  }
};

//信息数组的长度
//const len = state.sortInfo.length;
//timer = setInterval(() => {
//  if (unref(step) >= len) {
//    clearInterval(timer);
//    return false;
//  }
//  state.curStep = state.sortInfo[unref(step)];
//  step.value++;
//}, store.delay);
</script>
<style lang="scss" scoped></style>
