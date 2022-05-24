import { defineStore } from "pinia";
import { IInfo, ISortItem } from "@/types/sort";

interface ISortStoreState {
  length: number;
  delay: number;
  arr: ISortItem[];
  sortInfo: IInfo[];
  curStep: IInfo;
  stepCount: number;
}

export const useSortStore = defineStore("sort", {
  state: (): ISortStoreState => {
    return {
      length: 10, //排序的数组长度
      delay: 700, //自动播放的延时
      arr: [], //待排序数组
      //所有排序的信息
      sortInfo: [],
      //当前
      curStep: {
        arr: [],
        desc: "",
      },
      stepCount: 0, //总步数
    };
  },
  getters: {},
  actions: {},
});
