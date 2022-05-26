<template>
  <div class="panel counting">
    <n-tag type="error" size="large"> {{ route.meta.title }} </n-tag>
    <div class="counting-bar-wrap">
      <div
        class="bar"
        v-for="(item, index) in store.curStep.arr"
        :key="index"
        :class="{ switch: item.status == 1, finish: item.status == 2 }"
        :style="{
          height: (300 / store.length) * item.value + 'px',
          opacity: item.value === -1 ? 0 : 1,
        }"
      >
        <span class="num">{{ item.value }}</span>
      </div>
    </div>
    <div class="count-bar">
      <div class="line">
        <div
          class="count-box"
          v-for="(item, index) in store.countArr"
          :key="index"
          :style="{
            backgroundColor:
              store.curStep.arr[index].status === 2 ? 'red' : '#fff',
          }"
        >
          {{ item }}
        </div>
      </div>
      <div class="line">
        <div class="count-num" v-for="i in store.length" :key="i">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { countingSort } from "@/utils/SortingAlgorithm";
import { useSortStore } from "@/store/sort";
import { IInfo } from "@/types/sort";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const store = useSortStore();
const route = useRoute();

onMounted(() => {
  let info = countingSort(JSON.parse(JSON.stringify(store.arr)));
  store.sortInfo = info;
  store.stepCount = info.length;
  store.curStep = (store.sortInfo as IInfo[])[0];
});
</script>
<style scoped lang="scss">
.counting-bar-wrap {
  position: absolute;
  bottom: 150px;
  display: flex;
  align-items: flex-end;
  width: calc(100% - 20px);
  .bar {
    //flex: 1;
  }
}
.count-bar {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  .line {
    display: flex;
    justify-content: center;
    & > div {
      width: 46px;
      height: 46px;
      line-height: 46px;
    }
  }
  .count-box {
    border: 1px solid #000;
    &:not(:last-child) {
      border-right-width: 0px;
    }
  }
}
</style>
