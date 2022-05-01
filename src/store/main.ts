import { defineStore } from "pinia";
import { BuiltInGlobalTheme } from "naive-ui/lib/themes/interface";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      theme: null as BuiltInGlobalTheme | null,
    };
  },
  getters: {},
  actions: {},
});
