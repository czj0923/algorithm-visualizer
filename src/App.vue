<template>
  <n-config-provider :theme="store.theme" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider :max="2">
        <ConfigApi />
      </n-message-provider>
    </n-loading-bar-provider>
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts" setup>
import ConfigApi from "@/components/config-api.vue";
import { GlobalThemeOverrides } from "naive-ui";
import { useMainStore } from "@/store/main";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#e66b1a",
  },
};

const store = useMainStore();
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
