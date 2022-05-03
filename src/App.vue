<template>
  <n-config-provider
    :theme="store.theme"
    :breakpoints="{ xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 }"
  >
    <n-loading-bar-provider>
      <n-message-provider :max="2">
        <ConfigApi />
      </n-message-provider>
    </n-loading-bar-provider>
    <Layout />
  </n-config-provider>
</template>

<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
import ConfigApi from "@/components/config-api.vue";
import {
  NMessageProvider,
  NConfigProvider,
  NLoadingBarProvider,
} from "naive-ui";
import { useMainStore } from "@/store/main";

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
