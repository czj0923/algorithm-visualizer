<template>
  <div class="tool-panel">
    <n-button type="warning" @click="reset" strong> 重置 </n-button>
    <n-button-group>
      <n-button type="success" round @click="prevStep" :disabled="step === 1">
        <template #icon>
          <n-icon>
            <ArrowBack />
          </n-icon>
        </template>
        上一步
      </n-button>
      <n-button
        type="success"
        @click="nextStep"
        :disabled="step === store.stepCount"
        icon-placement="right"
        round
      >
        <template #icon>
          <n-icon>
            <ArrowForward />
          </n-icon>
        </template>
        下一步
      </n-button>
    </n-button-group>

    <n-slider :min="1" :max="store.stepCount" v-model:value="step" />
    <div class="info-panel">
      <div>
        {{ store.curStep.desc }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { unref, ref, watch } from "vue";
import { useSortStore } from "@/store/sort";
import { useRoute } from "vue-router";
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";

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
  step.value = 1;
  store.curStep = store.sortInfo[unref(step) - 1];
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
