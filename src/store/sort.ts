import { defineStore } from "pinia";
import { IInfo } from "@/types/sort";

interface ISortStoreState {
  length: number;
  delay: number;
  sortInfo: IInfo[];
  curStep: IInfo;
  stepCount: number;
}

export const useSortStore = defineStore("sort", {
  state: (): ISortStoreState => {
    return {
      length: 10, //排序的数组长度
      delay: 700, //自动播放的延时
      //所有排序的信息
      sortInfo: [
        {
          arr: [],
          desc: "",
        },
      ],
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
