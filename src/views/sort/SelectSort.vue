<template>
  <div class="panel">
    <n-tag type="error" size="large"> {{ route.meta.title }} </n-tag>
    <transition-group name="flip-list" tag="div" class="bar-wrap">
      <div
        class="bar"
        :class="{
          switch: item.status == 1,
          finish: item.status == 2,
          min: item.status == 3,
        }"
        v-for="item in store.curStep.arr"
        :key="item.value"
        :style="{ height: (450 / store.length) * item.value + 'px' }"
      >
        <span class="num">{{ item.value }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { selectionSort } from "@/utils/SortingAlgorithm";
import { IInfo } from "@/types/sort";
import { useSortStore } from "@/store/sort";
import { useRoute } from "vue-router";

const store = useSortStore();
const route = useRoute();

onMounted(() => {
  let info = selectionSort(JSON.parse(JSON.stringify(store.arr)));
  store.sortInfo = info;
  store.stepCount = info.length;
  store.curStep = (store.sortInfo as IInfo[])[0];
});
</script>
<style scoped lang="scss"></style>
